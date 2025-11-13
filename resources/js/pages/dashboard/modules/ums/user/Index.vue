<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import HeadingSmall from '@/components/dashboard/HeadingSmall.vue';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Separator } from '@/components/ui/separator'
import Read from './partials/read/Index.vue';
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
];
</script>

<template>
    <DashboardLayout :breadcrumbs="breadcrumbItems">
        <Head title="Users" />
        <div class="hidden h-full flex-1 flex-col space-y-8 p-8 sm:flex">
            <div class="flex items-center justify-between space-y-2">
                <div>
                    <HeadingSmall title="Users" description="Update your name and email address" />
                </div>
                <div class="flex items-center space-x-2">
                    <Button as="a" href="#" variant="default">Create</Button>
                </div>
            </div>
            <Separator/>
            <Read :users="users" />
        </div>
    </DashboardLayout>
</template>
