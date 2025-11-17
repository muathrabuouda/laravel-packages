import { useForm as veeUseForm } from 'vee-validate'
import { useFlash } from './useFlash'

export function useFormHandlers<T extends Record<string, any>>(validationSchema: any, initialValues: T) {
    const { meta, resetForm, setErrors } = veeUseForm({
        validationSchema,
        initialValues: initialValues as any,
    });

    const { showFlash } = useFlash()

    function handleError(errors: Record<string, string>) {
        setErrors(errors as Partial<Record<keyof T, string>>)
    }

    function handleSuccess(page: any) {
        showFlash(page.props?.flash?.message)
        resetForm()
    }

    return { meta, resetForm, handleError, handleSuccess }
}
