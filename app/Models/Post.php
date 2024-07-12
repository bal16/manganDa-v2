<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
    public function getByUUID($uuid)
    {
        return static::where('uuid', $uuid);
    }
    public function search($query)
    {
        return static::where('body', 'LIKE', "%{$query}%")
            ->orWhere('store_id', 'LIKE', "%{$query}%");
    }
}
