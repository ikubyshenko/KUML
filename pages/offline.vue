<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Оффлайн</h1>
      <p class="text-xl text-gray-700 mb-8">Проверьте подключение к интернету</p>
      <button @click="reload" class="bg-cyan-600 text-white px-6 py-3 rounded-lg">
        Обновить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const reload = () => {
  window.location.reload()
}
</script>