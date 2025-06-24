<template>
    <div class="h-screen w-screen flex flex-col overflow-hidden">
      <div class="fixed top-0 w-full h-[55px] flex items-center pl-8 pr-8 bg-pink-300">
          <div class=" w-full flex h-full items-center justify-between">
            <h1 class="font-bold text-lg text-white">Dashboard</h1>
            <div class=" flex h-[30px] pl-2 pr-2 rounded-lg items-center gap-2 bg-slate-50 text-sm">
                <p>{{ user.username }}</p>
                <button @click="logout()">logout</button>
            </div>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto mt-[40px]">
        <slot />
      </div>
      <div class="fixed bottom-0 w-full h-[55px] flex items-center justify-around pl-5 bg-slate-200 z-10">
        <Link href="/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-9">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
        </Link>
        <Link href="/create">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-9">
            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
        </Link>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Link, Head, useForm, router } from '@inertiajs/vue3'
  import User from '#models/user';

  const props = defineProps<{
  user: User
}>()

  const logout = () => {
    router.post('/logout')
  }
  </script>
  