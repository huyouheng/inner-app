<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    //设备表

    protected $table = 'equipment';

    protected $fillable = [
        'equip_type_id', 'fieldName', 'fieldValue', 'parameter'
    ];
}
