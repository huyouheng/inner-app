<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'name', 'email', 'password', 'avatar', 'is_active', 'profile_id',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];



}
