<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group([], function(\Illuminate\Routing\Router $router){
    $router->post('/register', 'Auth\RegisterController@register');
    $router->post('/login', 'Auth\LoginController@login');
    $router->post('/logout', 'Auth\LoginController@logout');
    $router->post('/token/refresh', 'Auth\LoginController@refresh');

});