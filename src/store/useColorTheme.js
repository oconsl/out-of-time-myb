import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: 'bg-white text-black',
  setTheme: (theme) => set({ theme }),
  // colors: ['#2196F3', '#009688', '#9C27B0', '#FFEB3B', '#afbbc9', '#4CAF50', '#2d3748', '#f56565', '#ed64a6'],
  colors: ['bg-red-500 text-white', 'bg-sky-500 text-white', 'bg-amber-500 text-black', 'bg-emerald-500 text-black', 'bg-white text-black', 'bg-black text-white'],
}));
