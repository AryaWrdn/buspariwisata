<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Ticket;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        // Ambil data pesanan beserta tiketnya, urutkan dari yang terbaru
        $orders = Order::with('tickets')->latest()->get();
        return view('admin.dashboard', compact('orders'));
    }

    public function confirm($id)
    {
        $order = Order::findOrFail($id);

        // Cek kalau sudah dikonfirmasi, jangan bikin tiket lagi
        if ($order->status == 'Confirmed') {
            return back();
        }

        // --- LOGIC PEMBUATAN NOMOR TIKET CANGGIH ---

        // 1. Ambil tiket terakhir yang pernah dibuat di seluruh database
        $lastTicket = Ticket::latest('id')->first();

        $lastPrefix = 'A';
        $lastNumber = 0;

        if ($lastTicket) {
            // Pecah "A-05" jadi "A" dan "5"
            $parts = explode('-', $lastTicket->nomor_tiket);
            $lastPrefix = $parts[0];
            $lastNumber = intval($parts[1]);
        }

        // 2. Generate tiket sebanyak jumlah pesanan (looping)
        for ($i = 0; $i < $order->jumlah; $i++) {
            $lastNumber++; // Nambah 1

            // Cek kalau sudah 100, reset ke 1 dan ganti huruf (A -> B)
            if ($lastNumber > 100) {
                $lastNumber = 1;
                $lastPrefix++; // Ajaibnya PHP: 'A'++ jadi 'B', 'B'++ jadi 'C'
            }

            // Format jadi 01, 02, dst (pakai str_pad)
            $nomorTiketBaru = $lastPrefix . '-' . str_pad($lastNumber, 2, '0', STR_PAD_LEFT);

            // Simpan ke database
            Ticket::create([
                'order_id' => $order->id,
                'nomor_tiket' => $nomorTiketBaru
            ]);
        }

        // 3. Update status pesanan jadi Confirmed
        $order->update(['status' => 'Confirmed']);

        return back();
    }
}