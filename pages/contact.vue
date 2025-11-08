<template>
  <div class="min-h-screen bg-white w-full">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/assets/images/bgULK.png" 
          alt="Contact Background"
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
          <span class="text-cyan-600">СВЯЗЬ</span> С НАМИ
        </h1>
        
        <!-- Subtitle -->
        <div class="mb-8 scroll-animate">
          <p class="text-xl sm:text-2xl text-gray-700 font-light">
            Всегда на связи! Задавайте вопросы, делитесь идеями и присоединяйтесь к нашему сообществу
          </p>
        </div>

        <!-- CTA Button -->
        <div class="scroll-animate">
          <button 
            @click="scrollToContacts"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Наши контакты
          </button>
        </div>
      </div>
    </section>
    <!-- Contacts Section -->
    <section ref="contactsSection" class="py-20 bg-white w-full">
      <div class="w-full max-w-7xl mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4 scroll-animate">
            <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider">КОНТАКТЫ</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 scroll-animate">
            Присоединяйтесь к <span class="text-cyan-600">нашему сообществу</span>
          </h2>
        </div>

        <!-- Contacts Grid -->
        <div class="grid lg:grid-cols-2 gap-8 mb-20">
          <!-- Telegram Card -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100 transform hover:scale-105 transition-all duration-300 scroll-animate">
            <div class="text-center mb-8">

              <h3 class="text-3xl font-bold text-gray-900 mb-2">Telegram</h3>
              <p class="text-gray-600 text-lg">Наш основной канал связи и общения</p>
            </div>

            <div class="flex flex-col items-center space-y-6">
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
                <img src="/assets/images/telegramqr.jpg" alt="Telegram QR Code" class="w-48 h-48 object-cover rounded-xl">
              </div>
              <p class="text-gray-500 text-center">Отсканируйте QR-код для быстрого перехода</p>
              
              <a 
                href="https://t.me/+i6lQjE3kTOE4Y2Ji" 
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center gap-3"
              >
                <span>✈️</span>
                Присоединиться к чату
              </a>
            </div>
          </div>

          <!-- WhatsApp Card -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-100 transform hover:scale-105 transition-all duration-300 scroll-animate">
            <div class="text-center mb-8">

              <h3 class="text-3xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p class="text-gray-600 text-lg">Групповой чат для студентов курса</p>
            </div>

            <div class="flex flex-col items-center space-y-6">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                <img src="/assets/images/whatsapp.png" alt="WhatsApp" class="w-32 h-32 object-contain">
              </div>
              <p class="text-gray-500 text-center">Присоединяйтесь к нашему сообществу</p>
              
              <a 
                href="https://chat.whatsapp.com/DGTgmWZBwihHyHqEh6fhDD?mode=wwt" 
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center gap-3"
              >
                <span>💚</span>
                Вступить в группу WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Developer Info -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-gray-200 scroll-animate">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Разработка сайта</h3>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-cyan-200 max-w-2xl mx-auto">
              <div class="flex flex-col items-center space-y-4">
                <div class="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span class="text-white text-2xl font-bold">ИК</span>
                </div>
                
                <div class="text-center">
                  <h4 class="text-xl font-bold text-gray-900 mb-2">Илья Кубышенко</h4>
                  <p class="text-gray-600 mb-1">Ведущий Frontend разработчик сайта</p>
                  <p class="text-gray-500 text-sm mb-4">Студент ISU(US)-24</p>
                  
                  <div class="flex items-center justify-center gap-2 text-cyan-600 font-medium">
                    <span>Telegram:</span>
                    <a 
                      href="https://t.me/ikubyshenko" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="hover:text-cyan-700 transition-colors"
                    >
                      @ikubyshenko
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const contactsSection = ref<HTMLElement | null>(null)

const scrollToContacts = () => {
  contactsSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

onMounted(() => {
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