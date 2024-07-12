<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'body', 'store_id','image'];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }
    public static function getByUUID($uuid)
    {
        return static::where('uuid', $uuid);
    }
    public static function search($query)
    {
        return static::where('body', 'LIKE', "%{$query}%");
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'user_id');
    }

    public function store(): HasOne
    {
        return $this->hasOne(Store::class,'store_id');
    }

    public function bookmarks(): BelongsTo
    {
        return $this->belongsTo(Bookmark::class,'post_id');
    }

    public function ratings(): BelongsTo
    {
        return $this->belongsTo(Rating::class,'post_id');
    }

    public function reports(): BelongsTo
    {
        return $this->belongsTo(Report::class,'post_id');
    }

    public function comments(): BelongsTo
    {
        return $this->belongsTo(Comment::class,'post_id');
    }

    public function likes(): BelongsTo
    {
        return $this->belongsTo(Like::class,'post_id');
    }
}
