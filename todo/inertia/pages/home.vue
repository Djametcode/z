<script setup>
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Home" />
  <main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Todo List Kita</h1>
      <p class="text-gray-600 mb-8">Kelola tugasmu dengan lebih teratur dan rapi.</p>

      <div class="flex gap-4 justify-center">
        <Link href="/login" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition">
          Login
        </Link>
        <Link href="/register" class="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded shadow transition">
          Register
        </Link>
      </div>
    </div>
  </main>
</template>