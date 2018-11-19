
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta content="{{csrf_token()}}" name="csrf-token"/>
    <title>Typography | Bootstrap Based Admin Template - Material Design</title>

    <!-- Favicon-->
    <link rel="icon" href="../favicon.ico" type="image/x-icon">

    <!-- Google Fonts -->
    <link href="{{asset('/css/fonts.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('/css/fonts-icon.css')}}" rel="stylesheet" type="text/css">

    <!-- Bootstrap Core Css -->
    <link href="/css/bootstrap.css" rel="stylesheet">

    <!-- Waves Effect Css -->
    <link href="/css/waves.css" rel="stylesheet" />

    <!-- Animation Css -->
    <link href="/css/animate.css" rel="stylesheet" />

    <!-- Custom Css -->
    <link href="/css/style.css" rel="stylesheet">


    <link href="/css/all-themes.css" rel="stylesheet" />
    <link href="/css/iziToast.css" rel="stylesheet" />
    <style>
        .navbar-header {
            padding: 0px 0px 0px 7px;
        }
        .navbar-header .bars:before,.navbar-header .bars:after{
            margin-top: -5px;
        }
        .navbar-brand{
            margin-top: 5px;
        }
        section.content{
            margin: 25px 15px 0 240px;
        }
        .sidebar{
            width: 230px;
            top: 55px;
            height: calc(100vh - 55px);
        }
        .navbar-right{
            margin-top: -5px;
        }
        .right-sidebar{
            top: 56px;
        }
        .navbar-nav > li > .dropdown-menu {
            margin-top: 0px !important;
            margin-right: -50px;
        }
        .panel .datepicker-popup{
            position: relative !important;
        }
    </style>
</head>

<body class="theme-red">
<!-- Page Loader -->
<div class="page-loader-wrapper">
    <div class="loader">
        <div class="preloader">
            <div class="spinner-layer pl-red">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <p>Please wait...</p>
    </div>
</div>
<!-- #END# Page Loader -->
<!-- Overlay For Sidebars -->
<div class="overlay"></div>
<!-- #END# Overlay For Sidebars -->
<!-- Search Bar -->
<div class="search-bar">
    <div class="search-icon">
        <i class="material-icons">search</i>
    </div>
    <input type="text" placeholder="START TYPING...">
    <div class="close-search">
        <i class="material-icons">close</i>
    </div>
</div>
<!-- #END# Search Bar -->
<div id="app">
    <app></app>
</div>
<!-- Jquery Core Js -->
{{--<script src="/js/jquery.min.js"></script>--}}

<!-- Bootstrap Core Js -->
{{--<script src="/js/bootstrap.js"></script>--}}

<script src="/js/app.js"></script>

<!-- Slimscroll Plugin Js -->
<script src="/js/jquery.slimscroll.js"></script>

<!-- Waves Effect Plugin Js -->
<script src="/js/waves.js"></script>

<!-- Custom Js -->
<script src="/js/admin.js"></script>

<!-- Demo Js -->
<script src="/js/demo.js"></script>
<script src="/js/iziToast.min.js"></script>
<script src="{{asset('/js/custom.js')}}"></script>

</body>

</html>