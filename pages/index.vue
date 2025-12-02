<template>
  <div class="min-h-screen bg-white w-full" ref="pageTop">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full px-6 sm:px-10">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img
          src="/assets/images/bgULK.png"
          alt="KUML Background"
          class="w-full h-full object-cover opacity-10"
        />
      </div>

      <!-- Декор -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40 animate-bounce"></div>
      </div>

      <!-- Заголовок -->
      <div class="relative z-10 text-center w-full max-w-5xl mx-auto px-4">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight scroll-animate">
           <span class="text-cyan-600">Главная</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-700 font-light mb-8 scroll-animate">
          История обновлений платформы
        </p>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 scroll-animate">
          Следите за последними улучшениями, новыми функциями и изменениями в KUML
        </p>
        <div class="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="scrollToUpdates"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Смотреть обновления
          </button>
        </div>
      </div>
    </section>

    <!-- Changelog Section -->
    <section ref="updatesSection" class="relative min-h-screen py-20 bg-white w-full px-6 sm:px-10">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img
          src="/assets/images/bgULK.png"
          alt="KUML Background"
          class="w-full h-full object-cover opacity-5"
        />
      </div>

      <div class="relative z-10 w-full max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider scroll-animate">Обновления системы</span>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 scroll-animate">
            История <span class="text-cyan-600">изменений</span>
          </h2>
          <p class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto scroll-animate">
            Все значимые обновления платформы KUML в хронологическом порядке
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Вертикальная линия -->
          <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-200 transform md:-translate-x-1/2"></div>
          
          <div
            v-for="(update, index) in changelog"
            :key="index"
            class="relative mb-12 scroll-animate"
          >
            <div class="flex flex-col md:flex-row items-start">
              <!-- Дата для мобильных -->
              <div class="md:hidden mb-4">
                <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block">
                  <span class="font-semibold">{{ update.date }}</span>
                </div>
              </div>

              <!-- Левая сторона (для десктопа) -->
              <div class="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
                <div class="text-right">
                  <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                    <span class="font-semibold">{{ update.date }}</span>
                  </div>
                  <p class="text-gray-500 text-sm">{{ update.version }}</p>
                </div>
              </div>

              <!-- Точка на линии -->
              <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-2 z-10"></div>

              <!-- Правая сторона (для десктопа) / Полная ширина для мобильных -->
              <div class="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                <!-- Дата для десктопа -->
                <div class="hidden md:block">
                  <p class="text-gray-500 text-sm mb-1">{{ update.version }}</p>
                </div>

                <!-- Карточка обновления -->
                <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900">{{ update.title }}</h3>
                    <span 
                      :class="[
                        'px-3 py-1 rounded-full text-xs font-medium',
                        update.type === 'feature' ? 'bg-green-100 text-green-800' :
                        update.type === 'improvement' ? 'bg-blue-100 text-blue-800' :
                        update.type === 'fix' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      ]"
                    >
                      {{ update.type === 'feature' ? 'Новая функция' :
                         update.type === 'improvement' ? 'Улучшение' :
                         update.type === 'fix' ? 'Исправление' : 'Обновление' }}
                    </span>
                  </div>
                  
                  <p class="text-gray-600 mb-4">{{ update.description }}</p>
                  
                  <div v-if="update.changes && update.changes.length" class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                      <span class="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                      Основные изменения:
                    </h4>
                    <ul class="space-y-2">
                      <li 
                        v-for="(change, changeIndex) in update.changes" 
                        :key="changeIndex"
                        class="flex items-start text-gray-600"
                      >
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>{{ change }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="update.technologies && update.technologies.length" class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Технологии:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(tech, techIndex) in update.technologies"
                        :key="techIndex"
                        class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div class="flex items-center text-sm text-gray-500">
                      <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Опубликовано: {{ update.author }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ update.status }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Подпись -->
        <div class="text-center mt-16">
          <p class="text-gray-600 mb-4">Следите за обновлениями, чтобы быть в курсе всех улучшений</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://t.me/ikubyshenko"
              target="_blank"
              class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Предложить улучшение
          </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const updatesSection = ref<HTMLElement | null>(null)

const scrollToUpdates = () => {
  updatesSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const changelog = [
  {
    date: "17 ноября 2025",
    version: "v1.0.2",
    title: "Развитие сайта",
    type: "feature",
    description: "Разработка новых вкладок сайта",
    changes: [
      "Добавлены вкладки Changelog, Feed, пока не имеют возможности добавления контента. В будущем планируется реализовать возможность добавления проектов и отслеживания изменений пользователями.",
    ],
    
    technologies: ["Nuxt 3"],
    author: "Ikubyshenko",
    status: "В процессе"
  },
{
    date: "11 ноября 2025",
    version: "v1.0.1",
    title: "Оптимизация производительности",
    type: "improvement",
    description: "Проведена работа по улучшению производительности платформы и оптимизации контента.",
    changes: [
      "Улучшена оптимизация мобильной версии, добавлен navbar для удобной навигации",
    ],
    technologies: ["Nuxt 3"],
    author: "Ikubyshenko",
    status: "Завершено"
  },
  {
    date: "20 октября 2025",
    version: "v1.0.0",
    title: "Дизайн",
    type: "feature",
    description: "Разработан дизайн сайта, мобильная версия.",
    changes: [
      "Создан дизайн сайта",
    ],
    technologies: ["Nuxt 3"],
    author: "Ikubyshenko",
    status: "Завершено"
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el)
  })
})

useSeoMeta({
  title: 'Changelog - KUML - Kozybaev University',
  description: 'KUML - история обновлений и улучшений платформы.',
})
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}
.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}
section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}
</style>