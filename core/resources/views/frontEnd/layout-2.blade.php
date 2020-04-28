<!DOCTYPE html>
<html lang="{{ @Helper::currentLanguage()->code }}" dir="{{ @Helper::currentLanguage()->direction }}">
<head>
    @include('frontEnd.includes.head-2')
</head>

<body oncontextmenu="return false;">

    @yield('content')
 
    @include('frontEnd.includes.foot')

</body>
</html>
