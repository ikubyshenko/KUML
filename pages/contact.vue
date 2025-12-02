<template>
  <div class="min-h-screen bg-white w-full">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full px-6">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/assets/images/bgULK.png" 
          alt="Contact Background"
          class="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40"></div>
      </div>

      <div class="relative z-10 text-center w-full max-w-4xl mx-auto">
        <!-- Main Heading -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 scroll-animate">
          <span class="text-cyan-600">Контакты</span>
        </h1>
        
        <!-- Subtitle -->
        <div class="mb-10 scroll-animate">
          <p class="text-xl text-gray-700 font-light">
            Свяжитесь с разработчиком проекта
          </p>
        </div>

        <!-- Simple CTA -->
        <div class="scroll-animate">
          <button 
            @click="scrollToContacts"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg text-lg"
          >
            Перейти к контактам
          </button>
        </div>
      </div>
    </section>

    <!-- Contacts Section -->
    <section ref="contactsSection" class="relative py-20 bg-white w-full px-6">
      <div class="relative z-10 w-full max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider scroll-animate">КОНТАКТЫ</span>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 scroll-animate">
            Связь с <span class="text-cyan-600">разработчиком</span>
          </h2>
        </div>

        <!-- Developer Card -->
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-cyan-200 scroll-animate">
          <div class="text-center">
            <!-- Avatar -->
            <div class="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span class="text-white text-3xl font-bold">ИК</span>
            </div>
            
            <!-- Info -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Илья Кубышенко</h3>
              <p class="text-gray-600">Frontend разработчик проекта</p>
              <p class="text-gray-500 text-sm mt-1">Студент ISU(US)-24</p>
            </div>

            <!-- Contact Links -->
            <div class="space-y-4 max-w-sm mx-auto">
              <!-- Telegram -->
              <a 
                href="https://t.me/ikubyshenko" 
                target="_blank"
                class="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md"
              >
                <span class="text-xl"></span>
                <span class="font-semibold">Telegram</span>
              </a>

              <!-- Email -->
              <a 
                href="mailto:ikubyshenko@gmail.com" 
                class="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300"
              >
                <span class="text-xl"></span>
                <span class="font-semibold">Email</span>
              </a>
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
  title: 'Связь - KUML - Kozybaev University',
  description: 'Свяжитесь с разработчиком проекта для вопросов и сотрудничества',
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