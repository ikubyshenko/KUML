<template>
  <div>
    <!-- Затемнение -->
    <div 
      v-if="isOpen"
      class="overlay"
      @click="$emit('close')"
    ></div>
    
    <!-- Боковая панель -->
    <div class="sidebar" :class="{ open: isOpen }">
      <div class="sidebar-header">
        <h3>Dev Menu</h3>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>

      <div class="buttons">
        <button class="dev-btn" @click="handleClick('tools')">
          ⚙️ Dev Tools
        </button>
        <button class="dev-btn" @click="handleClick('debug')">
          🐛 Debug Mode
        </button>
        <button class="dev-btn" @click="handleClick('console')">
          💻 Console
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})

defineEmits(['close'])

const handleClick = (action) => {
  console.log('Dev action:', action)
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -300px;
  width: 250px;
  height: 100vh;
  background: #2d2d2d;
  transition: left 0.3s ease;
  z-index: 9999;
  padding: 20px;
}

.sidebar.open {
  left: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: white;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dev-btn {
  background: #3d3d3d;
  border: 1px solid #555;
  color: white;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.dev-btn:hover {
  background: #4d4d4d;
  transform: translateX(5px);
}
</style>