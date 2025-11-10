<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-24">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="w-40 h-12 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
            <img 
              src="/assets/images/image.png" 
              class="w-full h-full object-contain drop-shadow-sm" 
              alt="AI Center Logo"
            >      
          </div>     

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-10">
            <NuxtLink to="/" class="nav-link" exact>О нас</NuxtLink>
            <NuxtLink to="/schedule" class="nav-link">Расписание курса</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">Контакты</NuxtLink>
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
                  <NuxtLink to="/schedule" class="modal-link" @click="closeMenu">Расписание курса</NuxtLink>
                  <NuxtLink to="/contact" class="modal-link" @click="closeMenu">Связь с нами</NuxtLink>
                </nav>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-20 min-h-screen px-6 lg:px-24">    
      <slot />
    </main>
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
