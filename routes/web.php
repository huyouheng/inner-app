<?php


Route::any('{name?}', function () {
    return view('welcome');
})->where('name','[^api].*?');

