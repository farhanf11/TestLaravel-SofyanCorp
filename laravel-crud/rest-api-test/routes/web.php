<?php

use Illuminate\Support\Facades\Route;

Route::get('anggota', [App\Http\Controllers\AnggotaController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});
