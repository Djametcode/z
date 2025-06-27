<template>
  <div class=" w-screen h-screen flex flex-col gap-5 items-center justify-start p-11 bg-slate-100">
    <h1 class=" text-xl font-bold pb-7">Buat todo baru</h1>
    <div class=" w-[350px]">
      <form @submit.prevent="submit" class="space-y-4 w-full h-full">
        <div>
          <label for="title" class="block pb-1 text-sm font-medium text-gray-700">Kegiatan :</label>
          <input v-model="form.title" type="text" placeholder="Nama kegiatan" class="w-full placeholder:text-sm border px-3 py-2 rounded" required />
        </div>
        <label for="description" class="block pb-none text-sm font-medium text-gray-700">Detail kegiatan :</label>
        <textarea v-model="form.description" class="w-full placeholder:text-sm p-2 border rounded resize-none" rows="4"
          placeholder="Tulis deskripsi..."></textarea>

          <div class="">
            <label for="start_date" class="block pb-2 text-sm font-medium text-gray-700">Nama Kegiatan :</label>
            <input v-model="form.start_date" id="start_date" type="datetime-local"
              class="w-full border px-3 py-2 rounded mb-4">
          </div>
          <div>
            <label for="end_date" class="block pb-2 text-sm font-medium text-gray-700">Tanggal Selesai :</label>
            <input v-model="form.end_date" id="end_date" type="datetime-local"
              class="w-full border px-3 py-2 rounded">
          </div>

        <button type="submit" class="w-full bg-pink-400 hover:bg-pink-600 text-white py-2 text-sm rounded">buat todo</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
defineOptions({
  layout: defineAsyncComponent(() => import('../layout/createLayout.vue')),
})
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