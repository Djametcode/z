<script setup>
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Home" />
  <!-- <main class=" p-5 bg-pink-300 h-screen w-screen">
    <div class=" flex flex-col gap-3 text-slate-900">
      <h1 class=" font-bold text-4xl">Todo List Kita</h1>
      <p class=" text-sm">Kelola tugasmu dengan lebih teratur dan rapi</p>
    </div>
    <div class=" text-sm h-[20px] w-">
      <Link class="  bg-slate-50" href="login">Login</Link>
    </div>
  </main> -->
  <main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to bg-pink-200">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Todo List Kita</h1>
      <p class="text-gray-600 mb-8">Kelola tugasmu dengan lebih teratur dan rapi.</p>

      <div class="flex gap-4 justify-center">
        <Link href="/login" class="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded shadow transition">
          Login
        </Link>
        <Link href="/register" class="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded shadow transition">
          Register
        </Link>
      </div>
    </div>
  </main>
</template>