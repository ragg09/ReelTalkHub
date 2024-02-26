<?php

namespace Database\Seeders;

use App\Models\React;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reacts = [
            'Like',
            'Heart'

        ];

        foreach ($reacts as $react) {
            React::create(
                [
                    'name' => $react,
                    'icon' => $react . '.png',
                ]
            );
        }
    }
}
