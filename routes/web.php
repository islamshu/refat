<?php

use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcom', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('layouts.frontend');
})->name('home');
Route::get('/', [HomeController::class,'welcom'])->name('home');
Route::get('/checkout', [HomeController::class,'checkout'])->name('checkout');
Route::get('/code', [HomeController::class,'code'])->name('code');

Route::post('/sendData', [HomeController::class,'sendData'])->name('send_data');
Route::post('/send_code', [HomeController::class,'send_code'])->name('send_code');


Route::get('/login', [HomeController::class,'login'])->name('login');
Route::post('/login', [HomeController::class,'post_login'])->name('post_login');
Route::group(['middleware' => ['auth'], 'prefix' => 'dashboard'], function () {
    Route::get('/', action: [HomeController::class,'home'])->name('dashboard');
    Route::get('logout', [HomeController::class, 'logout'])->name('logout');
Route::get('edit_profile', [HomeController::class, 'edit_profile'])->name('edit_profile');
Route::post('edit_profile',[HomeController::class, 'edit_profile_post'])->name('edit_profile_post');
Route::get('setting', [HomeController::class, 'setting'])->name('setting');
Route::get('telegran_setting', [HomeController::class, 'telegran_setting'])->name('telegran_setting');


Route::get('another_setting', [HomeController::class, 'another_setting'])->name('another_setting');

Route::post('add_general', [HomeController::class, 'add_general'])->name('add_general');
Route::resource('products',ProductController::class);
Route::resource('galleries',GalleryController::class);
Route::resource('partners',PartnerController::class);
Route::resource('videos',VideoController::class);
Route::resource('reviews',ReviewController::class);




});   