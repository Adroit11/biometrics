<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\Nimc;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Illuminate\Validation\ValidationException;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'nin' => ['required', 'string', 'max:255'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

        $arc = Nimc::where('central_id', $input['nin'])->first();

        if ($arc) {
            return User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
                'state_of_origin' => $arc->state_of_origin,
                'lga' => $arc->lga,
                'state_of_residence' => $arc->state_of_residence,
                'address' => $arc->address,
                'profession' => $arc->profession,
                'birthdate' => $arc->birthdate,
                'birthplace' => $arc->birthplace,
                'birthcountry' => $arc->birthcountry,
                'central_id' => $arc->central_id,
                'religion' => $arc->religion,
                'gender' => $arc->gender,
                'voters_id' => uniqid(),
            ]);
        }else{
            throw ValidationException::withMessages([
                "nin" => ['The nin details supplied is not valid, please supply  a valid nin or contact Nimc.'],
            ]);
        }
    }
}
