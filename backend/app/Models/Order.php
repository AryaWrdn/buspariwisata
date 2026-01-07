<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['nama', 'email', 'telepon', 'tanggal', 'jumlah', 'pesan', 'status']; // Tambah status

    // Relasi: Satu pesanan punya banyak tiket
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
