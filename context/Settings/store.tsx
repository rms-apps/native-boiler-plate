import { create } from 'zustand';
import type { Theme } from '@/lib/type/common';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  THEME,
  DEFAULT_THEME,
  DEFAULT_SOUND_ENABLED,
} from '@/lib/constants/common';

interface SettingsState {
  theme: Theme;
  hasHydrated: boolean;
  isSoundEnabled: boolean;

  toggleTheme: () => void;
  toggleSound: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

let storeSet: (partial: Partial<SettingsState>, replace?: boolean) => void;

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => {
      return {
        hasHydrated: false,
        theme: DEFAULT_THEME,
        isSoundEnabled: DEFAULT_SOUND_ENABLED,

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
          })),

        toggleSound: () =>
          set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),

        setHasHydrated: (value) => set({ hasHydrated: value }),
      };
    },
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
