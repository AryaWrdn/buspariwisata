<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // 1. Tambah kolom 'status' di tabel orders
        Schema::table('orders', function (Blueprint $table) {
            $table->string('status')->default('Pending')->after('pesan'); // Pending / Confirmed
        });

        // 2. Bikin tabel khusus buat nyimpen Tiket (A-01, dst)
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade'); // Terhubung ke pesanan
            $table->string('nomor_tiket'); // Contoh: A-01
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tickets');
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
