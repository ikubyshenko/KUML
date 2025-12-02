export const useAuth = () => {
  const user = useState('user', () => null)
  const loading = ref(false)

  const login = async (email: string, password: string) => {
    loading.value = true
    try {
      const { data } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })
      
      if (data.value?.success) {
        user.value = data.value.user
        return { success: true }
      }
      return { success: false, error: 'Ошибка входа' }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      loading.value = false
    }
  }

  const register = async (name: string, email: string, password: string) => {
    loading.value = true
    try {
      const { data } = await useFetch('/api/auth/register', {
        method: 'POST',
        body: { name, email, password }
      })
      
      if (data.value?.success) {
        user.value = data.value.user
        return { success: true }
      }
      return { success: false, error: 'Ошибка регистрации' }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    await useFetch('/api/auth/logout', { method: 'POST' })
    user.value = null
    await navigateTo('/login')
  }

  const fetchUser = async () => {
    try {
      const { data } = await useFetch('/api/auth/me')
      if (data.value?.success) {
        user.value = data.value.user
      }
    } catch (error) {
      user.value = null
    }
  }

  return {
    user: readonly(user),
    loading: readonly(loading),
    login,
    register,
    logout,
    fetchUser
  }
}