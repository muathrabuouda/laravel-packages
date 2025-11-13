<script setup lang="ts">
import type { BreadcrumbItemType } from '@/types';
import { DashboardContent, DashboardHeader, DashboardShell } from "@/components/dashboard";

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <DashboardShell class="flex-col">
        <DashboardHeader :breadcrumbs="breadcrumbs" />
        <DashboardContent>
            <slot />
        </DashboardContent>
    </DashboardShell>
</template>
