<?php

namespace App\Http\Controllers;

use App\Mail\MailContact;
use App\Models\Contacts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ContactController extends Controller
{

    private $formats = ['txt', 'pdf', 'doc', 'docx', 'odt'];

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }

    public function save(Request $request){
        $ext = explode('.', $request->nameFile)[1];

        // validate formats files accept
        if (!in_array($ext, $this->formats)) {
            return response()->json([
                'error' => true,
                'validation' => 'File type not accept'
            ], 200);
        }

        // validate email
        if(!preg_match(
            '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/'
            , $request->email)){
            return response()->json([
                'error' => true,
                'validation' => 'e-mail not valid'
            ], 200);
        }

        // validate telephone
        if(!preg_match('/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/', $request->telephone)){
            return response()->json([
                'error' => true,
                'validation' => 'telephone not valid'
            ], 200);
        }

        // validate size file accept
        $file = file_get_contents($request->file);
        if (strlen($file) > 500000){
            return response()->json([
                'error' => true,
                'validation' => 'File size max 500KB'
            ], 200);
        }

        $filepath = mt_rand().''.strtotime('now').'.'.$ext;
        $request->merge(['file_path' => $filepath]);
        $request->merge(['ip' => $request->ip()]);

        Storage::disk('public')->put(env('CONTACT_PATH').'/'.$filepath, file_get_contents($request->file));

        $contact = Contacts::create($request->all());

        // send mail
        Mail::to($request->email)->send(new MailContact($contact));

        return response()->json([
            'contact' => $contact
        ], 200);

    }
}
