<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function index()
    {
        $user = Auth::user();
        if ($user->regstatus == 1) {
             return Inertia::render('Staff/Biodata', ['user' => $user]);
        }
        
        // return Inertia::render('Dashboard', ['user' => $user]);
        return Inertia::render('Dashboard', ['user' => $user]);
    }
}
