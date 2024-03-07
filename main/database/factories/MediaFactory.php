<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Media>
 */
class MediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userIds = User::pluck('id')->toArray();

        return [
            'title' => $this->faker->sentence,
            'link' => $this->faker->url,
            'file' => 'sample.jpg',
            'type' => 'image',
            'user_id' => $this->faker->randomElement($userIds),
        ];
    }
}
