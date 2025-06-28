<template>
  <div class="min-h-screen home flex flex-col md:pt-[50px]">
    <main class="flex-1 p-6">
      <div class=" w-full h-full p-5 text-2xl rounded-3xl">
        <h1>Selamat datang di todo list kita</h1>
        <p>Atur kegiatanmu, capai tujuanmu, dan jadi lebih produktif setiap hari.</p>
      </div>
      <div>
        <h1 class=" text-xl font-bold pt-5">Tanggal :</h1>
      </div>

      <!-- Tanggal Selector -->
      <div class="w-full overflow-x-scroll flex items-center justify-start pb-16">
        <div class="flex gap-2 mt-4">
          <span v-for="(date, index) in dates" :key="index" @click="selectedDate = date" :class="[
            'px-3 py-1 shadow rounded font-medium md:w-[75px] md:h-[75px] md:flex md:items-center md:justify-center cursor-pointer',
            date === selectedDate ? 'bg-black text-white' : 'bg-slate-50 text-black'
          ]">
            {{ date }}
          </span>
        </div>
      </div>

      <!-- Todo List -->
      <div class="mt-6">
        <h2 class="text-lg font-semibold md:text-xl md:pb-3">Todo List Kamu:</h2>
        <ul class="mt-2 space-y-5 md:mt-0 md:space-y-0 md:gap-5 md:grid md:grid-cols-4 md:overflow-y-scroll md:h-[550px]">
          <li v-for="(todo, index) in filteredTodos" :key="todo.id"
            :class="['rounded-lg shadow flex justify-between items-start', getRandomBg(index)]">
            <div class="p-6 flex flex-col gap-3 w-full md:h-[250px]">
              <div class="flex justify-between items-start">
                <div class="flex gap-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd"
                        d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                        clip-rule="evenodd" />
                      <path fill-rule="evenodd"
                        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="font-semibold">{{ todo.title }}</p>
                </div>

                <!-- Menu Titik Tiga -->
                <div class="relative menu-wrapper">
                  <button @click.stop="toggleMenu(todo.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6">
                      <path fill-rule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div v-if="openMenuId === todo.id"
                    class="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button @click="updateTodo(todo.id)"
                      class="block w-full text-left px-4 py-2 text-sm hover:bg-blue-100">Update</button>
                    <button @click="deleteTodo(todo.id)"
                      class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100">Delete</button>
                  </div>
                </div>
              </div>

              <p class="text-gray-600 text-justify">{{ todo.description }}</p>
              <div class="flex gap-1">
                <p>{{ DateTime.fromISO(todo.startDate).toFormat('HH:mm') }}</p>
                <p>-</p>
                <p>{{ DateTime.fromISO(todo.endDate).toFormat('HH:mm') }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Todo from '#models/todo'
import User from '#models/user'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { router } from '@inertiajs/vue3'
import { defineAsyncComponent } from 'vue'
import { DateTime } from 'luxon'

defineOptions({
  layout: (h, page) =>
    h(defineAsyncComponent(() => import('../layout/homeLayout.vue')), { ...page.props }, () => page),
})

const props = defineProps<{
  user: User
  todos: Todo[]
}>()

const today = DateTime.now()
const selectedDate = ref(today.day)

const dates = [
  today.minus({ days: 1 }).day,
  today.day,
  today.plus({ days: 1 }).day,
  today.plus({ days: 2 }).day,
  today.plus({ days: 3 }).day,
  today.plus({ days: 4 }).day,
  today.plus({ days: 5 }).day,
  today.plus({ days: 6 }).day,
  today.plus({ days: 7 }).day,
  today.plus({ days: 8 }).day,
  today.plus({ days: 9 }).day,
]

const filteredTodos = computed(() => {
  return props.todos.filter((todo) => {
    const start = DateTime.fromISO(todo.startDate)
    return (
      start.day === selectedDate.value &&
      start.month === today.month &&
      start.year === today.year
    )
  })
})

// Menu logic
const openMenuId = ref<number | null>(null)

const toggleMenu = (id: number) => {
  openMenuId.value = openMenuId.value === id ? null : id
}

const closeMenu = () => {
  openMenuId.value = null
}

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.menu-wrapper')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Todo actions
const updateTodo = (id: number) => {
  router.get(`/update-todo/${id}`)
}

const deleteTodo = (id: number) => {
  router.delete(`/delete-todo/${id}`, {
    onSuccess: () => {
      router.reload({ only: ['todos'] })
    },
  })
}

// Random background
const bgColors = [
  'bg-red-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-blue-100',
  'bg-purple-100',
  'bg-pink-100',
  'bg-orange-100',
  'bg-lime-100',
  'bg-teal-100',
  'bg-emerald-100',
]

const getRandomBg = (index: number) => {
  return bgColors[index % bgColors.length]
}
</script>
