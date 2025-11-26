<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-24">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="w-40 h-12 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
            <a href="/">
              <img
                src="/assets/images/image.png"
                class="w-full h-full object-contain drop-shadow-sm"
                alt="AI Center Logo"
            >
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-10">
            <NuxtLink to="/" class="nav-link" exact>О нас</NuxtLink>

            <!-- Курс Dropdown -->
            <div class="relative group">
              <button class="nav-link flex items-center">
                Курс
                <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <nav class="space-y-2">
                  <NuxtLink to="/schedule" class="dropdown-link">Расписание</NuxtLink>
                  <NuxtLink to="/feed" class="dropdown-link">Проекты</NuxtLink>
                  <NuxtLink to="/changelog" class="dropdown-link">Changelog</NuxtLink>
                  <NuxtLink to="/tasks" class="dropdown-link">Задания</NuxtLink>
                </nav>
              </div>
            </div>

            <NuxtLink to="/contact" class="nav-link">Контакты</NuxtLink>

            <!-- Профиль Dropdown -->
            <div class="relative group">
              <button class="nav-link flex items-center">
                Профиль
                <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <nav class="space-y-2">
                  <NuxtLink to="/users/profile" class="dropdown-link">Мой профиль</NuxtLink>
                  <NuxtLink to="/settings" class="dropdown-link">Настройки</NuxtLink>
                  <NuxtLink to="/achievements" class="dropdown-link">Достижения</NuxtLink>
                  <NuxtLink to="/users/login" class="dropdown-link text-red-600 hover:text-red-700">Войти</NuxtLink>
                </nav>
              </div>
            </div>
          </nav>

          <!-- Mobile Menu Button -->
          <div class="relative lg:hidden">
            <button
                @click="toggleMenu"
                class="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <div class="relative w-6 h-6">
                <!-- Верхняя линия -->
                <span
                    class="absolute left-0 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center"
                    :class="showMenu ? 'rotate-45 top-3' : 'top-1'"
                ></span>
                <!-- Средняя линия -->
                <span
                    class="absolute left-0 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center"
                    :class="showMenu ? 'opacity-0' : 'top-3'"
                ></span>
                <!-- Нижняя линия -->
                <span
                    class="absolute left-0 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center"
                    :class="showMenu ? '-rotate-45 top-3' : 'top-5'"
                ></span>
              </div>
            </button>

            <!-- Выплывающее меню -->
            <transition name="grow">
              <div
                  v-if="showMenu"
                  class="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 z-50"
              >
                <nav class="space-y-3">
                  <NuxtLink to="/" class="modal-link" @click="closeMenu">Главная</NuxtLink>
                  <NuxtLink to="/materials" class="modal-link" @click="closeMenu">Материалы</NuxtLink>
                  <NuxtLink to="/contact" class="modal-link" @click="closeMenu">Связь с нами</NuxtLink>
                </nav>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-20 min-h-screen px-6 lg:px-24 pb-20 lg:pb-0">
      <slot />
    </main>

    <!-- Mobile Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 lg:hidden">
      <div class="flex items-center justify-around py-2">
        <!-- Home -->
        <NuxtLink to="/" class="flex flex-col items-center justify-center w-12 h-12" @click="closeMenu">
          <div class="w-10 h-10 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
            <img
                src="/assets/images/home.svg"
            >
          </div>
        </NuxtLink>

        <!-- Search -->
        <NuxtLink to="/feed" class="flex flex-col items-center justify-center w-12 h-12" @click="closeMenu">
          <div class="w-10 h-10 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
            <img
                src="/assets/images/feed.svg"
            >
          </div>
        </NuxtLink>

        <!-- Add/Create -->
        <NuxtLink to="/admin/login.vue" class="flex flex-col items-center justify-center w-12 h-12" @click="closeMenu">
          <div class="w-10 h-10 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
            <img
                src="/assets/images/plus.svg"
            >
          </div>
        </NuxtLink>

        <!-- Notifications -->
        <NuxtLink to="/schedule" class="flex flex-col items-center justify-center w-12 h-12" @click="closeMenu">
          <div class="w-10 h-10 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
            <img
                src="/assets/images/schedule.svg"
            >
          </div>
        </NuxtLink>

        <!-- Profile -->
        <NuxtLink to="/users/login" class="flex flex-col items-center justify-center w-12 h-12" @click="closeMenu">
          <div class="w-10 h-10 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105 " >
            <img
                src="/assets/images/profile.svg"
            >
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- PWA Install Prompt -->
    <PWAInstall />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
}

const closeMenu = () => {
  showMenu.value = false;
}
</script>

<style scoped>
/* Навигация */
.nav-link {
  @apply relative px-4 py-3 text-gray-700 hover:text-cyan-600 font-semibold transition-all duration-300;
}
.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-500 transform -translate-x-1/2;
}
.nav-link:hover::after {
  @apply w-4/5;
}

/* Ссылки в бургер-меню */
.modal-link {
  @apply block px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300;
}

/* Ссылки в выпадающих меню */
.dropdown-link {
  @apply block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 text-sm;
}

/* Активные ссылки в нижней панели */
.router-link-active {
  @apply text-cyan-600;
}

/* Анимация выплывания */
.grow-enter-active, .grow-leave-active {
  transition: all 0.3s ease;
}
.grow-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-10px);
}
.grow-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.grow-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.grow-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-10px);
}

/* Анимации скролла */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}
.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>