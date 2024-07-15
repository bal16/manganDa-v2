<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use App\Models\User;

class PostApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $perPage = request()->limit ?? 10;

        $post = Post::withRelation();

        if (request()->has('u')) {
            $user = User::where('username', '=', request()->u)->firstOrFail();
            $post->where('user_id', '=', $user->id);
        } elseif (request()->has('q')) {
            $post = Post::search(request()->q);
        }

        return response()->json($post->paginate($perPage)->withQueryString());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $uuid)
    {
        return response()->json(
            Post::getByUUID($uuid)
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
