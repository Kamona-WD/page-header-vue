import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const isMobileMenuOpen = ref(false)