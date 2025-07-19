<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    /**
     * Model parameters
     *
     * @var string[]
     */
    protected $fillable = [
        'brand_name',
        'brand_image',
        'rating',
    ];

    /**
     * Change the datetime format of the created_at property
     *
     * @param $value
     * @return string
     */
    public function getCreatedAtAttribute($value) :string
    {
        return date('Y-m-d H:i:s', strtotime($value));
    }

    /**
     * Change the datetime format of the updated_at property
     *
     * @param $value
     * @return string
     */
    public function getUpdatedAtAttribute($value) :string
    {
        return date('Y-m-d H:i:s', strtotime($value));
    }

    /**
     * Countries relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function countries()
    {
        return $this->hasMany(Country::class, 'brand_id');
    }

    /**
     * Gets brands by country code.
     *
     * @param $countryCode
     * @return array|\Illuminate\Database\Eloquent\Collection
     */
    public static function getBrandsByCountryCode($countryCode)
    {
        if ($countryCode === 'DEFAULT') {
            $brands = Brand::all();
        } else {
            $brands = [];
            foreach (Country::whereCountryCode($countryCode)->get() as $brand) {
                $brands[] = $brand->brand->toArray();
            }
        }

        return $brands;
    }
}
