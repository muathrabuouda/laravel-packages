<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { MoreHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableRowActionsProps {
  row: Row<any>
}
const props = defineProps<DataTableRowActionsProps>()
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                <MoreHorizontal class="h-4 w-4" />
                <span class="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-42">
            <slot :row="row"/>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
