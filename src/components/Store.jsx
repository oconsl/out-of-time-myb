import create from 'zustand'

const useTimerStore = create((set) => ({
  seconds: 0, // Aseguramos que el estado inicial es un número
  isRunning: false,
  setSeconds: (seconds) => {
    // Verificamos que 'seconds' es un número antes de actualizar el estado
    if (typeof seconds === 'number') {
      set({ seconds })
    }
  },
  toggleIsRunning: () => set((state) => ({ isRunning: !state.isRunning }))
}))
export default useTimerStore
