<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('staff_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('staff_status');
            $table->string('title');
            $table->string('phoneno1');
            $table->string('phoneno2')->nullable();
            $table->string('gender');
            $table->string('marital');
            $table->string('college')->nullable();
            $table->string('department')->nullable();
            $table->string('unit')->nullable();
            $table->string('dob');
            $table->string('address')->nullable();
            $table->string('country');
            $table->integer('level');
            $table->integer('step');
            $table->date('firstappoint_date');
            $table->date('lastappoint_date');
            $table->string('firstpost');
            $table->string('app_confirmed');
            $table->date('date_confirmed');
            $table->string('currentpost');
            $table->date('currentpostdate');
            $table->string('salary');
            $table->string('status');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff_profiles');
    }
};
