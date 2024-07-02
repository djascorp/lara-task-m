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

        $validated = $request->validate([
            "type_name" => "required|unique:status_types,type_name|string"
        ]);

        $validated["user_id"] = auth()->user()->id;

        StatusType::create($validated);

        return back()->with([
            "message" => "Saved Successfully"
        ]);
    }
}
