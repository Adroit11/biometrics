<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\RedirectIfTwoFactorAuthenticatable;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\TwoFactorChallengeView;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Http\Controllers\LoginController;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Fortify;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('central_id', $request->nin)->first();
            if ($user &&
                Hash::check($request->password, $user->password)) {
                return $user;
            }
        });

        // Fortify::authenticateThrough(fn () => [
        //     RedirectIfTwoFactorAuthenticatable::class,
        //     // AttemptToAuthenticate::class,
        //     PrepareAuthenticatedSession::class,
        // ]);

        Fortify::loginView(function ($request) {
            return app()->call(LoginController::class, ['request' => $request]);
        });
        Fortify::confirmPasswordsUsing(function ($user, ?string $password = null) {
            return $user->password ? app(StatefulGuard::class)->validate([
                'email' => $user->email,
                'password' => $password,
            ]) : true;
        });


        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
        Fortify::twoFactorChallengeView(function () {
            return new TwoFactorChallengeView();
        });

        RateLimiter::for('login', function (Request $request) {
            $nin = (string) $request->nin;

            return Limit::perMinute(5)->by($nin.$request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
