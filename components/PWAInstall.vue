<template>
  <div v-if="showInstallPrompt" class="pwa-install-prompt">
    <div class="pwa-install-content">
      <div class="pwa-install-icon">
        <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </div>
      <div class="pwa-install-text">
        <h3 class="text-lg font-semibold text-gray-900">Установить KUML?</h3>
        <p class="text-sm text-gray-600 mt-1">Установите приложение для лучшего опыта работы</p>
      </div>
      <div class="pwa-install-buttons">
        <button @click="installPWA" class="install-btn">
          Установить
        </button>
        <button @click="dismissPrompt" class="dismiss-btn">
          Позже
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showInstallPrompt = ref(false)
let deferredPrompt: any = null

const installPWA = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('PWA установлено')
    }
    deferredPrompt = null
    showInstallPrompt.value = false
  }
}

const dismissPrompt = () => {
  showInstallPrompt.value = false
  deferredPrompt = null
  // Сохраняем в localStorage, чтобы не показывать сразу снова
  localStorage.setItem('pwa-dismissed', 'true')
}

onMounted(() => {
  // Проверяем, не отклонял ли пользователь ранее
  const wasDismissed = localStorage.getItem('pwa-dismissed')
  if (wasDismissed) return

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    // Показываем с задержкой для лучшего UX
    setTimeout(() => {
      showInstallPrompt.value = true
    }, 3000)
  })

  window.addEventListener('appinstalled', () => {
    console.log('PWA было установлено')
    deferredPrompt = null
    showInstallPrompt.value = false
  })
})
</script>

<style scoped>
.pwa-install-prompt {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  z-index: 1000;
  max-width: 320px;
  animation: slideIn 0.3s ease-out;
}

.pwa-install-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pwa-install-icon {
  flex-shrink: 0;
}

.pwa-install-text {
  flex: 1;
}

.pwa-install-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.install-btn, .dismiss-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;
}

.install-btn {
  background: #06b6d4;
  color: white;
}

.install-btn:hover {
  background: #0891b2;
  transform: translateY(-1px);
}

.dismiss-btn {
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

.dismiss-btn:hover {
  background: #f1f5f9;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Адаптивность */
@media (max-width: 640px) {
  .pwa-install-prompt {
    bottom: 10px;
    left: 10px;
    right: 10px;
    max-width: none;
  }
  
  .pwa-install-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>