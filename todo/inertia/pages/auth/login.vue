<script setup lang="ts">
import { useForm, Head, Link } from '@inertiajs/vue3'

const form = useForm({
  email: '',
  password: '',
})

const submit = () => {
  form.post('/login', {
    onSuccess: () => form.reset(),
  })
}
</script>

<template>
  <Head title="Login" />
  <div class="min-h-screen bg-slate-100 flex flex-col items-center pt-12 px-4">
    <!-- Header -->
    <header class="w-full max-w-5xl flex justify-between items-center mb-10">
      <Link href="/" class="text-lg font-bold text-pink-400 hover:underline">Todo List Kita</Link>
      <div class="space-x-4">
        <Link href="/login" class="text-pink-400 font-medium">Login</Link>
        <Link href="/register" class="text-gray-700 hover:text-blue-600">Register</Link>
      </div>
    </header>

    <!-- Form Login -->
    <div class="w-full max-w-md bg-white rounded shadow p-6">
      <h2 class="text-xl font-semibold text-center mb-6">Masuk ke Akunmu</h2>
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full border px-3 py-2 rounded"
            required
          />
          <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{ form.errors.email }}</p>
        </div>

        <div>
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="w-full border px-3 py-2 rounded"
            required
          />
          <p v-if="form.errors.password" class="text-red-500 text-sm mt-1">
            {{ form.errors.password }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-pink-400 hover:bg-pink-600 text-white py-2 rounded"
          :disabled="form.processing"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
