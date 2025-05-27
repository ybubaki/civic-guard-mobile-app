import { create } from "zustand";

interface GeneralState {
  message: string;
  setMessage: (message: string) => void;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  message: "",
  setMessage: (message: string) => set({ message }),
}));
