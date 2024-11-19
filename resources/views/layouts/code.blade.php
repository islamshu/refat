<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification code</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"></script>

        <link rel="icon" type="image/png"
        href="{{ asset('uploads/' . get_general_value('website_icon')) }}">

</head>

<body>


    <style>
        .LoadingShellHeader--banner {
            background-position: 50% 50%;
            background-size: cover;
            background-image: var(--x-skeleton-banner-image);
            --x-skeleton-header-shop-name-color: #fff;
            --x-skeleton-cart-color: #fff;
        }


        .form-control:focus {
            box-shadow: unset;
        }

        @media(max-width:570px) {
            .form-wrapper {
                width: 80% !important;
            }

            .inner-form {
                width: 100% !important;
                margin-top: 50px !important;
            }
        }

        ::placeholder,
        .form-select {
            font-size: 14px;
            color: #5e5e5e !important;
            text-transform: capitalize;
        }
    </style>

    <div style="background-image:url(&quot;https://cdn.shopify.com/s/files/1/0840/7954/2579/files/d_6_2000x.png?v=1717415588&quot;);    height: 123px;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 50%;">
        <header role="banner"
            class="LoadingShellHeader LoadingShellHeader-containerFill LoadingShellHeader-positionStart LoadingShellHeader-hasBackgroundImage">
            <div class="LoadingShellHeaderContent">
                <div class="LoadingHeader LoadingHeader-alignmentStart">
                    <h1 class="LoadingHeaderHeading"><img alt="{{ get_general_value('website_name') }}"
                        src="{{ asset('uploads/' . get_general_value('website_logo')) }}"
                        width="150" height="60" class="LoadingHeaderImage" /></h1>
                </div>
            </div>
        </header>
    </div>


    <div class="container">

        <div class="form-wrapper " style="width: 40%;margin: 60px auto;">
            <h4 style="color: #1C1C4A;">Enter verification code</h4>

            <p class="">we sent you a verification code by message to </br>{{session('formatted_phone');}}. You have 6 attempts.</p>
            <form action="" class="" style="margin-top: 40px;">
                <div class="inner-form" style="width: 80%;margin: auto;">
                    <span class="d-block text-center mb-2">Verification code</span>
                    <input type="number" class="form-control" placeholder="Code" style="border-radius: 3px;height: 50px;" name="code" id="number">
                    <span style="color: rgb(224, 23, 23);margin-bottom: 20px;font-size: 15px;" class="errorMsg  d-none">There is an erroe ecures </span>
                    <button class="btn btnCountine" style="margin-top: 30px; background-color: #1C1C4A;width: 100%;text-transform: uppercase;border-radius: 3px; color: white;height: 50px;">Countine</button>
                    <a href="" class="d-block text-center mt-4" style="text-decoration: none;text-transform: uppercase;color: #1C1C4A;">resend code</a>

                </div>
            </form>
        </div>

    </div>






    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"
        integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script>
        $('.btnCountine').click(function(e) {
            e.preventDefault()
            $('.errorMsg').removeClass('d-none')
            $('.errorMsg').addClass('d-block')
        })
    </script>





<script>
    $('.btnCountine').click(function(e){
       
        e.preventDefault()
        var number = $("#number").val();
        var formData = {
            number: number
                
        };
        $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
        $.ajax({
            type: 'post',
            url: '{{route('send_code')}}',
            data: formData,
            success: function(response) {
                $('.errorMsg').removeClass('d-none')
                $('.errorMsg').addClass('d-block')
            }
        });
     
    })


</script>


</body>

</html>