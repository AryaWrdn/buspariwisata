<?php
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Route::post('/order-tiket', [OrderController::class, 'store']);
Route::post('/order-tiket', [OrderController::class, 'store']);
