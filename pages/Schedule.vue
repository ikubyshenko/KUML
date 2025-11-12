<template>
  <div class="min-h-screen bg-white w-full" ref="pageTop">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/assets/images/bgULK.png" 
          alt="Schedule Background"
          class="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40 animate-bounce"></div>
      </div>

      <div class="relative z-10 text-center w-full max-w-7xl mx-auto px-4">
        <!-- Main Heading -->
        <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight scroll-animate">
          РАСПИСАНИЕ <span class="text-cyan-600">КУРСА</span>
        </h1>
        
        <!-- Subtitle -->
        <div class="mb-6 sm:mb-8 scroll-animate">
          <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 font-light mb-2">
            Центр Искусственного Интеллекта
          </p>
          <p class="text-base sm:text-lg lg:text-xl text-cyan-700 font-medium">
            Kozybayev University
          </p>
        </div>

        <!-- Main Description -->
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 scroll-animate">
          10 недель интенсивного обучения от основ веба до полноценных AI-приложений
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center scroll-animate">
          <button 
            @click="scrollToSchedule"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
          >
            Программа обучения
          </button>
          <button 
            v-if="isAdmin"
            @click="navigateTo('/admin')"
            class="bg-gray-600 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
          >
            Админ панель
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce scroll-animate">
        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section ref="scheduleSection" class="py-12 sm:py-20 bg-white w-full">
      <div class="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <!-- Section Header -->
        <div class="text-center mb-12 sm:mb-16">
          <div class="inline-block mb-3 sm:mb-4 scroll-animate">
            <span class="text-cyan-600 font-semibold text-sm sm:text-lg uppercase tracking-wider">ПРОГРАММА ОБУЧЕНИЯ</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate">
            Расписание <span class="text-cyan-600">курса</span>
          </h2>
          <p class="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto scroll-animate">
            Пошаговое погружение в веб-разработку и искусственный интеллект
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-8 sm:py-12">
          <div class="inline-flex items-center justify-center space-x-3">
            <div class="w-6 h-6 sm:w-8 sm:h-8 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
            <span class="text-gray-600 text-sm sm:text-lg">Загрузка расписания...</span>
          </div>
        </div>

        <!-- Desktop Schedule Table -->
        <div v-else-if="schedule.length > 0" class="hidden lg:block bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div class="grid grid-cols-12 gap-4 mb-6 px-6">
            <div class="col-span-2 text-center scroll-animate">
              <span class="text-cyan-600 font-semibold text-lg">НЕДЕЛЯ</span>
            </div>
            <div class="col-span-6 scroll-animate">
              <span class="text-cyan-600 font-semibold text-lg">ТЕМА И ОПИСАНИЕ</span>
            </div>
            <div class="col-span-4 scroll-animate">
              <span class="text-cyan-600 font-semibold text-lg">ПРАКТИЧЕСКАЯ РАБОТА</span>
            </div>
          </div>

          <div class="space-y-4">
            <div 
              v-for="week in sortedSchedule" 
              :key="week.id"
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 scroll-animate"
              :class="getWeekBorderColor(week.number)"
            >
              <div class="grid grid-cols-12 gap-4 items-center">
                <!-- Week Number -->
                <div class="col-span-2 text-center">
                  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl shadow-lg"
                    :class="getWeekBgColor(week.number)">
                    {{ week.number }}
                  </div>
                </div>

                <!-- Theme & Description -->
                <div class="col-span-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ week.theme }}</h3>
                  <p class="text-gray-600 text-lg">{{ week.description }}</p>
                </div>

                <!-- Practice -->
                <div class="col-span-4">
                  <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                        <span class="text-cyan-600 text-lg">🛠️</span>
                      </div>
                      <span class="text-gray-800 font-medium text-lg">{{ week.practice }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Schedule Cards -->
        <div v-else-if="schedule.length > 0" class="lg:hidden space-y-3">
          <div 
            v-for="week in sortedSchedule" 
            :key="week.id"
            class="bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 scroll-animate"
            :class="getWeekBorderColor(week.number)"
          >
            <!-- Week Header -->
            <div class="flex items-center justify-between mb-3 sm:mb-4">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full text-white font-bold flex items-center justify-center shadow-md text-sm sm:text-base"
                  :class="getWeekBgColor(week.number)">
                  {{ week.number }}
                </div>
                <span class="text-cyan-600 font-semibold text-sm sm:text-base">Неделя {{ week.number }}</span>
              </div>
            </div>

            <!-- Theme -->
            <div class="mb-3 sm:mb-4">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{{ week.theme }}</h3>
              <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">{{ week.description }}</p>
            </div>

            <!-- Practice -->
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-200">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <div class="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-cyan-600 text-xs sm:text-sm">🛠️</span>
                </div>
                <span class="text-gray-800 font-medium text-xs sm:text-sm flex-1">{{ week.practice }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-8 sm:py-12">
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span class="text-yellow-600 text-xl sm:text-2xl">⚠️</span>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Расписание недоступно</h3>
            <p class="text-gray-600 text-sm sm:text-base">Попробуйте обновить страницу позже</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 w-full">
      <div class="w-full max-w-7xl mx-auto text-center px-3 sm:px-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 scroll-animate">
          Готовы начать обучение?
        </h2>
        <p class="text-base sm:text-xl text-cyan-100 mb-6 sm:mb-10 max-w-4xl mx-auto leading-relaxed scroll-animate">
          Присоединяйтесь к курсу и станьте специалистом в области AI и веб-разработки
        </p>
        <div class="scroll-animate">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWckw0PdIt-5dr9YZM-UXvqu6lnMMXWFLPfFW1-v6ro1toDA/viewform?usp=header" 
            target="_blank"
            class="bg-white text-cyan-600 hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-xl inline-block"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const scheduleSection = ref(null)
const pageTop = ref(null)
const schedule = ref([])
const loading = ref(true)

// ЗАМЕНИТЕ НА ВАШ RENDER URL!
const API_URL = 'https://kumlbackend.onrender.com'

// Проверка админского доступа
const isAdmin = computed(() => {
  if (process.client) {
    return localStorage.getItem('admin-authenticated') === 'true'
  }
  return false
})

const scrollToSchedule = () => {
  scheduleSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo(0, 0)
  }
}

// Получение цвета границы для недели
const getWeekBorderColor = (weekNumber) => {
  const num = weekNumber % 3
  return {
    'border-cyan-500': num === 1,
    'border-blue-500': num === 2,
    'border-indigo-500': num === 0
  }
}

// Получение цвета фона для недели
const getWeekBgColor = (weekNumber) => {
  const num = weekNumber % 3
  return {
    'bg-cyan-500': num === 1,
    'bg-blue-500': num === 2,
    'bg-indigo-500': num === 0
  }
}

// Сортировка расписания по номеру недели
const sortedSchedule = computed(() => {
  return [...schedule.value].sort((a, b) => a.number - b.number)
})

// Загрузка расписания с бэкенда
const loadSchedule = async () => {
  try {
    loading.value = true
    const response = await fetch(`${API_URL}/weeks`)
    
    if (response.ok) {
      const data = await response.json()
      schedule.value = data
    }
  } catch (error) {
    console.error('Error loading schedule:', error)
    schedule.value = []
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  scrollToTop()
  await loadSchedule()

  // Анимации при скролле
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
  title: 'Расписание курса - AI CENTER - Kozybaev University',
  description: '10 недель интенсивного обучения от основ веба до полноценных AI-приложений в Центре Искусственного Интеллекта',
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