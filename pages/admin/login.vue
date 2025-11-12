<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Админ Панель</h1>
        <p class="text-gray-600">Введите логин и пароль для доступа</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
            Логин
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="Введите логин"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Пароль
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="Введите пароль"
          />
        </div>

        <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="text-red-700 text-sm">{{ error }}</p>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading">Вход...</span>
          <span v-else>Войти</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'admin-auth'
})

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: '1234567890'
}

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  await new Promise(resolve => setTimeout(resolve, 1000))

  if (username.value === ADMIN_CREDENTIALS.username && password.value === ADMIN_CREDENTIALS.password) {
    localStorage.setItem('admin-authenticated', 'true')
    await navigateTo('/admin')
  } else {
    error.value = 'Неверный логин или пароль'
  }

  loading.value = false
}

onMounted(() => {
  if (process.client && localStorage.getItem('admin-authenticated') === 'true') {
    navigateTo('/admin')
  }
})
</script>