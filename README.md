<p align="center">
    <a href="#"><img src="https://github.com/bal16/manganDa/blob/main/resources/images/logo.png?raw=true" width="400" alt="manganDa Logo"></a>
</p>

# manganDa

Students often have busy daily schedules, whether it's attending classes, working on assignments, or participating in other activities. The multitude of activities they engage in also impacts their limited free time. This lack of free time affects the amount of time they have for meals and other activities, often leaving students confused about choosing what to eat. Besides the limited time, the boredom that arises from always eating the same food every day and the lack of information about food options in their area pose additional challenges.

## Tech-Stack

1. Laravel-InertiaJs as the fullstack framework
2. React as the frontend framework
3. daisyUI as the UI library
4. MySQL as the database
5. Tailwind CSS as the CSS framework
6. Axios for HTTP requests

## Installation

### Prerequisites

-   Node.js & npm
-   PHP & Composer
-   MySQL dbms like Laragon or XAMPP

### Steps

1. Clone the repository

```bash
git clone https://github.com/bal16/projectRpl.git
```

2. Install backend dependencies

```bash
composer install
```

3. Install frontend dependencies

```bash
npm install
```

4. Setup environment variables

```bash
cp .env.example .env
```
Configure the .env file with your database and other credentials like storage, time locale, and database.

5. Generate application key

```bash
php artisan key:generate
```

6. Link laravel storage

```bash
php artisan storage:link
```

7. Run migrations

```bash
php artisan migrate
```
Add `--seed` flag if you want the filled app with datas (using fakerPhp) or import the app database from /database/manganda.sql to your database

8. Run the application

```bash
php artisan serve
```
You can skip the command behind because this app is builded version
```bash
npm run dev
```
The application should now be running at http://localhost:8000.

` We hope this platform helps you find delicious and affordable meals, making your busy student life a little easier and more enjoyable!`

## Contributor

-   [@nopal72](https://github.com/nopal72)
-   [@bal16](https://github.com/bal16)
-   [@CodeWithAlif](https://github.com/codewithalif)
-   [@asegaf](https://github.com/username3)
-   [@didi](https://github.com/username3)
