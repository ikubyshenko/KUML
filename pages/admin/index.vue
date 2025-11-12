<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <button 
              @click="navigateTo('/')"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span class="text-2xl">←</span>
            </button>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Админ Панель</h1>
              <p class="text-gray-600">Управление расписанием курса</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="showAddForm = true"
              class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              + Добавить неделю
            </button>
            <button
              @click="handleLogout"
              class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-flex items-center justify-center space-x-3">
          <div class="w-8 h-8 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
          <span class="text-gray-600 text-lg">Загрузка расписания...</span>
        </div>
      </div>

      <!-- Schedule Grid -->
      <div v-else class="grid gap-6">
        <div 
          v-for="week in sortedSchedule" 
          :key="week.id"
          class="bg-white rounded-2xl p-6 shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl"
          :class="getWeekBorderColor(week.number)"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center shadow-md"
                :class="getWeekBgColor(week.number)">
                {{ week.number }}
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Неделя {{ week.number }}</h3>
                <p class="text-sm text-gray-500">ID: {{ week.id }}</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <button
                @click="editWeek(week)"
                class="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium"
              >
                Редактировать
              </button>
              <button
                @click="deleteWeek(week.id)"
                class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
              >
                Удалить
              </button>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Тема:</label>
              <p class="text-gray-900 font-semibold">{{ week.theme }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Практика:</label>
              <p class="text-gray-900 font-medium">{{ week.practice }}</p>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Описание:</label>
              <p class="text-gray-700">{{ week.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && schedule.length === 0" class="text-center py-12">
        <div class="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
          <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-gray-400 text-2xl">📅</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Расписание пустое</h3>
          <p class="text-gray-600 mb-4">Добавьте первую неделю обучения</p>
          <button
            @click="showAddForm = true"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Добавить неделю
          </button>
        </div>
      </div>
    </main>

    <!-- Add/Edit Modal -->
    <div v-if="showAddForm || editingWeek" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ editingWeek ? 'Редактировать неделю' : 'Добавить неделю' }}
          </h2>
        </div>

        <form @submit.prevent="submitForm" class="p-6 space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Номер недели *
              </label>
              <input
                v-model="formData.number"
                type="number"
                min="1"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Введите номер недели"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Практическая работа *
              </label>
              <input
                v-model="formData.practice"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Введите практическую работу"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Тема недели *
              </label>
              <input
                v-model="formData.theme"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Введите тему недели"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Описание *
              </label>
              <textarea
                v-model="formData.description"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Введите описание недели"
              />
            </div>
          </div>

          <div v-if="formError" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-red-700 text-sm">{{ formError }}</p>
          </div>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              @click="cancelForm"
              class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Отмена
            </button>
            <button
              type="submit"
              :disabled="formLoading"
              class="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium disabled:opacity-50"
            >
              {{ formLoading ? 'Сохранение...' : (editingWeek ? 'Обновить' : 'Добавить') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin-auth'
})

// ЗАМЕНИТЕ НА ВАШ НОВЫЙ RENDER URL!
const API_URL = 'https://kumlbackend.onrender.com'

const schedule = ref([])
const loading = ref(true)
const showAddForm = ref(false)
const editingWeek = ref(null)
const formLoading = ref(false)
const formError = ref('')

const formData = ref({
  number: '',
  theme: '',
  description: '',
  practice: ''
})

// Сортировка расписания по номеру недели
const sortedSchedule = computed(() => {
  return [...schedule.value].sort((a, b) => a.number - b.number)
})

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

// Загрузка расписания
const loadSchedule = async () => {
  try {
    const response = await fetch(`${API_URL}/weeks`)
    if (response.ok) {
      const data = await response.json()
      schedule.value = data
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

// Редактирование недели
const editWeek = (week) => {
  editingWeek.value = week
  formData.value = { ...week }
}

// Удаление недели
const deleteWeek = async (weekId) => {
  if (!confirm('Вы уверены, что хотите удалить эту неделю?')) {
    return
  }

  try {
    const response = await fetch(`${API_URL}/weeks/${weekId}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      await loadSchedule()
    } else {
      alert('Ошибка при удалении недели')
    }
  } catch (error) {
    console.error('Ошибка:', error)
    alert('Ошибка при удалении недели')
  }
}

// Отправка формы
const submitForm = async () => {
  formLoading.value = true
  formError.value = ''

  try {
    const url = editingWeek.value 
      ? `${API_URL}/weeks/${editingWeek.value.id}`
      : `${API_URL}/weeks`
    
    const method = editingWeek.value ? 'PUT' : 'POST'

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      await loadSchedule()
      cancelForm()
    } else {
      const errorData = await response.json()
      formError.value = errorData.error || 'Ошибка при сохранении'
    }
  } catch (error) {
    console.error('Ошибка:', error)
    formError.value = 'Ошибка подключения к серверу'
  } finally {
    formLoading.value = false
  }
}

// Отмена формы
const cancelForm = () => {
  showAddForm.value = false
  editingWeek.value = null
  formData.value = {
    number: '',
    theme: '',
    description: '',
    practice: ''
  }
  formError.value = ''
}

// Выход из админки
const handleLogout = () => {
  localStorage.removeItem('admin-authenticated')
  navigateTo('/')
}

onMounted(async () => {
  await loadSchedule()
})
</script>