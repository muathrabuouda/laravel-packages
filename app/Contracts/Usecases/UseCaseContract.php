<?php
namespace App\Contracts\UseCases;

use App\DTOs\DTO;
use App\Responses\Response;

/**
 * UsecaseContract
 *
 * Base interface for all use cases.
 *
 * @template TInput of DTO
 * @template TOutput of Response
 */
interface UseCaseContract
{
    /**
     * Execute the use case logic.
     *
     * @param  DTO $data
     * @return Response Response object implementing Response
     */
    public function handle(DTO $data): Response;
}
