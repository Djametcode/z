<template>
  <div class="min-h-screen bg-gray-100 flex flex-col home">
    <header class=" py-4 px-6 md:py-0 md:px-0 md:pl-[100px] md:pr-[100px] md:pt-[25px] md:pb-[25px] flex justify-between items-center">
      <h1 class="text-xl font-bold text-pink-400 md:text-black/75 md:text-3xl">Update Todo</h1>
      <Link href="/dashboard" class="text-pink-400 md:text-black/75 hover:underline md:text-xl">Kembali</Link>
    </header>

    <main class="flex-1 p-6 md:w-full md:flex md:items-center md:justify-center">
      <div class="bg-white md:bg-white/75 rounded shadow p-6 max-w-xl mx-auto md:h-[550px] md:w-[550px] md:rounded-3xl">
        <h2 class="text-lg font-semibold mb-4 text-center">Update Todo</h2>
        <form @submit.prevent="submit" class=" flex flex-col gap-3 mt-10">
        <div class=" flex flex-col gap-1">
          <label class=" block font-bold" for="email">Judul :</label>
          <input
            v-model="form.title"
            type="text"
            placeholder="email kamu"
            class="w-full border border-slate-600 px-3 py-2 rounded"
            required
          />
          <p v-if="form.errors.title" class="text-red-500 text-sm mt-1">{{ form.errors.title }}</p>
        </div>

        <div class=" flex flex-col gap-1">
          <label class=" block font-bold" for="password">Deskripsi :</label>
          <input
            v-model="form.description"
            type="description"
            placeholder="Deskripsi"
            class="w-full border border-slate-600 px-3 py-2 rounded"
            required
          />
          <p v-if="form.errors.description" class="text-red-500 text-sm mt-1">
            {{ form.errors.description }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-pink-600 hover:bg-pink-400 mt-2 text-white py-2 rounded"
          :disabled="form.processing"
        >
          Update todo
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
  