<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'image', 'price', 'image', 'store_id'];

    public function store(): HasOne
    {
        return $this->hasOne(Store::class, 'store_id');
    }
}
