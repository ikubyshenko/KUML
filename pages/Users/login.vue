<template>
  <!-- Основной контейнер на весь экран -->
  <div class="fixed inset-0 w-screen h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 flex flex-col items-center justify-center">
    
    <!-- Анимированный фон (Декор) -->
    <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-200 rounded-full blur-3xl opacity-40 animate-bounce-slow"></div>
    </div>

    <!-- Карточка регистрации -->
    <div class="relative z-10 w-full max-w-md px-6">
      <div class="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-white/50 form-animate">
        
        <!-- Заголовок -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 tracking-tight">
             <span class="text-cyan-600">Вход</span>
          </h1>
          <p class="text-gray-500 mt-2 text-sm">Войди в свой аккаунт</p>
        </div>

        <!-- Форма -->
        <form @submit.prevent="handleRegister" class="space-y-5">
          

          <!-- Поле: Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="Mail@gmail.com"
              class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          <!-- Поле: Пароль -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
            <input
              v-model="form.password"
              type="password"
              id="password"
              placeholder="••••••••"
              class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          <!-- Кнопка -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex justify-center items-center mt-4"
          >
            <span v-if="!isLoading">Войти</span>
            <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </form>

        <!-- Подвал карточки -->
        <div class="mt-6 text-center text-sm text-gray-500">
          Нет аккаунта? 
          <nuxt-link to="/users/register" class="text-cyan-600 hover:text-cyan-700 font-semibold hover:underline transition-colors">Зарегистрироваться</nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Состояние формы
const form = reactive({
  name: '',
  email: '',
  password: ''
})

const isLoading = ref(false)

const handleRegister = async () => {
  isLoading.value = true
  
  // Имитация запроса к API
  setTimeout(() => {
    console.log('Регистрация:', form)
    isLoading.value = false
    alert(`Добро пожаловать, ${form.name}!`)
    // Здесь можно сделать редирект: router.push('/dashboard')
  }, 1500)
}

// Метаданные страницы
useSeoMeta({
  title: 'Регистрация - AI CENTER',
  description: 'Присоединяйся к обучению ML',
})
</script>

<style scoped>
/* Анимация появления карточки */
.form-animate {
  animation: slideUpFade 0.6s ease-out forwards;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Медленная анимация шарика на фоне */
.animate-bounce-slow {
  animation: bounce 6s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(-5%); }
  50% { transform: translateY(5%); }
}
</style>