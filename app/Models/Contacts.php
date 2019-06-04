<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $telephone
 * @property string $message
 * @property string $file
 * @property string $created_at
 * @property string $updated_at
 */
class Contacts extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['name', 'email', 'telephone', 'message', 'file_path', 'ip', 'created_at', 'updated_at'];

}
