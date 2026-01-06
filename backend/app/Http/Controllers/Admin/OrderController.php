<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index()
    {
        // Mengambil semua data dari tabel orders
        $orders = DB::table('orders')->orderBy('created_at', 'desc')->get();

        return view('admin.dashboard', compact('orders'));
    }
}
