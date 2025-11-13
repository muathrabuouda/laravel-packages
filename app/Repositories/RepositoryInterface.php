<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\DTOs\DTO;

/**
 * RepositoryInterface
 *
 * @template TModel of Model
 * @template TDTO of DTO
 */
interface RepositoryInterface
{
    /**
     * Save a model with DTO data only.
     *
     * @param TDTO $dto Data Transfer Object specific to the operation.
     * @return TDTO The saved DTO instance.
     */
    public function save(DTO $dto): DTO;
}
