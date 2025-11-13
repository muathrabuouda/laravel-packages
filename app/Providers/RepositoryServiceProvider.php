<?php

namespace App\Providers;

use App\Factories\RepositoryFactory;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // Register RepositoryFactory as a singleton
        $this->app->singleton(RepositoryFactory::class, function ($app) {
            return new RepositoryFactory($app);
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
