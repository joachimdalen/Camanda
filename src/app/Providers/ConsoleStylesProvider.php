<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Symfony\Component\Console\Helper\ProgressBar;

class ConsoleStylesProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        ProgressBar::setFormatDefinition(
            'custom_format',
            ' %current%/%max% [%bar%] %percent:3s%% (%elapsed:6s%/%estimated:-6s%)'
        );
    }
}
