<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\UpdateLikeRequest;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;

class LikeApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // if (!request()->has(['pid','uid'])) return response()->json([
        //     'message' => 'Missing required parameters: pid, uid'
        // ], 400);
        if (!request()->has(['pid'])) return response()->json([
            'message' => 'Missing required parameters: pid'
        ], 400);
        $post = Post::where('uuid', '=', request()->pid)->firstOrFail('id');
        $liked_post = Like::where('post_id', '=', $post->id);
        // ?? get like count of the post
        $like['count'] = $liked_post->count();

        // ?? get is auth user like the post or not
        if (request()->has(['uid'])) {
            $user = User::where('username','=',request()->uid)->firstdOrFail('id')->id;
            $like['byUser'] = $liked_post->where('user_id', '=', $user->id)->exists();
        }
        return response()->json($like);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLikeRequest $request)
    {
        $like = Like::create($request->validated());

        return response()->json($like, 201);
    }

    /**
     * Display the specified resource.
     */
    // public function show(string $username)
    // {
    //     return response()->json(
    //         Like::getByUUID($username)
    //     );
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdateLikeRequest $request, string $id)
    // {
    // $like = Like::find($id)->first();

    //     if (!$like) {
    //         return response()->json([
    //            'message' => 'Like not found',
    //         ], 404);
    //     }

    //     $like->update($request->validated());

    //     return response()->json($like);
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $like = Like::find($id)->first();
        if (!$like) {
            return response()->json([
               'message' => 'Like not found',
            ], 404);
        }
        $like->delete();
        return response()->json([
           'message' => 'Like deleted successfully',
        ], 204);
    }
}
