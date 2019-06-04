@extends('mail.main')
@section('content')
    <table cellpadding="0" cellspacing="0" style="width: 100%">
        <tr>
            <td>
                <h1 style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#2f3133;font-size:19px;font-weight:bold;margin-top:0;text-align:left">{{__('Hello')}} {{$name}}!</h1>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">{{$textMail}}</p>
            </td>
        </tr>
        <tr>
            <td style="box-sizing:border-box; text-align: center; padding-top: 20px;">
                <a href="{{$urlButton}}"
                   style="box-sizing:border-box;border-radius:3px;color:#fff;display:inline-block;text-decoration:none;background-color:#3097d1;border-top:10px solid #3097d1;border-right:18px solid #3097d1;border-bottom:10px solid #3097d1;border-left:18px solid #3097d1"
                   target="_blank">{{__($textButton)}}</a>
            </td>
        </tr>
        <tr>
            <td style="padding-top: 30px;">
                <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">{{__('Thank you for using our platform!')}}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">{{__('Regards')}},<br>{{env('APP_NAME')}}</p>
            </td>
        </tr>
    </table>
@endsection
