import { create } from "zustand";

interface GeneralState {
  search: string;
  setSearch: (search: string) => void;
  message: string;
  setMessage: (message: string) => void;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
  message: "",
  setMessage: (message: string) => set({ message }),
}));
