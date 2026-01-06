<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\OrderController;

Route::get('/admin/dashboard', [OrderController::class, 'index'])->name('admin.dashboard');

Route::get('/', function () {
    return view('welcome');
});