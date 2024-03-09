// src/composables/useTheme.ts
import { ref, computed } from 'vue';

// Reactive theme state
const theme = ref('dark');

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  const setTheme = (newTheme: string) => {
    theme.value = newTheme;
  };

  const currentTheme = computed(() => theme.value);

  return { currentTheme, toggleTheme, setTheme };
}
