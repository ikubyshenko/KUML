export default defineNuxtRouteMiddleware((to) => {
  // Проверяем только на клиенте
  if (process.client) {
    const isAuthenticated = localStorage.getItem('admin-authenticated') === 'true'
    
    // Если не авторизован и пытается зайти в админку - редирект на логин
    if (!isAuthenticated && to.path.startsWith('/admin') && to.path !== '/admin/login') {
      return navigateTo('/admin/login')
    }

    // Если авторизован и пытается зайти на страницу логина - редирект в админку
    if (isAuthenticated && to.path === '/admin/login') {
      return navigateTo('/admin')
    }
  }
})