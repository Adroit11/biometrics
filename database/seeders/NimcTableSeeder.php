<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Nimc;

class NimcTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Nimc::truncate();

        // Make Data

        Nimc::create([
            'name' => 'Oyinkan Aremu',
            'email' => 'oyin@gmail.com',
            'state_of_origin' => 'Lagos',
            'lga' => 'Ikeja',
            'state_of_residence' => 'Lagos',
            'address' => 'Lagos State',
            'profession' => 'Student',
            'birthplace' => 'Lagos State',
            'birthdate' => '1990-08-02',
            'birthcountry' => 'Nigeria',
            'central_id' => 'NG-09122222229',
            'religion' => 'Christian',
            'gender' => 'Female',
        ]);

        Nimc::create([
            'name' => 'Ogundiji Bolade',
            'email' => 'bolade@gmail.com',
            'state_of_origin' => 'Lagos',
            'lga' => 'Ikeja',
            'state_of_residence' => 'Lagos',
            'address' => 'Lagos State',
            'profession' => 'Student',
            'birthplace' => 'Lagos State',
            'birthdate' => '1990-08-02',
            'birthcountry' => 'Nigeria',
            'central_id' => 'NG-0912223429',
            'religion' => 'Christian',
            'gender' => 'Male',
        ]);

        Nimc::create([
            'name' => 'Test Aremu',
            'email' => 'test@gmail.com',
            'state_of_origin' => 'Lagos',
            'lga' => 'Ikeja',
            'state_of_residence' => 'Lagos',
            'address' => 'Lagos State',
            'profession' => 'Student',
            'birthplace' => 'Lagos State',
            'birthdate' => '1990-08-02',
            'birthcountry' => 'Nigeria',
            'central_id' => 'NG-09122222210',
            'religion' => 'Muslim',
            'gender' => 'Male',
        ]);
    }
}
