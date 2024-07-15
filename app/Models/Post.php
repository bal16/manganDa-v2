<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
    public static function withRelation()
    {
        return static::with(['user','store','likes','bookmarks']);
    }
    public static function getByUUID($uuid)
    {
        return static::withRelation()->where('uuid', $uuid)->first();
    }
    public static function search($query)
    {
        return static::withRelation()->where('body', 'LIKE', "%{$query}%");
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class,'store_id');
    }

    public function bookmarks(): HasMany
    {
        return $this->hasMany(Bookmark::class,'post_id');
    }

    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class,'post_id');
    }

    public function reports(): HasMany
    {
        return $this->hasMany(Report::class,'post_id');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class,'post_id');
    }

    public function likes(): HasMany
    {
        return $this->hasMany(Like::class,'post_id');
    }
}
