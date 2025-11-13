<script setup lang="ts">
import { columns } from './data/columns';
import DataTable from '@/components/ui/table/data/DataTable.vue'
import { type UserCollection } from '@/types/models/user';

interface Props {
    users: UserCollection;
}
defineProps<Props>();

</script>

<template>
    <DataTable :data="users.data" :columns="columns" />
</template>
