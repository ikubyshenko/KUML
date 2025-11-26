<template>
  <div class="min-h-screen bg-white w-full" ref="pageTop">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full px-6 sm:px-10">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img
          src="/assets/images/bgULK.png"
          alt="AI Center Background"
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
          AI <span class="text-cyan-600">CENTER</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-700 font-light mb-8 scroll-animate">
          Мир, где технологии становятся продолжением твоего разума.
        </p>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 scroll-animate">
          Ты поймёшь, как создаются и работают нейронные сети, и научишься встраивать их в реальные веб‑приложения.
        </p>
        <div class="scroll-animate">
          <button
            @click="scrollToWhoWeAre"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Узнать больше
          </button>
        </div>
      </div>
    </section>

    <!-- Навыки Section -->
    <section ref="whoWeAreSection" class="py-20 bg-white w-full px-6 sm:px-10">
      <div class="w-full max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider scroll-animate">Навыки на выходе</span>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 scroll-animate">
            Ты станешь частью <span class="text-cyan-600">команды будущего</span>
          </h2>
        </div>

        <!-- Список навыков -->
<!-- Список навыков -->
<div class="grid md:grid-cols-2 gap-4">
  <div
    v-for="(skill, index) in skills"
    :key="index"
    class="flex items-start space-x-3 scroll-animate"
  >
    <div class="w-2 h-2 mt-2 bg-cyan-600 rounded-full"></div>
    <p class="text-base text-gray-700 leading-snug">{{ skill }}</p>
  </div>
</div>

      </div>
    </section>

    <!-- Формат занятий -->
    <section class="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 w-full px-6 sm:px-10">
      <div class="w-full max-w-7xl mx-auto text-center text-white">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 scroll-animate">
          Формат занятий
        </h2>
        <p class="text-xl mb-10 max-w-4xl mx-auto leading-relaxed scroll-animate">
          Оффлайн‑формат — обучение в живом общении. С первого дня ты погружаешься в практику: реальные задачи, собственные проекты, поддержка менторов. В конце курса — твой собственный AI‑проект, готовый к защите и развитию.
        </p>
        <div class="scroll-animate">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWckw0PdIt-5dr9YZM-UXvqu6lnMMXWFLPfFW1-v6ro1toDA/viewform?usp=header"
            target="_blank"
            class="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg shadow-xl inline-block"
          >
            Присоединяйся к нашей команде
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const whoWeAreSection = ref<HTMLElement | null>(null)

const scrollToWhoWeAre = () => {
  whoWeAreSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const skills = [
  'Развиваешь креативность и системное мышление',
  'Понимаешь, как “думают” нейросети и умеешь обучать простые модели',
  'Создаёшь и интегрируешь ИИ‑модули в веб‑приложения',
  'Уверенно работаешь с современными AI‑инструментами и API',
  'Развиваешь инженерное мышление',
  'Работаешь в команде будущего — человек + ИИ'
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
  title: 'Главная - KUML - Kozybaev University',
  description: 'KUML - мир, где технологии становятся продолжением твоего разума.',
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
