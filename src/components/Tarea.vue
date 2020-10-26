<template>
    <div>
        <h3> 
            {{ titulo }} 
            <button @click="mostrarDetalles(titulo)">eliminar</button>
        </h3>
    </div>
</template>

<script>
//import EventBus from '../EventBus';
import state from '../state';

export default {
    name: 'Tarea',
    props: ['titulo'],
    methods: {
        mostrarDetalles(titulo) {
            //EventBus.$emit('detalles', titulo);
            state.guardarTarea(titulo);
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        color: $corporativo;
    }
    button {
        background-color: $alternativo;
    }
</style>