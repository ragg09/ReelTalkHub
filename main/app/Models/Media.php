<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function comments()
    {
        return $this->belongsToMany(Comment::class, 'user_media_comments');
    }

    public function reacts()
    {
        return $this->belongsToMany(React::class, 'user_media_reacts');
    }
}
