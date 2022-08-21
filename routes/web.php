<?php
Auth::routes();

Route::get("/index", "StudyController@index");
Route::post("/store", "StudyController@store");
Route::get("/todos","StudyController@todo");
Route::delete("/todos/{todo}", "StudyController@delete");
Route::get('/home', 'HomeController@index')->name('home');


Route::get('/{any}', function(){
    return view('index');
})->where('any', '.*'); 




