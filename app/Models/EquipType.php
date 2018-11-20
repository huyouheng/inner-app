<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EquipType extends Model
{
    //设备类型表

    protected $table = 'equip_types';

    protected $fillable = [
        'name', 'params'
    ];
}
