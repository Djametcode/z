<template>
  <div class="w-screen">
    <div
      class="fixed top-0 w-full flex max-sm:pl-5 max-sm:pr-5 max-sm:pt-5 pl-[150px] pr-[150px] pt-7 items-center justify-between"
    >
      <h1 class="text-4xl max-sm:text-2xl font-bold">Todo List Kita</h1>
      <div class="text-xl underline font-bold">
        <Link href="/login">Login</Link>
      </div>
    </div>
    <div class="fixed bottom-14 left-24">
      <img src="../../../public/image/kucing-uas.png" alt="" srcset="" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>
