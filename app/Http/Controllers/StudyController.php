<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class StudyController extends Controller
{
    public function index(Todo $todo)
    {
        logger($todo -> get());
        return response() -> json(["todos" => $todo -> get() ]);
    }
    public function store(Request $request, Todo $todo){
        logger($request->all());
        $todo->fill($request->all())->save();
        return response()->json(["message"=> "success"]);
    }
    public function delete(Todo $todo)
    {
        $todo -> delete();
        return response() -> json([]);
    }
}

