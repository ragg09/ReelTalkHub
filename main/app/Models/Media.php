<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }

    public function comments()
    {
        return $this->belongsToMany(Comment::class, 'user_media_comments');
    }

    public function reacts()
    {
        return $this->belongsToMany(React::class, 'user_media_reacts');
    }

    public static function getPaginatedMedia($perPage = 3, $pageNumber = 1)
    {
        return self::with(['genres', 'comments', 'reacts', 'user'])
            ->paginate($perPage, ['*'], 'page', $pageNumber);
    }
}
