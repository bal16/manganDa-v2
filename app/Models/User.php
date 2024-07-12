<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function role():BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'user_id');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, 'user_id');
    }

    public function likes(): HasMany
    {
        return $this->hasMany(Like::class, 'user_id');
    }

    public function store(): HasOne
    {
        return $this->hasOne(Store::class, 'user_id');
    }

    public function bookmarks(): HasMany
    {
        return $this->hasMany(Bookmark::class,'user_id');
    }

    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class, 'user_id');
    }
    public function reports(): HasMany
    {
        return $this->hasMany(Report::class, 'user_id');
    }

}
