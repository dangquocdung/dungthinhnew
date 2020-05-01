<meta charset="utf-8">
<meta name="author" content="Đặng Quốc Dũng, +84 986242487"/>

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="{{ URL::asset('frontEnd/css/bootstrap.min.css') }}" rel="stylesheet"/>
<link href="{{ URL::asset('frontEnd/css/fancybox/jquery.fancybox.css') }}" rel="stylesheet">
<link href="{{ URL::asset('frontEnd/css/jcarousel.css') }}" rel="stylesheet"/>
<link href="{{ URL::asset('frontEnd/css/flexslider.css') }}" rel="stylesheet"/>
<link href="{{ URL::asset('frontEnd/css/flexslider.style.css') }}" rel="stylesheet"/>

<link href="{{ URL::asset('frontEnd/css/style.css') }}" rel="stylesheet"/>
<link href="{{ URL::asset('frontEnd/css/color.css') }}" rel="stylesheet"/>
<link rel="stylesheet" href="{{ URL::asset('frontEnd/js/owl-carousel/assets/owl.carousel.min.css') }}">
<link rel="stylesheet" href="{{ URL::asset('frontEnd/js/owl-carousel/assets/owl.theme.default.min.css') }}">

@if( @Helper::currentLanguage()->direction=="rtl")
    <link href="{{ URL::asset('frontEnd/css/rtl.css') }}" rel="stylesheet"/>
@endif

<!-- Favicon and Touch Icons -->
@if(Helper::GeneralSiteSettings("style_fav") !="")
    <link href="{{ URL::asset('uploads/settings/'.Helper::GeneralSiteSettings("style_fav")) }}" rel="shortcut icon"
          type="image/png">
@else
    <link href="{{ URL::asset('uploads/settings/nofav.png') }}" rel="shortcut icon" type="image/png">
@endif
@if(Helper::GeneralSiteSettings("style_apple") !="")
    <link href="{{ URL::asset('uploads/settings/'.Helper::GeneralSiteSettings("style_apple")) }}" rel="apple-touch-icon">
    <link href="{{ URL::asset('uploads/settings/'.Helper::GeneralSiteSettings("style_apple")) }}" rel="apple-touch-icon"
          sizes="72x72">
    <link href="{{ URL::asset('uploads/settings/'.Helper::GeneralSiteSettings("style_apple")) }}" rel="apple-touch-icon"
          sizes="114x114">
    <link href="{{ URL::asset('uploads/settings/'.Helper::GeneralSiteSettings("style_apple")) }}" rel="apple-touch-icon"
          sizes="144x144">
@else
    <link href="{{ URL::asset('uploads/settings/nofav.png') }}" rel="apple-touch-icon">
    <link href="{{ URL::asset('uploads/settings/nofav.png') }}" rel="apple-touch-icon" sizes="72x72">
    <link href="{{ URL::asset('uploads/settings/nofav.png') }}" rel="apple-touch-icon" sizes="114x114">
    <link href="{{ URL::asset('uploads/settings/nofav.png') }}" rel="apple-touch-icon" sizes="144x144">
@endif

<meta property="og:site_name" content="{{ Helper::GeneralSiteSettings("site_title_" . trans('backLang.boxCode')) }}">
<meta property="og:url" content="{{ url()->full()  }}"/>
<meta property="og:type" content="website"/>

<link href="{{ URL::asset('frontEnd/css/bibi.css') }}" rel="stylesheet"/>
<script src="{{ URL::asset('frontEnd/js/bibi.js') }}"></script>
<script src="{{ URL::asset('frontEnd/js/default.js') }}"></script>
