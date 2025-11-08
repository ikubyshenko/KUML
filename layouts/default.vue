<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-40 h-12 sm:w-48 sm:h-14 transition-all duration-300 ease-out hover:scale-105">
              <img 
                src="/assets/images/image.png" 
                class="w-full h-full object-contain drop-shadow-sm" 
                alt="AI Center Logo"
              >      
            </div>
          </div>     

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-10">
            <NuxtLink 
              to="/" 
              class="group relative px-4 py-3 text-gray-700 hover:text-cyan-600 font-semibold transition-all duration-300"
              exact
            >
              <span class="relative z-10">О нас</span>
              <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500 transform -translate-x-1/2"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/schedule" 
              class="group relative px-4 py-3 text-gray-700 hover:text-cyan-600 font-semibold transition-all duration-300"
            >
              <span class="relative z-10">Расписание курса</span>
              <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500 transform -translate-x-1/2"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/contact" 
              class="group relative px-4 py-3 text-gray-700 hover:text-cyan-600 font-semibold transition-all duration-300"
            >
              <span class="relative z-10">Контакты</span>
              <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500 transform -translate-x-1/2"></div>
            </NuxtLink>
          </nav>

          <!-- Mobile Menu Button -->
          <button 
            @click="openSidebar"
            class="lg:hidden group relative p-3 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div class="flex flex-col space-y-1.5">
              <span class="w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 group-hover:bg-cyan-600"></span>
              <span class="w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 group-hover:bg-cyan-600"></span>
              <span class="w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 group-hover:bg-cyan-600"></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <!-- Full Screen Sidebar -->
    <div>
      <!-- Overlay -->
      <div 
        v-if="showSidebar"
        class="fixed inset-0 z-40 bg-black/50 transition-all duration-300"
        @click="closeSidebar"
      ></div>
      
      <!-- Full Screen Sidebar -->
      <div 
        class="fixed inset-0 z-50 bg-white transform transition-transform duration-500 ease-out"
        :class="showSidebar ? 'translate-x-0' : 'translate-x-full'"
        style="overscroll-behavior: contain;"
      >
        <!-- Sidebar Header -->
        <div class="relative p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white h-48">
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-2">Навигация</h3>
            <p class="text-cyan-100 opacity-90">AI Center - Kozybayev University</p>
          </div>
          
          <button 
            @click="closeSidebar"
            class="absolute top-6 right-6 z-20 p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <span class="text-white text-xl font-bold">×</span>
          </button>
        </div>

        <!-- Sidebar Content -->
        <div class="h-[calc(100vh-192px)] overflow-y-auto py-6" style="overscroll-behavior: contain;">
          <div class="px-6">
            <nav class="space-y-4">
              <NuxtLink 
                to="/" 
                class="group flex items-center p-4 rounded-2xl bg-white border border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                @click="closeSidebar"
                exact
              >
                <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-all duration-300">
                  <span class="text-cyan-600 text-lg">🏠</span>
                </div>
                <div class="flex-1">
                  <div class="font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">Главная</div>
                  <div class="text-gray-500 mt-1 text-sm">О центре искусственного интеллекта</div>
                </div>
                <div class="text-gray-400 group-hover:text-cyan-600 transform group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </NuxtLink>

              <NuxtLink 
                to="/schedule" 
                class="group flex items-center p-4 rounded-2xl bg-white border border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                @click="closeSidebar"
              >
                <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-all duration-300">
                  <span class="text-cyan-600 text-lg">📅</span>
                </div>
                <div class="flex-1">
                  <div class="font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">Расписание курса</div>
                  <div class="text-gray-500 mt-1 text-sm">10 недель интенсивного обучения</div>
                </div>
                <div class="text-gray-400 group-hover:text-cyan-600 transform group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </NuxtLink>

              <NuxtLink 
                to="/contact" 
                class="group flex items-center p-4 rounded-2xl bg-white border border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                @click="closeSidebar"
              >
                <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-all duration-300">
                  <span class="text-cyan-600 text-lg">👥</span>
                </div>
                <div class="flex-1">
                  <div class="font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">Связь с нами</div>
                  <div class="text-gray-500 mt-1 text-sm">Задайте вопросы нашей команде</div>
                </div>
                <div class="text-gray-400 group-hover:text-cyan-600 transform group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </NuxtLink>
            </nav>

            <!-- Additional Info Section -->
            <div class="mt-8 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl text-white">
              <div class="bg-white/10 rounded-xl p-4">
                <h3 class="text-lg font-bold mb-2">AI CENTER</h3>
                <p class="text-blue-100 leading-relaxed text-sm">
                  Центр Искусственного Интеллекта Козыбаев Университета — это место, где технологии становятся ближе, а идеи воплощаются в реальные проекты.
                </p>
              </div>
            </div>
          </div>
        </div>           
      </div>
    </div>
    
    
    <!-- Main Content -->
    <main class="pt-20 min-h-screen">    
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app';
import { ref } from 'vue';

const showSidebar = ref<boolean>(false)

const openSidebar = () => {
  showSidebar.value = true;
  document.body.style.overflow = 'hidden';
}

const closeSidebar = () => {
  showSidebar.value = false;
  document.body.style.overflow = '';
}

// Google Analytics
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-2D174M79B5',
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2D174M79B5');
      `,
      type: 'text/javascript',
    },
  ],
  __dangerouslyDisableSanitizersByTagID: {
    gtag: ['innerHTML'],
  },
});
</script>

<style scoped>
.router-link-active {
  @apply text-cyan-600;
}

.router-link-active .group-hover\:text-cyan-600 {
  @apply text-cyan-600;
}

/* Анимации как в index.vue */
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