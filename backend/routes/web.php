<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\AdminController;

Route::get('/admin/dashboard', [OrderController::class, 'index'])->name('admin.dashboard');
Route::get('/admin', [AdminController::class, 'index']);
Route::post('/admin/confirm/{id}', [AdminController::class, 'confirm'])->name('admin.confirm');
Route::get('/', function () {
    return view('welcome');
});
