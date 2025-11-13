<script setup lang="ts">
import type { BreadcrumbItemType } from '@/types';
import { DashboardContent, DashboardShell, DashboardSidebar, DashboardSidebarHeader } from "@/components/dashboard";

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <DashboardShell variant="sidebar">
        <DashboardSidebar />
        <DashboardContent variant="sidebar" class="overflow-x-hidden">
            <DashboardSidebarHeader :breadcrumbs="breadcrumbs" />
            <slot />
        </DashboardContent>
    </DashboardShell>
</template>
