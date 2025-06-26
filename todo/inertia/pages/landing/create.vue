<template>
  <div class=" w-screen h-screen flex flex-col items-center">
    <div class=" max-w-[400px] flex flex-col gap-7 max-h-[500px]">
      <h1>Create todo</h1>
      <form @submit.prevent="submit" class="space-y-4 w-full h-full">
        <input v-model="form.title" type="text" placeholder="title" class="w-full border px-3 py-2 rounded" required />
        <input v-model="form.description" type="text" placeholder="description" class="w-full border px-3 py-2 rounded"
          required />
        <input v-model="form.start_date" type="datetime-local" placeholder="tanggal mulai"
          class="w-full border px-3 py-2 rounded">
        <input v-model="form.end_date" type="datetime-local" placeholder="tanggal selesai"
          class="w-full border px-3 py-2 rounded">
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">create todo</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Link, Head, useForm, router } from '@inertiajs/vue3'
const form = useForm({
  title: '',
  description: '',
  start_date: '',
  end_date: ''
})

const submit = () => {
  form.post('/create-todo', {
    onSuccess: () => {
      form.reset()
      router.reload({ only: ['todos'] })
    }
  })
}
</script>