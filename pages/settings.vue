<template xmlns="http://www.w3.org/1999/html">
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center relative overflow-hidden px-6 sm:px-10">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0 z-0">
      <img
          src="/assets/images/bgULK.png"
          alt="Background"
          class="w-full h-full object-cover opacity-10"
      />
      <div class="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40 animate-bounce"></div>
    </div>

    <!-- Контент -->
    <div class="relative z-10 text-center max-w-2xl mx-auto">
      <h1 class="text-7xl sm:text-8xl font-bold text-cyan-600 mb-6 animate-pulse">Страница в разработке</h1>
      <p class="text-2xl sm:text-3xl text-gray-800 font-semibold mb-4">Когда нибудь я это доделаю</p>
      <p class="text-lg text-gray-600 mb-8">
        Вернуться на главную
      </p>
      <router-link
          to="/"
          class="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
      >
        Вернуться на главную
      </router-link>
    </div>
  </div>
</template>


<script setup lang="ts">
// Нет логики — только визуальный компонент
</script>