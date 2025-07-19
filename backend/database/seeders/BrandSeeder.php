<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BrandSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            'Unibet',
            'Betclic',
            'Pockerstars',
            'Netbet',
            'Bwin',
            'Betsson',
        ];

        foreach ($brands as $brand) {
            Brand::factory()->create(['brand_name' => $brand]);
        }
    }
}
