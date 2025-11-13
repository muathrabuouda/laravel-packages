<script setup lang="ts">
import type { Table, Column } from '@tanstack/vue-table'
import { computed, ref } from 'vue'
import { XOctagon } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import DataTableFacetedFilter from './DataTableFacetedFilter.vue'
import DataTableViewOptions from './DataTableViewOptions.vue'

interface DataTableToolbarProps {
    table: Table<any>
}
const props = defineProps<DataTableToolbarProps>()

const searchableColumns = computed(() =>
    props.table
        .getAllColumns()
        .filter((col: Column<any, any>) => {
            const meta = col.columnDef.meta as { searchable?: boolean } | undefined;
            return meta?.searchable;
        })
        .map((col: Column<any, any>) => ({
            id: col.id,
            label: (col.columnDef as any).accessorKey ?? col.id
        }))
);

const filterableColumns = computed(() =>
    props.table
        .getAllColumns()
        .filter((col: Column<any, any>) => {
            const meta = col.columnDef.meta as { filterable?: boolean } | undefined;
            return meta?.filterable;
        })
)

const selectedColumn = ref(searchableColumns.value[1]?.id)
const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-1 items-center space-x-2">
            <Select v-model="selectedColumn">
                <SelectTrigger class="h-8 w-64 lg:w-42">
                    <SelectValue placeholder="Choose column ..." />
                </SelectTrigger>
                <SelectContent side="bottom">
                    <SelectItem v-for="col in searchableColumns" :key="col.id" :value="col.id">
                        {{ col.label }}
                    </SelectItem>
                </SelectContent>
            </Select>
            <Input placeholder="Search ..." class="h-8 w-64 lg:w-42"
                :model-value="(table.getColumn(selectedColumn)?.getFilterValue() as string) ?? ''"
                @input="table.getColumn(selectedColumn)?.setFilterValue($event.target.value)" />
            <DataTableFacetedFilter v-for="col in filterableColumns" :key="col.id" :column="table.getColumn(col.id)"
                :title="(col.columnDef as any).accessorKey ?? col.id"
                :options="((col.columnDef.meta as any)?.filterOption) ?? []" />
            <Button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
                Reset
                <XOctagon class="ml-2 h-4 w-4" />
            </Button>
        </div>
        <DataTableViewOptions :table="table" />
    </div>
</template>
