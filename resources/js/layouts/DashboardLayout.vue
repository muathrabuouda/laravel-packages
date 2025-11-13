<script setup lang="ts">
import DashboardLayout from '@/layouts/dashboard/DashboardSidebarLayout.vue';
import type { BreadcrumbItemType } from '@/types';
import { Toaster } from "vue-sonner";
import 'vue-sonner/style.css'

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <DashboardLayout :breadcrumbs="breadcrumbs">
        <slot />
        <Toaster position="bottom-right" :closeButton="true" closeButtonPosition="top-right" :expand="true" />
    </DashboardLayout>
</template>
