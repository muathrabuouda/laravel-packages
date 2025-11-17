<?php

use UMS\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('users', UserController::class)->withoutMiddleware(['auth', 'verified']);
});
