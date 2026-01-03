<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'nama' => 'required|string',
            'email' => 'required|email',
            'telepon' => 'required',
            'tanggal' => 'required|date',
            'jumlah' => 'required|integer',
            'pesan' => 'nullable|string',
        ]);

        // Simpan ke database
        $order = Order::create($validated);

        return response()->json([
            'message' => 'Pesanan berhasil dikirim!',
            'data' => $order
        ], 201);
    }
}
