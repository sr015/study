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
}

