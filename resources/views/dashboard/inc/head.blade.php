<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="rtl">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description"
        content="Modern admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities with bitcoin dashboard.">
    <meta name="keywords"
        content="admin template, modern admin template, dashboard template, flat admin template, responsive admin template, web app, crypto dashboard, bitcoin dashboard">
    <meta name="author" content="PIXINVENT">
    <title>Dashboard sales - Modern Admin - Clean Bootstrap 4 Dashboard HTML Template + Bitcoin
        Dashboard
    </title>
    <link rel="apple-touch-icon" href="{{ asset('uploads/'.get_general_value('website_icon')) }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('uploads/'.get_general_value('website_icon')) }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Quicksand:300,400,500,700"
        rel="stylesheet">
    <link href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css" rel="stylesheet">

    <!-- BEGIN VENDOR CSS-->

    <!-- END MODERN CSS-->
    <!-- BEGIN Page Level CSS-->
    @if (app()->getLocale() == 'ar')
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/vendors.css') }}">
        <!-- END VENDOR CSS-->
        <!-- BEGIN MODERN CSS-->
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/app.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/custom-rtl.css') }}">
        <link rel="stylesheet" type="text/css"
            href="{{ asset('backend/app-assets/css-rtl/core/menu/menu-types/horizontal-menu.css') }}">
        <link rel="stylesheet" type="text/css"
            href="{{ asset('backend/app-assets/css-rtl/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css"
            href="{{ asset('backend/app-assets/css-rtl/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/assets/css/style-rtl.css') }}">
        <style>
            .margin-right{
                margin-right: 60%
            }
        </style>
    @else
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css/vendors.css') }}">
        <!-- END VENDOR CSS-->
        <!-- BEGIN MODERN CSS-->
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css/app.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css/custom.css') }}">
        <link rel="stylesheet" type="text/css"
            href="{{ asset('backend/app-assets/css/core/menu/menu-types/horizontal-menu.css') }}">
        <link rel="stylesheet" type="text/css"
            href="{{ asset('backend/app-assets/css/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css"
            href="{{ asset('backend/app-assets/css/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/assets/css/style.css') }}">
        <style>
            .margin-right{
                margin-left: 60%
            }
        </style>
    @endif
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/forms/selects/selectivity-full.min.css') }}"> --}}
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

    <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/forms/tags/tagging.css') }}">


    <link rel="stylesheet" type="text/css"
        href="{{ asset('backend/app-assets/vendors/css/charts/jquery-jvectormap-2.0.3.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/charts/morris.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/fonts/simple-line-icons/style.css') }}">

    <!-- END Page Level CSS-->
    <!-- BEGIN Custom CSS-->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('backend/app-assets/vendors/css/tables/datatable/datatables.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/extensions/sweetalert.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/core/colors/palette-gradient.css') }}">

        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/extensions/toastr.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/extensions/toastr.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/plugins/forms/wizard.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/pickers/daterange/daterangepicker.css') }}">

        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/plugins/pickers/daterange/daterange.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/core/menu/menu-types/horizontal-menu.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/css-rtl/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/fonts/simple-line-icons/style.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('backend/app-assets/vendors/css/cryptocoins/cryptocoins.css') }}">   
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
 <style>
    .select2-container{
        width: 100% !important;
    }
 </style>
        @yield('style')
        <!-- END Page Level CSS-->

    <!-- END Custom CSS-->
</head>