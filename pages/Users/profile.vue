<template>
  <div class="min-h-screen bg-white w-full" ref="pageTop">
    <!-- Hero Section профиля -->
    <section class="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full px-6 sm:px-10">
      <!-- Декор -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40 animate-bounce"></div>
      </div>

      <!-- Контент профиля -->
      <div class="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
        <!-- Аватар и основная информация -->
        <div class="flex flex-col items-center mb-8 scroll-animate">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            {{ user.name }}
          </h1>
          <p class="text-xl text-cyan-600 font-semibold mb-4">{{ user.role }}</p>
          <p class="text-lg text-gray-600 max-w-2xl">{{ user.bio }}</p>
        </div>

        <!-- Статистика -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto scroll-animate">
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <p class="text-2xl font-bold text-cyan-600">{{ user.stats.projects }}</p>
            <p class="text-gray-600 text-sm">Проектов</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <p class="text-2xl font-bold text-cyan-600">{{ user.stats.courses }}</p>
            <p class="text-gray-600 text-sm">Курсов</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <p class="text-2xl font-bold text-cyan-600">{{ user.stats.rating }}</p>
            <p class="text-gray-600 text-sm">Рейтинг</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <p class="text-2xl font-bold text-cyan-600">{{ user.stats.hours }}</p>
            <p class="text-gray-600 text-sm">Часов</p>
          </div>
        </div>
      </div>
    </section>

    <!-- О пользователе -->
    <section class="py-20 bg-white w-full px-6 sm:px-10">
      <div class="w-full max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider scroll-animate">О себе</span>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 scroll-animate">
           <span class="text-cyan-600">Достижения</span>
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed mb-8 scroll-animate">
            {{ user.about }}
          </p>
          
          <!-- Навыки -->
          <div class="mb-12 scroll-animate">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Мои навыки</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(skill, index) in user.skills"
                :key="index"
                class="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Контакты -->
          <div class="scroll-animate">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Контакты</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="(contact, index) in user.contacts"
                :key="index"
                class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div class="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-full">
                  <i :class="contact.icon"></i>
                </div>
                <div>
                  <p class="text-sm text-gray-500">{{ contact.label }}</p>
                  <p class="text-gray-900 font-medium">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Мои проекты -->
    <section class="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 w-full px-6 sm:px-10">
      <div class="w-full max-w-7xl mx-auto">
        <div class="text-center text-white mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 scroll-animate">
            Мои проекты
          </h2>
          <p class="text-xl max-w-4xl mx-auto leading-relaxed scroll-animate">
            Здесь собраны мои лучшие работы, созданные во время обучения в AI CENTER
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in user.projects"
            :key="index"
            class="bg-white rounded-xl shadow-lg overflow-hidden scroll-animate"
          >
            <div class="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
              <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">{{ project.category }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-cyan-600 font-semibold">{{ project.status }}</span>
                <button
                  @click="viewProject(project.id)"
                  class="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 scroll-animate">
          <button
            class="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Смотреть все проекты
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Данные пользователя
const user = ref({
  name: 'Илья Кубышенко',
  role: 'Студент KUML',
  bio: 'Привет! Я увлечённый разработчик и студент KUML, стремящийся создавать инновационные проекты с использованием искусственного интеллекта.',
  avatar: '/assets/images/avatar.jpg',
  about: 'Я изучаю современные технологии и методы разработки, чтобы создавать эффективные и полезные приложения. Мои интересы включают машинное обучение, веб-разработку и анализ данных. В свободное время я люблю участвовать в хакатонах и работать над личными проектами.',
  stats: {
    projects: 1,
    courses: 1,
    rating: 5,
    hours: 240
  },
  skills: [
    'Python',
    'Nuxt 3',
    'Machine Learning',
    'Web Development',
    'Data Analysis',
    'API Integration'
  ],
  contacts: [
    {
      label: 'Email',
      value: 'ilyakubyshenko@gmail.con',
      icon: '1'
    },
    {
      label: 'Телефон',
      value: '+77052491580',
      icon: '1'
    },
    {
      label: 'Telegram',
      value: '@ikubyshenko',
      icon: '1'
    },
    {
      label: 'GitHub',
      value: 'github.com/ikubyshenko',
      icon: '1'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'AI Ассистент для обучения',
      description: 'Умный помощник для студентов с рекомендательной системой',
      category: 'Education AI',
      status: 'Завершен'
    },
    {
      id: 2,
      title: 'Нейросеть для анализа эмоций',
      description: 'Система распознавания эмоций по текстовым сообщениям',
      category: 'NLP',
      status: 'В разработке'
    },
    {
      id: 3,
      title: 'Web-платформа с AI модулями',
      description: 'Интеграция AI в современное веб-приложение',
      category: 'Web + AI',
      status: 'Завершен'
    }
  ]
})

const viewProject = (projectId: number) => {
  // Навигация к проекту
  console.log('View project:', projectId)
}

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
  title: 'Профиль',
  description: 'Профиль студента',
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