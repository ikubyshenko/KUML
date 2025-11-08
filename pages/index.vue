<template>
  <div class="min-h-screen bg-white w-full" ref="pageTop">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/assets/images/bgULK.png" 
          alt="AI Center Background"
          class="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div class="absolute inset-0 z-0 w-full h-full">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40 animate-bounce"></div>
      </div>

      <div class="relative z-10 text-center w-full max-w-7xl mx-auto px-4">
        <!-- Main Heading -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight scroll-animate">
          AI <span class="text-cyan-600">CENTER</span>
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

        <!-- Описание -->
        <p class="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 scroll-animate">
          Интеллектуальные решения для университета и общества
        </p>

        <!-- CTA Кнопка -->
        <div class="scroll-animate">
          <button 
            @click="scrollToWhoWeAre"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Узнать больше
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

    <!-- Кто мы Section -->
    <section ref="whoWeAreSection" class="py-20 bg-white w-full">
      <div class="w-full max-w-7xl mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4 scroll-animate">
            <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider">КТО МЫ?</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 scroll-animate">
            Мы — команда <span class="text-cyan-600">будущего</span>
          </h2>
        </div>

        <!-- Content Grid -->
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <p class="text-xl text-gray-700 leading-relaxed scroll-animate">
              Центр Искусственного Интеллекта Козыбаев Университета — это место, где технологии становятся ближе, а идеи воплощаются в реальные проекты.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed scroll-animate">
              Мы верим, что интеллект — это не только код и алгоритмы, но и стремление человека учиться, развиваться и менять мир вокруг.
            </p>
            
            <!-- Features List -->
            <div class="space-y-4 mt-8">
              <div class="flex items-center space-x-3 scroll-animate">
                <div class="w-3 h-3 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span class="text-gray-700 text-lg">Инновационные исследования в области AI</span>
              </div>
              <div class="flex items-center space-x-3 scroll-animate">
                <div class="w-3 h-3 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span class="text-gray-700 text-lg">Практические решения для образования</span>
              </div>
              <div class="flex items-center space-x-3 scroll-animate">
                <div class="w-3 h-3 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span class="text-gray-700 text-lg">Разработка интеллектуальных систем</span>
              </div>
              <div class="flex items-center space-x-3 scroll-animate">
                <div class="w-3 h-3 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span class="text-gray-700 text-lg">Подготовка специалистов будущего</span>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white transform rotate-3 shadow-2xl scroll-animate">
              <div class="bg-white/10 rounded-2xl p-6 transform -rotate-3">
                <h3 class="text-2xl font-bold mb-4">Наша миссия</h3>
                <p class="text-blue-100 leading-relaxed">
                  Создавать интеллектуальные решения, которые преобразуют образование и общество через передовые технологии искусственного интеллекта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Секция -->
    <section class="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 w-full">
      <div class="w-full max-w-7xl mx-auto text-center px-4">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6 scroll-animate">
          Готовы к сотрудничеству?
        </h2>
        <p class="text-xl text-cyan-100 mb-10 max-w-4xl mx-auto leading-relaxed scroll-animate">
          Присоединяйтесь к нам в создании будущего с помощью искусственного интеллекта
        </p>
        <div class="scroll-animate">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWckw0PdIt-5dr9YZM-UXvqu6lnMMXWFLPfFW1-v6ro1toDA/viewform?usp=header" 
            target="_blank"
            class="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg shadow-xl inline-block"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const whoWeAreSection = ref<HTMLElement | null>(null)
const pageTop = ref<HTMLElement | null>(null)

const scrollToWhoWeAre = () => {
  whoWeAreSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

// Был баг что при обновлении страницы она открывалась по центру, этот код скроллит наверх при запуске
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo(0, 0)
  }
}

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
  title: 'AI CENTER - Kozybaev University',
  description: 'Интеллектуальные решения для университета и общества.',
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