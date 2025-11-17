import { toast } from 'vue-sonner'

/**
 * Important Note:
 * Flash messages must be shared from Laravel to Inertia through
 * the shared data file:
 *
 * app/Http/Middleware/HandleInertiaRequests.php
 *
 * Example:
 * 'flash' => [
 *     'message' => $request->session()->get('message'),
 * ]
 *
 * If the flash data is not added to this shared file, it will not
 * be available in Vue and the showFlash() function will not display anything.
 */

export function useFlash() {
    function showFlash(flash: any) {
        if (!flash) return
        if (flash.title && flash.message) {
            toast.success(flash.title, { description: flash.message })
        } else if (flash.message) {
            toast.error(flash.message)
        } else {
            toast.error(flash)
        }
    }
    return { showFlash }
}
