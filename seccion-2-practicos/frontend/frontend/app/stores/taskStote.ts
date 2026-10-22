import { defineStore } from 'pinia';
import { useApi } from '../composables/useApi';


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        page: 1,
        totalPages: 1,
        loading: false
    }),
    actions: {
        async fetchTasks(page = 1) {
            this.loading = true;
            const { fetchWithAuth } = useApi();
            try {
                const res: any = await fetchWithAuth(`/tasks?page=${page}&limit=5`);
                this.tasks = res.tasks;
                this.page = res.page;
                this.totalPages = res.totalPages;
            } catch (err) {
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        async addTask(formData: FormData) {
            const { fetchWithAuth } = useApi();
            await fetchWithAuth('/tasks', { method: 'POST', body: formData });
            await this.fetchTasks(this.page);
        },
        async toggleTask(id: string, completado: boolean) {
            const { fetchWithAuth } = useApi();
            await fetchWithAuth(`/tasks/${id}`, {
                method: 'PUT',
                body: { completado }
            });
            await this.fetchTasks(this.page);
        },
        async deleteTask(id: string) {
            const { fetchWithAuth } = useApi();
            await fetchWithAuth(`/tasks/${id}`, { method: 'DELETE' });
            await this.fetchTasks(this.page);
        }
    }
});