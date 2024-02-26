<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class React extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_react_comments');
    }

    public function media()
    {
        return $this->belongsToMany(Media::class, 'user_media_reacts');
    }

    public function comments()
    {
        return $this->belongsToMany(Comment::class, 'user_react_comments');
    }
}
