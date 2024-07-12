<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = ['rate', 'post_id', 'user_id'];

    public function post():HasOne
    {
        return $this->hasOne(Post::class, 'id', 'post_id');
    }

    public function user():HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
