<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    
    <main class="flex-1 p-6">
      <div class="bg-white rounded shadow p-4">
        <h2 class="text-lg font-semibold mb-4">Selamat Datang!</h2>
        <p class="text-gray-600">Kamu berhasil login dan ini adalah halaman dashboard.</p>
      </div>
      <div>
        <div class="mt-6">
          <h2 class="text-lg font-semibold">Todo List Kamu:</h2>
          <ul class="mt-2 space-y-2">
            <li v-for="todo in props.todos" :key="todo.id" class="p-3 bg-white rounded shadow flex justify-between items-center">
              <div>
                <p class="font-semibold">{{ todo.title }}</p>
                <p class="text-gray-600">{{ todo.description }}</p>
              </div>
              <div class=" flex gap-2">
                <button
                  @click="deleteTodo(todo.id)"
                  class="text-red-600 hover:text-red-800 px-3 py-1 text-sm border border-red-500 rounded"
                >
                  Delete
                </button>
                <button
                  @click="updateTodo(todo.id)"
                  class="text-blue-600 hover:text-blue-800 px-3 py-1 text-sm border border-blue-500 rounded"
                >
                  Update
                </button>
              </div>
            </li>
        </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Todo from '#models/todo';
import User from '#models/user';
import { Link, Head, useForm, router } from '@inertiajs/vue3'
import { defineAsyncComponent } from 'vue';
defineOptions({
  layout: (h, page) =>
    h(defineAsyncComponent(() => import('../layout/homeLayout.vue')), { ...page.props }, () => page)
})


const props = defineProps<{
  user: User
  todos: Todo[]
}>()


const updateTodo = (id: number) => {
  router.get(`/update-todo/${id}`)
}

const deleteTodo = (id: number) => {
  router.delete(`/delete-todo/${id}`, {
    onSuccess: () => {
      router.reload({ only: ['todos'] })
    }
  })
}

</script>
