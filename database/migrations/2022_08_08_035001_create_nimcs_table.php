<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nimcs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('state_of_origin');
            $table->string('lga');
            $table->string('state_of_residence');
            $table->string('address');
            $table->string('profession');
            $table->string('birthdate');
            $table->string('birthplace');
            $table->string('birthcountry');
            $table->string('central_id');
            $table->string('religion');
            $table->string('gender');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nimcs');
    }
};
