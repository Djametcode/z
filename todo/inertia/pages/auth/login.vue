<script setup lang="ts">
import { useForm, Head, Link } from '@inertiajs/vue3'
import { defineAsyncComponent } from 'vue'
defineOptions({
    layout: defineAsyncComponent(() => import('../layout/authLayout.vue')),
})

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
  <div class=" login min-h-screen bg-slate-100 flex flex-col items-center justify-center pt-12 px-4">
    <div class=" relative bg-white/45 max-sm:h-screen max-sm:w-screen w-[550px] h-[550px] p-10 rounded-4xl shadow">
      <h2 class="text-2xl font-semibold text-center mb-6">Login dulu yuk!</h2>
      <form @submit.prevent="submit" class=" flex flex-col gap-3 mt-10">
        <div class=" flex flex-col gap-1">
          <label class=" block font-bold" for="email">Email :</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="email kamu"
            class="w-full border border-slate-600 px-3 py-2 rounded"
            required
          />
          <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{ form.errors.email }}</p>
        </div>

        <div class=" flex flex-col gap-1">
          <label class=" block font-bold" for="password">Password :</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="w-full border border-slate-600 px-3 py-2 rounded"
            required
          />
          <p v-if="form.errors.password" class="text-red-500 text-sm mt-1">
            {{ form.errors.password }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-pink-600 hover:bg-pink-400 mt-2 text-white py-2 rounded"
          :disabled="form.processing"
        >
          Login
        </button>
        <div class=" absolute bottom-5 w-full">
          <div class=" w-full flex gap-2 text-sm">
            <p>Belum punya akun? </p>
            <Link class=" underline text-pink-400 font-bold" href="/register">buat akun</Link>
          </div>
        </div>
      </form>
    </div>
    <div>
    </div>
  </div>
</template>
