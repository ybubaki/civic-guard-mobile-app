import { create } from 'zustand';

interface AuthState {
    token: string | null;
    setToken: (token: string | null) => void;
    user: any;
    setUser: (user: any) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    setToken: (token: string | null) => set({token}),
    user: null,
    setUser: (user: any) => set({user}),
    logout: () => set({token: null, user: null}),
}))
