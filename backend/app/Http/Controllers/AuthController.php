<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        return response(['message' => 'User Created', 'user' => $user], 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // Cek Email
        $user = User::where('email', $fields['email'])->first();

        // Cek Password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response(['message' => 'Email atau Password Salah'], 401);
        }

        return response([
            'user' => $user,
            'message' => 'Login Berhasil'
        ], 200);
    }
}
