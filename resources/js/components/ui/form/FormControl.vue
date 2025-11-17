<script lang="ts" setup>
import { Slot } from "reka-ui"
import { useFormField } from "./useFormField"

const { error, name, formDescriptionId, formMessageId } = useFormField()
</script>

<template>
  <Slot
    :id="name"
    data-slot="form-control"
    :aria-describedby="!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`"
    :aria-invalid="!!error"
  >
    <slot />
  </Slot>
</template>
