<script setup lang="ts">
import { useForm, Head, Link } from '@inertiajs/vue3'

const form = useForm({
  username: '',
  email: '',
  password: '',
})

const submit = () => {
  form.post('/register', {
    onSuccess: () => form.reset(),
  })
}
</script>

<template>
  <Head title="Register" />
  <div class="min-h-screen bg-slate-100 flex flex-col items-center pt-12 px-4">
    <header class="w-full max-w-5xl flex justify-between items-center mb-10">
      <Link href="/" class="text-lg font-bold text-pink-400 hover:underline">
  Todo List Kita
</Link>
      <div class="space-x-4">
        <Link href="/login" class="text-gray-700 hover:text-pink-600">Login</Link>
        <Link href="/register" class="text-gray-700 hover:text-pink-600">Register</Link>
      </div>
    </header>

    <div class="w-full max-w-md bg-white rounded shadow p-6">
      <h2 class="text-xl font-semibold text-center mb-6">Daftar Akun</h2>
      <form @submit.prevent="submit" class="space-y-4">
        <input v-model="form.username" type="text" placeholder="Nama Lengkap" class="w-full border rounded px-3 py-2" required />
        <input v-model="form.email" type="email" placeholder="Email" class="w-full border rounded px-3 py-2" required />
        <input v-model="form.password" type="password" placeholder="Password" class="w-full border rounded px-3 py-2" required />
        <button type="submit" class="w-full bg-pink-400 hover:bg-pink-700 text-white py-2 rounded">Daftar</button>
        <div v-if="form.errors.email" class="text-red-500 text-sm">
          {{ form.errors.email }}
        </div>
      </form>
    </div>
  </div>
</template>