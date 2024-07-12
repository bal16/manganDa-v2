<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Store extends Model
{
    use HasFactory;
    protected $fillable = ['name','user_id','description', 'address','map_link','ratings', 'is_open','is_validate'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function posts (): HasMany
    {
        return $this->hasMany(Post::class,'store_id');
    }

    public function menus(): HasMany
    {
        return $this->hasMany(Menu::class,'store_id');
    }
}
