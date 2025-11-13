import type { ColumnDef } from '@tanstack/vue-table'
import type { User, UserColumnMeta } from '@/types/models/user'

import DataTableColumnHeader from '@/components/ui/table/data/DataTableColumnHeader.vue'
import DataTableRowActions from '@/components/ui/table/data/DataTableRowActions.vue'

import { h } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { statuses, verificationCases } from './data'
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue'

export const columns: ColumnDef<User>[] = [
    {
        id: 'select',
        header: ({ table }) => h(Checkbox, {
            'modelValue': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
            'onUpdate:modelValue': value => table.toggleAllPageRowsSelected(!!value),
            'ariaLabel': 'Select all',
            'class': 'translate-y-0.5',
        }),
        cell: ({ row }) => h(Checkbox, { 'modelValue': row.getIsSelected(), 'onUpdate:modelValue': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
        enableSorting: false,
        enableHiding: false,
        meta: {
            searchable: false,
        } as UserColumnMeta,
    },
    {
        accessorKey: 'id',
        header: ({ column }) => h(DataTableColumnHeader, { column, title: '#' }),
        cell: ({ row }) => h('div', { class: '' }, String(row.getValue('id'))),
        filterFn: (row, id, value: string) => {
            const cell = String(row.getValue(id))
            return cell.includes(value)
        },
        enableSorting: true,
        enableHiding: false,
        meta: {
            searchable: true
        } as UserColumnMeta,
    },
    {
        accessorKey: 'username',
        header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Username' }),
        cell: ({ row }) => h('div', { class: '' }, row.getValue('username')),
        filterFn: (row, id, value: string) => {
            const cell = String(row.getValue(id))
            return cell.includes(value)
        },
        enableHiding: false,
        meta: {
            searchable: true,
        } as UserColumnMeta,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Name' }),
        cell: ({ row }) => h('div', { class: '' }, row.getValue('name')),
        filterFn: (row, id, value: string) => {
            const cell = String(row.getValue(id))
            return cell.includes(value)
        },
        enableHiding: false,
        meta: {
            searchable: true,
        } as UserColumnMeta,
    },
    {
        accessorKey: 'email',
        header: ({ column }) => h(DataTableColumnHeader, { column, title: 'email' }),
        cell: ({ row }) => h('div', { class: '' }, row.getValue('email')),
        filterFn: (row, id, value: string) => {
            const cell = String(row.getValue(id))
            return cell.includes(value)
        },
        enableSorting: false,
        enableHiding: false,
        meta: {
            searchable: true,
        } as UserColumnMeta,
    },
    {
        accessorKey: 'status',
        header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Status' }),
        cell: ({ row }) => {
            return h(Badge, { variant: row.getValue('status') ? 'secondary' : 'destructive' }, () => row.getValue('status') ? 'Active' : 'Inactive')
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        meta: {
            filterable: true,
            filterOption: statuses,
            searchable: false,
        } as UserColumnMeta,
    },
    {
        accessorKey: 'verified',
        header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Email Verified' }),
        cell: ({ row }) => {
            const verify = verificationCases.find(
                (verify: { value: unknown }) => verify.value === row.getValue('verified'),
            )

            if (!verify)
                return null

            return h(Badge, { variant: row.getValue('verified') ? 'secondary' : 'destructive' }, () => verify.label)
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        meta: {
            filterable: true,
            filterOption: verificationCases,
            searchable: false,
        } as UserColumnMeta,
    },
    {
        id: 'actions',
        cell: ({ row }) =>
            h(DataTableRowActions, { row }, {
                default: ({ row }: any) => [
                    h('div', [
                        h(DropdownMenuItem, {
                            onClick: () => console.log('Edit', row.original),
                        }, { default: () => 'Edit' }),
                        h(DropdownMenuItem, {
                            onClick: () => console.log('Delete', row.original),
                        }, { default: () => 'Delete' }),
                    ]),
                ],
            }),
        meta: {
            searchable: false,
        } as UserColumnMeta,
    }
]
