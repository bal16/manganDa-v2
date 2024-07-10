Route::get('/stores', [StoreController::class, 'show'])->name('stores')->middleware('admin_cant_open');

// explore
Route::get('/explore', [PostController::class, 'explore'])->name('explore')->middleware('admin_cant_open');

Route::middleware('auth')->group(function () {
    // Store
    Route::get('/store-register', [StoreController::class, 'create'])->name('store.create')->middleware('store_cant_open');
    Route::post('/store-register', [StoreController::class, 'store'])->name('store.store')->middleware('store_cant_open');
    Route::patch('/store/{id}/status', [StoreController::class, 'updateStatus'])->name('store.updateStatus');

    //Home
    Route::get('/', [PostController::class, 'show'])->name('home')->middleware('admin_cant_open');
    // Route::get('/dashboard', [PostController::class, 'show'])->name('home')->middleware('admin_cant_open');
    Route::post('/', [PostController::class, 'store']);
    Route::get('/post/{id}', [PostController::class, 'index']);

    // profile
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile')->middleware('admin_cant_open');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/{id}', [ProfileController::class, 'userProfile'])->name('profile.single-user');

    // post
    Route::post('/post/{user_id}/{store_id}', [PostController::class, 'create'])->name('post.create');
    Route::delete('/post/{id}', [PostController::class, 'destroy'])->name('post.destroy');
    // Route::delete('/post/{id}',[ReportController::class, 'index'])->name('report.index');

    // bookmark
    Route::get('/bookmark', [BookmarkController::class, 'show'])->name('bookmark')->middleware('admin_cant_open');
    Route::delete('/bookmark/{id}', [BookmarkController::class, 'destroy'])->name('bookmark.destroy');
    Route::post('/bookmarks/{id}', [BookmarkController::class, 'create'])->name('bookmark.create');

    //  rating
    Route::post('/rating', [RatingController::class, 'store'])->name('rating.store');
    Route::put('/rating/{id}', [RatingController::class, 'update'])->name('rating.update');

    // comment
    Route::post('/post/{id}', [CommentController::class, 'store'])->name('comment.store');

    //search
    Route::post('/search', [PostController::class, 'search']);
    // Route::get('/dashboard',function(){
    //     return Inertia::render('Dashboard');
    // });


    // report
    Route::post('/report/{id}', [ReportController::class, 'store'])->name('report.store');

    // menu
    Route::post('/menu', [MenuController::class, 'store'])->name('menu.store');
    Route::delete('/menus/{id}',[MenuController::class, 'destroy']);
});

Route::middleware(['is_admin', 'auth'])->group(function () {
    Route::get('/dashboard', function (){
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // report
    Route::get('/db/report', [ReportController::class, 'index'])->name('report.index');
    Route::get('/db/reportList', [ReportController::class, 'list'])->name('report.list');
    Route::delete('/report/{id}', [ReportController::class, 'destroy'])->name('report.destroy');

    // user
    Route::get('/db/users', [UserController::class, 'index']);

    // store
    Route::get('/db/stores', [StoreController::class, 'index']);
    Route::get('/db/stores/requests', [StoreController::class, 'showStoreNotValidate'])->name('stores.notValidate');
    Route::get('/db/stores/requestsList', [StoreController::class, 'list'])->name('stores.list');
    Route::patch('/db/stores/requests/{id}', [StoreController::class, 'validate_store']);
    Route::delete('/db/stores/requests/{id}', [StoreController::class, 'decline_store']);

});
