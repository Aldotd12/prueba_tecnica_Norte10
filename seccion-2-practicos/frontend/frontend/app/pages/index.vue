<template>
  <NuxtLayout>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-3">Nueva Tarea</h5>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label class="form-label">Título</label>
                <input 
                  v-model="state.titulo" 
                  type="text" 
                  class="form-control" 
                  :class="{ 'is-invalid': v$.titulo.$error }" 
                />
                <div v-if="v$.titulo.$error" class="invalid-feedback">El título es requerido.</div>
              </div>

              <div class="mb-3">
                <label class="form-label">Descripción</label>
                <textarea v-model="state.descripcion" class="form-control" rows="2"></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">Archivo Adjunto (Opcional)</label>
                <input type="file" ref="fileInput" class="form-control" />
              </div>

              <button type="submit" class="btn btn-primary w-100">Guardar Tarea</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-3">Lista de Tareas</h5>
            
            <div v-if="store.loading" class="text-center py-4">
              <div class="spinner-border text-primary" role="status"></div>
            </div>

            <ul v-else class="list-group list-group-flush">
              <li 
                v-for="task in store.tasks" 
                :key="task._id" 
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
              >
                <div>
                  <input 
                    type="checkbox" 
                    class="form-check-input me-2" 
                    :checked="task.completado" 
                    @change="store.toggleTask(task._id, !task.completado)"
                  />
                  <span :class="{ 'text-decoration-line-through text-muted': task.completado }">
                    <strong>{{ task.titulo }}</strong>
                  </span>
                  <p class="text-muted small mb-0">{{ task.descripcion }}</p>
                  <a v-if="task.adjunto" :href="`http://localhost:3000/uploads/${task.adjunto}`" target="_blank" class="badge bg-info text-decoration-none mt-1">Ver Adjunto 📎</a>
                </div>

                <button class="btn btn-sm btn-outline-danger mt-2 mt-sm-0" @click="confirmDelete(task._id)">Eliminar</button>
              </li>
            </ul>

            <nav v-if="store.totalPages > 1" class="mt-4">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: store.page === 1 }">
                  <button class="page-link" @click="store.fetchTasks(store.page - 1)">Anterior</button>
                </li>
                <li class="page-item disabled">
                  <span class="page-link">{{ store.page }} / {{ store.totalPages }}</span>
                </li>
                <li class="page-item" :class="{ disabled: store.page === store.totalPages }">
                  <button class="page-link" @click="store.fetchTasks(store.page + 1)">Siguiente</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useTaskStore } from '../stores/taskStote';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import Swal from 'sweetalert2';

const store = useTaskStore();
const fileInput = ref(null);

const state = reactive({
  titulo: '',
  descripcion: ''
});

const rules = {
  titulo: { required }
};

const v$ = useVuelidate(rules, state);

onMounted(() => {
  store.fetchTasks();
});

const handleSubmit = async () => {
  const isCorrect = await v$.value.$validate();
  if (!isCorrect) return;

  const formData = new FormData();
  formData.append('titulo', state.titulo);
  formData.append('descripcion', state.descripcion);
  
  if (fileInput.value && fileInput.value.files[0]) {
    formData.append('adjunto', fileInput.value.files[0]);
  }

  await store.addTask(formData);
  
  Swal.fire({
    title: '¡Éxito!',
    text: 'Tarea agregada correctamente',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });

  state.titulo = '';
  state.descripcion = '';
  if (fileInput.value) fileInput.value.value = '';
  v$.value.$reset();
};

const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await store.deleteTask(id);
      Swal.fire('Eliminada', 'La tarea ha sido eliminada.', 'success');
    }
  });
};
</script>