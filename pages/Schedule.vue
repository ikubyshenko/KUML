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
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight scroll-animate">
          РАСПИСАНИЕ <span class="text-cyan-600">КУРСА</span>
        </h1>
        
        <!-- Subtitle -->
        <div class="mb-8 scroll-animate">
          <p class="text-xl sm:text-2xl text-gray-700 font-light mb-2">
            Центр Искусственного Интеллекта
          </p>
          <p class="text-lg sm:text-xl text-cyan-700 font-medium">
            Kozybayev University
          </p>
        </div>

        <!-- Main Description -->
        <p class="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 scroll-animate">
          10 недель интенсивного обучения от основ веба до полноценных AI-приложений
        </p>

        <!-- CTA Button -->
        <div class="scroll-animate">
          <button 
            @click="scrollToSchedule"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Программа обучения
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
    <section ref="scheduleSection" class="py-20 bg-white w-full">
      <div class="w-full max-w-7xl mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4 scroll-animate">
            <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider">ПРОГРАММА ОБУЧЕНИЯ</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 scroll-animate">
            Расписание <span class="text-cyan-600">курса</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate">
            Пошаговое погружение в веб-разработку и искусственный интеллект
          </p>
        </div>

        <!-- Desktop Schedule Table -->
        <div class="hidden lg:block bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-2xl">
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
              v-for="(week, index) in schedule" 
              :key="week.number"
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 scroll-animate"
              :class="{
                'border-cyan-500': week.number % 3 === 1,
                'border-blue-500': week.number % 3 === 2,
                'border-indigo-500': week.number % 3 === 0
              }"
            >
              <div class="grid grid-cols-12 gap-4 items-center">
                <!-- Week Number -->
                <div class="col-span-2 text-center">
                  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl shadow-lg"
                    :class="{
                      'bg-cyan-500': week.number % 3 === 1,
                      'bg-blue-500': week.number % 3 === 2,
                      'bg-indigo-500': week.number % 3 === 0
                    }">
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
        <div class="lg:hidden space-y-6">
          <div 
            v-for="week in schedule" 
            :key="week.number"
            class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border-l-4 scroll-animate"
            :class="{
              'border-cyan-500': week.number % 3 === 1,
              'border-blue-500': week.number % 3 === 2,
              'border-indigo-500': week.number % 3 === 0
            }"
          >
            <!-- Week Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center shadow-md"
                  :class="{
                    'bg-cyan-500': week.number % 3 === 1,
                    'bg-blue-500': week.number % 3 === 2,
                    'bg-indigo-500': week.number % 3 === 0
                  }">
                  {{ week.number }}
                </div>
                <span class="text-cyan-600 font-semibold">Неделя {{ week.number }}</span>
              </div>
            </div>

            <!-- Theme -->
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ week.theme }}</h3>
              <p class="text-gray-600">{{ week.description }}</p>
            </div>

            <!-- Practice -->
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-cyan-600">🛠️</span>
                </div>
                <span class="text-gray-800 font-medium">{{ week.practice }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 w-full">
      <div class="w-full max-w-7xl mx-auto text-center px-4">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6 scroll-animate">
          Готовы начать обучение?
        </h2>
        <p class="text-xl text-cyan-100 mb-10 max-w-4xl mx-auto leading-relaxed scroll-animate">
          Присоединяйтесь к курсу и станьте специалистом в области AI и веб-разработки
        </p>
        <div class="scroll-animate">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWckw0PdIt-5dr9YZM-UXvqu6lnMMXWFLPfFW1-v6ro1toDA/viewform?usp=header" 
            target="_blank"
            class="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg shadow-xl inline-block"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const scheduleSection = ref(null)
const pageTop = ref(null)

const scrollToSchedule = () => {
  scheduleSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

// Функция для скролла наверх при загрузке
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo(0, 0)
  }
}

const schedule = [
  {
    number: 1,
    theme: "Введение в веб",
    description: "HTML, CSS, JavaScript основы",
    practice: "Форма + отправка запроса"
  },
  {
    number: 2,
    theme: "Основы PHP и REST API",
    description: "Серверная разработка и API",
    practice: "Простейший сервер"
  },
  {
    number: 3,
    theme: "CRUD и Базы данных",
    description: "Создание, чтение, обновление, удаление",
    practice: "CRUD-приложение"
  },
  {
    number: 4,
    theme: "Архитектура данных",
    description: "Проектирование структур данных",
    practice: "Импорт CSV"
  },
  {
    number: 5,
    theme: "Введение в Machine Learning",
    description: "Основы машинного обучения",
    practice: "Классификатор отзывов"
  },
  {
    number: 6,
    theme: "Интеграция модели",
    description: "Соединение ML с веб-приложением",
    practice: "Подключение модели к API"
  },
  {
    number: 7,
    theme: "Веб-интерфейс для нейронной сети",
    description: "Создание UI для AI-моделей",
    practice: "Вывод предсказаний"
  },
  {
    number: 8,
    theme: "Проектирование ИИ-приложений",
    description: "Архитектура AI-проектов",
    practice: "Работа в командах"
  },
  {
    number: 9,
    theme: "Разработка и тестирование",
    description: "Финальная стадия разработки",
    practice: "Отладка и подготовка"
  },
  {
    number: 10,
    theme: "Презентация проектов",
    description: "Демонстрация результатов",
    practice: "Защита проектов"
  }
]

onMounted(() => {
  // Скролл наверх при загрузке
  scrollToTop()

  // Инициализация анимаций при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Наблюдаем за всеми элементами с классом scroll-animate
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el)
  })

  // Предотвращаем скролл body когда открыт сайдбар
  const checkSidebar = () => {
    const sidebar = document.querySelector('[class*="translate-x-0"]')
    if (sidebar) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }

  // Наблюдаем за изменениями в DOM для сайдбара
  const observerSidebar = new MutationObserver(checkSidebar)
  observerSidebar.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
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

/* Фиксируем body когда открыт сайдбар */
body.sidebar-open {
  overflow: hidden !important;
  position: fixed !important;
  width: 100% !important;
}
</style>