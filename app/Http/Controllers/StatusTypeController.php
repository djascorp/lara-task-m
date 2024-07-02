<?php

namespace App\Http\Controllers;

use App\Models\StatusType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatusTypeController extends Controller
{
    public function index(){
        return Inertia::render("Guarded/Settings/StatusType/Index",[]);
    }

    public function store(Request $request) {

        $request->validate([
            "type_name" => ["required","unique","string"]
        ]);

//        StatusType::create([
//
//        ]);

        return back()->with([
            "message" => "Saved Successfully"
        ]);
    }
}
