<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/vue3'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { createUserInitialValues, createUserSchema } from "@/pages/dashboard/modules/ums/user/partials/create/form";
import { useFormHandlers } from "@/composables/useFormHandlers";
import { LoaderCircle } from 'lucide-vue-next'

import { store } from '@/routes/users'

const { meta, resetForm, handleError, handleSuccess } = useFormHandlers(
    createUserSchema,
    createUserInitialValues
)
</script>

<template>
    <Form v-bind="store.form()"
          v-slot="{ processing }"
          :on-before="() => meta.valid"
          :on-success="handleSuccess"
          :on-error="handleError"
          class="space-y-4">
        <FormField v-slot="{ componentField }" name="username">
            <FormItem>
                <FormLabel>Username <span class="text-red">*</span></FormLabel>
                <FormControl>
                    <Input type="text" placeholder="@muathabuouda" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="name">
            <FormItem>
                <FormLabel>Name <span class="text-red">*</span></FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Muath R Abu Ouda" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Email <span class="text-red">*</span></FormLabel>
                <FormControl>
                    <Input type="email" placeholder="email@example.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>Password <span class="text-red">*</span></FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password_confirmation">
            <FormItem>
                <FormLabel>Confirm Password <span class="text-red">*</span></FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Confirm password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <div class="flex gap-2 justify-start">
            <Button type="submit" :disabled="processing">
                <LoaderCircle v-if="processing" class="w-4 h-4 animate-spin" />
                Add New User
            </Button>
            <Button type="button" variant="outline" @click="resetForm" :disabled="processing">
                Reset
            </Button>
        </div>
    </Form>
</template>
