<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import HeadingSmall from '@/components/dashboard/HeadingSmall.vue';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Separator } from '@/components/ui/separator'
import { Create } from './partials';
import { index } from '@/routes/users'
import { type BreadcrumbItem } from '@/types';
import { type UserCollection } from '@/types/models/user';

interface Props {
    users: UserCollection;
}

defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/dashboard/user',
    },
    {
        title: 'Add New User',
        href: '/dashboard/user/create',
    },
];
</script>

<template>
    <DashboardLayout :breadcrumbs="breadcrumbItems">
        <Head title="Users" />
        <div class="h-full p-8 space-y-8">
            <div class="hidden flex-1 flex-col sm:flex">
                <div class="flex items-center justify-between space-y-2">
                    <div>
                        <HeadingSmall title="Add New User"
                            description="Fill in the required information to create a new user account" />
                    </div>
                    <div class="flex items-center space-x-2">
                        <Button as="a" :href="index.url()" variant="default">Index</Button>
                    </div>
                </div>
            </div>
            <Separator />
            <Create />
        </div>
    </DashboardLayout>
</template>
