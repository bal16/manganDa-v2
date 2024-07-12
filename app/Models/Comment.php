<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'post_id', 'body'];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'user_id');
    }

    public function post(): HasOne
    {
        return $this->hasOne(Post::class, 'post_id');
    }
    
}
