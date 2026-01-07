<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = ['order_id', 'nomor_tiket'];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
