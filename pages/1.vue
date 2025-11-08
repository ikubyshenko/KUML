<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-icon">🧠</span>
            О нас
          </h1>
          <p class="hero-subtitle">
            Мы делаем искусственный интеллект понятным и доступным каждому
          </p>
        </div>
        <div class="hero-decoration">
          <div class="floating-element element-1">⚡</div>
          <div class="floating-element element-2">🚀</div>
          <div class="floating-element element-3">💡</div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section">
      <div class="container">
        <!-- Mission Block -->
        <div class="text-block mission-block">
          <div class="text-content">
            <p class="lead-text">
              Мы - команда преподавателей и разработчиков, которые верят, что искусственный интеллект должен быть понятным и доступным каждому.
            </p>
            <p>
              Наш курс создан для студентов, которые хотят научиться делать реальные проекты с нейросетями - не просто писать код, а создавать полноценные веб-приложения с элементами ИИ.
            </p>
          </div>
          <div class="decoration">
            <div class="code-icon">&lt;/&gt;</div>
          </div>
        </div>

        <!-- Approach Block -->
        <div class="text-block approach-block">
          <div class="decoration">
            <div class="brain-icon">🧩</div>
          </div>
          <div class="text-content">
            <p>
              Мы соединяем веб-разработку и машинное обучение в одном практическом курсе. Студенты изучают, как работают сайты и серверы, учатся собирать и обрабатывать данные, обучают модели и подключают их к своим приложениям.
            </p>
          </div>
        </div>

        <!-- Results Block -->
        <div class="text-block results-block">
          <div class="text-content">
            <p>
              Каждый урок - это практика и результат, а не сухая теория. К концу обучения студенты разрабатывают собственное интеллектуальное приложение, которое можно показать работодателю или использовать как портфолио.
            </p>
          </div>
          <div class="decoration">
            <div class="portfolio-icon">📊</div>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider">
          <span>⸻</span>
        </div>

        <!-- Mission Section -->
        <div class="wide-block mission-wide-block">
          <div class="wide-content">
            <div class="mission-header">
              <span class="mission-icon">🚀</span>
              <h3 class="mission-title">Наша миссия</h3>
            </div>
            <p class="mission-text">
              Помочь новым разработчикам войти в сферу искусственного интеллекта через реальные, понятные и интересные проекты.
            </p>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider">
          <span>⸻</span>
        </div>

        <!-- What We Teach -->
        <div class="wide-block teach-block">
          <div class="wide-content">
            <div class="teach-header">
              <span class="teach-icon">💡</span>
              <h3 class="teach-title">Мы обучаем:</h3>
            </div>
            <ul class="teach-list">
              <li class="teach-item">как работает современный веб;</li>
              <li class="teach-item">как создавать сервер и базу данных;</li>
              <li class="teach-item">как собирать и готовить данные;</li>
              <li class="teach-item">как обучать и использовать нейронные сети;</li>
              <li class="teach-item">как превращать идеи в реальные веб-приложения с ИИ.</li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider">
          <span>⸻</span>
        </div>

        <!-- For Whom -->
        <div class="wide-block audience-block">
          <div class="wide-content">
            <div class="audience-header">
              <span class="audience-icon">🤝</span>
              <h3 class="audience-title">Для кого этот курс</h3>
            </div>
            <p class="audience-subtitle">Курс подойдёт:</p>
            <ul class="audience-list">
              <li class="audience-item">студентам IT-направлений;</li>
              <li class="audience-item">начинающим разработчикам;</li>
              <li class="audience-item">тем, кто хочет понять, как работает искусственный интеллект в реальных проектах.</li>
            </ul>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h4>Практика</h4>
            <p>Реальные проекты вместо теории</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h4>Скорость</h4>
            <p>Быстрый старт в AI разработке</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h4>Результат</h4>
            <p>Готовое портфолио проектов</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h4>Карьера</h4>
            <p>Навыки востребованные на рынке</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Упрощенная версия без GSAP для избежания ошибок
onMounted(() => {
  // Простая анимация появления
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });

    document.querySelectorAll('.text-block, .wide-block, .feature-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Hero Section */
.hero-section {
  padding: 80px 20px 60px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.hero-text {
  flex: 1;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-icon {
  font-size: 4.5rem;
  animation: float 3s ease-in-out infinite;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 600px;
}

.hero-decoration {
  position: relative;
  width: 200px;
  height: 200px;
}

.floating-element {
  position: absolute;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  top: 0;
  right: 0;
  animation-delay: 0s;
}

.element-2 {
  bottom: 30px;
  right: 50px;
  animation-delay: 2s;
}

.element-3 {
  top: 50px;
  right: 100px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

/* Content Section */
.content-section {
  padding: 80px 20px;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Text Blocks */
.text-block {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 3rem;
  padding: 3rem;
  border-radius: 25px;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.text-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.text-content {
  flex: 1;
}

.lead-text {
  font-size: 1.3rem;
  font-weight: 500;
  color: #2d3748;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1rem;
}

.decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  flex-shrink: 0;
}

.code-icon, .brain-icon, .portfolio-icon {
  font-size: 4rem;
  opacity: 0.8;
  animation: pulse 2s ease-in-out infinite;
}

/* Wide Blocks */
.wide-block {
  margin-bottom: 3rem;
  padding: 3rem 4rem;
  border-radius: 25px;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wide-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.wide-content {
  max-width: 100%;
}

/* Mission Block */
.mission-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.mission-icon {
  font-size: 3rem;
}

.mission-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.mission-text {
  font-size: 1.3rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
}

/* Teach Block */
.teach-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.teach-icon {
  font-size: 3rem;
}

.teach-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.teach-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.teach-item {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.teach-item::before {
  content: '•';
  color: #667eea;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: 0;
}

/* Audience Block */
.audience-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.audience-icon {
  font-size: 3rem;
}

.audience-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.audience-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.audience-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.audience-item {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.audience-item::before {
  content: '•';
  color: #667eea;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: 0;
}

/* Divider */
.divider {
  text-align: center;
  margin: 3rem 0;
  color: #cbd5e0;
  font-size: 2rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.feature-card:hover .feature-icon {
  transform: scale(1.2) rotate(10deg);
}

.feature-card:hover h4,
.feature-card:hover p {
  color: white;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.feature-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
  transition: color 0.3s ease;
}

.feature-card p {
  color: #718096;
  line-height: 1.6;
  transition: color 0.3s ease;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .title-icon {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-decoration {
    display: none;
  }
  
  .text-block {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
  
  .wide-block {
    padding: 2rem;
  }
  
  .mission-header,
  .teach-header,
  .audience-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 20px 40px;
  }
  
  .content-section {
    padding: 40px 20px;
  }
  
  .text-block {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .wide-block {
    padding: 1.5rem;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
}
</style>