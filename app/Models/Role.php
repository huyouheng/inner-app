<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //部门
    protected $table = 'roles';

    protected $fillable = [
        'name', 'c_time', 'user_id'
    ];
}
