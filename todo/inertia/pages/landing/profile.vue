<template>
    <h1>Hello profile</h1>
    <div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
defineOptions({
  layout: defineAsyncComponent(() => import('../layout/profileLayout.vue')),
})

</script>