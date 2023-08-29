import { create } from "zustand";
import axios from "axios";
const URL = "aquì va la Api";
export const useUser = create((set) => ({
    loading: false,
    data: null,
    error: null,
    sucess: false,
    login: async (body) => {
        set({ loading: true, data: null, error: null });
        try {
            const response = await axios.post(`${URL}`, body);
            set({ loading: false, data: response.data, sucess: true });
        } catch (error) {
            console.log(error);
            set({ loading: false, error: error.message, sucess: false });
        }
    },
    register: async (body) => {
        set({ loading: true, data: null, error: null });
        try {
            const response = await axios.post(`${URL}`, body);
            set({ loading: false, data: response.data, sucess: true });
        } catch (error) {
            console.log(error);
            set({ loading: false, error: error.message, sucess: false });
        }
    },
}));
