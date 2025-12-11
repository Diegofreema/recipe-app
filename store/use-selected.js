import { create } from 'zustand';

export const useSelectedStore = create((set) => ({
  selected: '',
  setSelected: (category) => set({ selected: category }),
}));
