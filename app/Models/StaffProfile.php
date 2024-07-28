<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffProfile extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'staff_status',
        'title',
        'phoneno1',
        'phoneno2',
        'gender',
        'marital',
        'college',
        'department',
        'unit',
        'dob',
        'address',
        'country',
        'level',
        'step',
        'firstappoint_date',
        'lastappoint_date',
        'firstpost',
        'app_confirmed',
        'date_confirmed',
        'currentpost',
        'currentpostdate',
        'salary',
        'status',
        'user_id',
    ];

}
