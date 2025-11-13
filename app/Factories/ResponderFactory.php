<?php

namespace App\Factories;

use App\Enums\Responders\ResponderType;
use App\Http\Responders\JsonResponder;
use App\Http\Responders\InertiaResponder;
use App\Http\Responders\RedirectBackResponder;
use App\Http\Responders\Responder;

/**
 * Class ResponderFactory
 *
 * Factory responsible for creating Responder instances based on a given type.
 *
 * This approach allows explicit control over which responder to use, instead of
 * relying on Request headers or content negotiation.
 */
class ResponderFactory
{
    /**
     * Create a Responder instance based on the provided ResponderType.
     *
     * @param ResponderType $type
     *   The type of responder to create (JSON, INERTIA, REDIRECT).
     *
     * @return Responder
     *   An instance of the requested Responder.
     */
    public function make(ResponderType $type): Responder
    {
        return match ($type) {
            ResponderType::JSON => new JsonResponder(),
            ResponderType::INERTIA => new InertiaResponder(),
            ResponderType::REDIRECT => new RedirectBackResponder(),
        };
    }
}
