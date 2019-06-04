<?php

namespace App\Mail;

use App\Models\Contacts;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailContact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var contact
     */
    private $contact;

    /**
     * Create a new message instance.
     *
     * @param Contacts $contact
     */
    public function __construct(Contacts $contact)
    {
        $this->contact = $contact;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $lineMessage = $this->contact->toJson(JSON_PRETTY_PRINT);

        return $this->subject(__('Contact data from'))
            ->view("mail.default-mail", [
                "name" => $this->contact->name,
                "textMail" => $lineMessage,
                "urlButton" => url('storage/'.env('CONTACT_PATH').'/'.$this->contact->file_path),
                "textButton" => __('Access file link')
            ]);
    }
}
