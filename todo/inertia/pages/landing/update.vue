<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-white shadow py-4 px-6 flex justify-between items-center">
      <h1 class="text-xl font-bold text-pink-400">Update Todo</h1>
      <Link href="/dashboard" class="text-pink-400 hover:underline">← Kembali</Link>
    </header>

    <main class="flex-1 p-6">
      <div class="bg-white rounded shadow p-6 max-w-xl mx-auto">
        <h2 class="text-lg font-semibold mb-4">Edit Todo</h2>
        <form @submit.prevent="submit" class="space-y-4">
          <input v-model="form.title" type="text" placeholder="Title" class="w-full border px-3 py-2 rounded"
            required />
          <textarea v-model="form.description" class="w-full p-2 border rounded resize-none" rows="4"
            placeholder="Tulis deskripsi..."></textarea>

          <button type="submit" class="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded">
            Update Todo
          </button>
        </form>
      </div>
    </main>
  </div>
</template>
  
  <script setup lang="ts">
  import { useForm, Link, router } from '@inertiajs/vue3'
  import Todo from '#models/todo'
  
  const props = defineProps<{
    todos: Todo
  }>()
  
  const form = useForm({
    title: props.todos.title,
    description: props.todos.description,
  })
  
  const submit = () => {
    router.put(`/update-todo/${props.todos.id}`, form, {
      onSuccess: () => {
        router.visit('/dashboard')
      }
    })
  }
  </script>
  