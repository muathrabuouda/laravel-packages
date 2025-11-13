<?php

namespace App\Providers;

use App\Factories\UsecaseFactory;
use Illuminate\Support\ServiceProvider;

class UsecaseServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(UsecaseFactory::class, function ($app) {
            return new UsecaseFactory($app);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
