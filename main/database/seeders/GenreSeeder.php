<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = [
            'Action',
            'Adventure',
            'Animation',
            'Comedy',
            'Crime',
            'Documentary',
            'Drama',
            'Family',
            'Fantasy',
            'Horror',
            'Mystery',
            'Romance',
            'Sci-Fi',
            'Thriller',
            'War',
            'Western',
            'Biopic',
            'Historical',
            'Musical',
            'Sport',
            'Superhero',
            'Suspense',
            'Noir',
            'Fantasy',
            'Martial Arts',
            'Disaster',
            'Spy',
            'Coming-of-Age',
            'Psychological',
            'Epic',
        ];

        foreach ($genres as $genre) {
            Genre::create(['title' => $genre]);
        }
    }
}
