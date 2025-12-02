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
           <span class="text-cyan-600">Выложить контент</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-700 font-light mb-8 scroll-animate">
          Хотите поделиться проектом?
        </p>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 scroll-animate">
          Свяжитесь со мной в Telegram для добавления вашего контента на платформу
        </p>
        <div class="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/ikubyshenko"
            target="_blank"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg inline-flex items-center gap-3 group"
          >
            <span class="text-xl"></span>
            Написать мне
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="relative py-20 bg-white w-full px-6 sm:px-10">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img
          src="/assets/images/bgULK.png"
          alt="AI Center Background"
          class="w-full h-full object-cover opacity-5"
        />
      </div>

      <div class="relative z-10 w-full max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider scroll-animate">Добавление контента</span>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 scroll-animate">
            Как <span class="text-cyan-600">предложить</span> проект
          </h2>
          <p class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto scroll-animate">
            Простой процесс добавления вашего контента на платформу
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Вертикальная линия -->
          <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-200 transform md:-translate-x-1/2"></div>
          
          <!-- Шаг 1 -->
          <div class="relative mb-12 scroll-animate">
            <div class="flex flex-col md:flex-row items-start">
              <!-- Дата для мобильных -->
              <div class="md:hidden mb-4">
                <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block">
                  <span class="font-semibold">Шаг 1</span>
                </div>
              </div>

              <!-- Левая сторона (для десктопа) -->
              <div class="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
                <div class="text-right">
                  <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                    <span class="font-semibold">Шаг 1</span>
                  </div>
                  <p class="text-gray-500 text-sm">Связь</p>
                </div>
              </div>

              <!-- Точка на линии -->
              <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-2 z-10"></div>

              <!-- Правая сторона -->
              <div class="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                <!-- Карточка -->
                <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900">Напишите в Telegram</h3>
                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Контакт
                    </span>
                  </div>
                  
                  <p class="text-gray-600 mb-4">
                    Свяжитесь со мной через Telegram 
                    <a href="https://t.me/ikubyshenko" target="_blank" class="text-cyan-600 font-semibold hover:underline">@ikubyshenko</a> 
                    и опишите ваш проект
                  </p>
                  
                  <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                      <span class="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                      Что указать в сообщении:
                    </h4>
                    <ul class="space-y-2">
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Ссылку на проект (Github) или ссылку на сайт</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Кто автор (Имя фамилия)</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Название проекта (Не длинее 19 символов)</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Описание проекта</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Используемые технологии (По типу Nuxt, Python, и т.д)</span>
                      </li>
                    </ul>
                  </div>

                  <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div class="flex items-center text-sm text-gray-500">
                      <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Отправить заявку
                    </div>
                    <a 
                      href="https://t.me/ikubyshenko" 
                      target="_blank"
                      class="text-cyan-600 hover:text-cyan-800 font-medium text-sm"
                    >
                      Перейти в Telegram →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Шаг 2 -->
          <div class="relative mb-12 scroll-animate">
            <div class="flex flex-col md:flex-row items-start">
              <!-- Дата для мобильных -->
              <div class="md:hidden mb-4">
                <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block">
                  <span class="font-semibold">Шаг 2</span>
                </div>
              </div>

              <!-- Левая сторона (для десктопа) -->
              <div class="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
                <div class="text-right">
                  <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                    <span class="font-semibold">Шаг 2</span>
                  </div>
                  <p class="text-gray-500 text-sm">Обсуждение</p>
                </div>
              </div>

              <!-- Точка на линии -->
              <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-2 z-10"></div>

              <!-- Правая сторона -->
              <div class="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                <!-- Карточка -->
                <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900">Модерация</h3>
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      Проверка проекта
                    </span>
                  </div>
                  
                  <p class="text-gray-600 mb-4">
                    Я проверю ваш проект
                  </p>
                  
                  <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                      <span class="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                      Что проверяю:
                    </h4>
                    <ul class="space-y-2">
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Правильность формы</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Отсутствие запрещенки</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Материалы для публикации</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Формат публикации</span>
                      </li>
                    </ul>
                  </div>

                  <div class="pt-4 border-t border-gray-100">
                    <div class="flex items-center text-sm text-gray-500">
                      <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Индивидуальный подход к каждому проекту
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Шаг 3 -->
          <div class="relative mb-12 scroll-animate">
            <div class="flex flex-col md:flex-row items-start">
              <!-- Дата для мобильных -->
              <div class="md:hidden mb-4">
                <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block">
                  <span class="font-semibold">Шаг 3</span>
                </div>
              </div>

              <!-- Левая сторона (для десктопа) -->
              <div class="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
                <div class="text-right">
                  <div class="bg-cyan-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                    <span class="font-semibold">Шаг 3</span>
                  </div>
                  <p class="text-gray-500 text-sm">Публикация</p>
                </div>
              </div>

              <!-- Точка на линии -->
              <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-2 z-10"></div>

              <!-- Правая сторона -->
              <div class="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                <!-- Карточка -->
                <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900">Публикация на платформе</h3>
                    <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      Результат
                    </span>
                  </div>
                  
                  <p class="text-gray-600 mb-4">
                    После согласования всех деталей ваш контент будет добавлен на платформу AI CENTER
                  </p>
                  
                  <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                      <span class="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                      Что вы получаете:
                    </h4>
                    <ul class="space-y-2">
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Профессиональное оформление проекта</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Указание авторства и ссылок на вас</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Публикация в разделе Feed или Changelog</span>
                      </li>
                      <li class="flex items-start text-gray-600">
                        <span class="text-cyan-600 mr-2 mt-1">•</span>
                        <span>Возможность получать обратную связь от сообщества</span>
                      </li>
                    </ul>
                  </div>

                  <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div class="flex items-center text-sm text-gray-500">
                      <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Авторские права сохраняются
                    </div>
                    <div class="text-sm text-gray-500">
                      Обычно в течение 1-2 дней
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Что можно публиковать -->
        <div class="mt-20 scroll-animate">
          <div class="text-center mb-12">
            <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider">Виды контента</span>
            <h2 class="text-4xl font-bold text-gray-900 mt-4">
              Что мы <span class="text-cyan-600">публикуем</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Проекты -->
            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="text-cyan-600 text-4xl mb-6">🔬</div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Научные проекты</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Исследования в AI/ML</p>
                    <p class="text-sm text-gray-600">Машинное обучение, нейросети, анализ данных</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Data Science проекты</p>
                    <p class="text-sm text-gray-600">Аналитика, визуализация, прогнозирование</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Академические работы</p>
                    <p class="text-sm text-gray-600">Научные статьи, исследования, эксперименты</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Разработки -->
            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="text-cyan-600 text-4xl mb-6">💻</div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Технические разработки</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Открытые проекты</p>
                    <p class="text-sm text-gray-600">Исходный код на GitHub/GitLab</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Библиотеки и инструменты</p>
                    <p class="text-sm text-gray-600">Полезные утилиты для разработки</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Технические решения</p>
                    <p class="text-sm text-gray-600">Архитектура, оптимизация, best practices</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Материалы -->
            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="text-cyan-600 text-4xl mb-6">📚</div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Образовательные материалы</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Туториалы и руководства</p>
                    <p class="text-sm text-gray-600">Пошаговые инструкции и примеры</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Обзоры технологий</p>
                    <p class="text-sm text-gray-600">Сравнение, анализ, рекомендации</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">Кейсы и исследования</p>
                    <p class="text-sm text-gray-600">Практические примеры применения</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Block -->
        <div class="mt-20 scroll-animate">
          <div class="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 class="text-3xl font-bold text-white mb-6">
              Готовы поделиться своим проектом?
            </h2>
            <p class="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
              Напишите мне в Telegram, и мы добавим ваш контент на платформу
            </p>
            <a
              href="https://t.me/ikubyshenko"
              target="_blank"
              class="inline-flex items-center gap-4 px-10 py-5 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg group"
            >
              <span class="text-2xl"></span>
              Написать мне
              <span class="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <div class="mt-10 pt-8 border-t border-cyan-500 border-opacity-30">
              <p class="text-cyan-100">
                Отвечаю обычно в течение нескольких часов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const pageTop = ref<HTMLElement | null>(null)

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
  title: 'Предложить контент - AI CENTER - Kozybaev University',
  description: 'Хотите добавить свой проект на платформу AI CENTER? Свяжитесь с нами через Telegram @ikubyshenko',
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