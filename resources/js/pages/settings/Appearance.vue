<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import AppearanceTabs from '@/components/dashboard/AppearanceTabs.vue';
import HeadingSmall from '@/components/dashboard/HeadingSmall.vue';
import { type BreadcrumbItem } from '@/types';

import DashboardLayout from '@/layouts/DashboardLayout.vue';
import SettingsLayout from '@/layouts/dashboard/settings/Layout.vue';
import { edit } from '@/routes/appearance';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Appearance settings',
        href: edit().url,
    },
];
</script>

<template>
    <DashboardLayout :breadcrumbs="breadcrumbItems">
        <Head title="Appearance settings" />
        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall
                    title="Appearance settings"
                    description="Update your account's appearance settings"
                />
                <AppearanceTabs />
            </div>
        </SettingsLayout>
    </DashboardLayout>
</template>
