<?php
Auth::routes();

Route::get("/index", "StudyController@index");

Route::get('/{any}', function(){
    return view('index');
})->where('any', '.*'); 
