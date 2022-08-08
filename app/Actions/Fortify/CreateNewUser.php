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
            $user = new User();
            $user->name = $input['name'];
            $user->email = $input['email'];
            $user->password = Hash::make($input['password']);
            $user->state_of_origin = $arc->state_of_origin;
            $user->lga = $arc->lga;
            $user->state_of_residence = $arc->state_of_residence;
            $user->address = $arc->address;
            $user->profession = $arc->profession;
            $user->birthdate = $arc->birthdate;
            $user->birthplace = $arc->birthplace;
            $user->birthcountry = $arc->birthcountry;
            $user->central_id = $arc->central_id;
            $user->religion = $arc->religion;
            $user->gender = $arc->gender;
            $user->voters_id = uniqid();
            dd($user);
            return $user->save();
        }else{
            throw ValidationException::withMessages([
                "nin" => ['The nin details supplied is not valid, please supply  a valid nin or contact Nimc.'],
            ]);
        }
    }
}
