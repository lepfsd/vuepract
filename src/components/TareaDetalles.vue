<template>
    <div>
        <h1>los detalles:</h1>
        <p> {{ detalles.tituloTarea }} </p>
    </div>
</template>

<script>
//import EventBus from '../EventBus';
import state from '../state';

export default {
    name: 'TareaDetalles',
    data() {
        return {
            detalles: ''
        }
    },
    created() {
        //EventBus.$on('detalles', detalles => this.detalles = detalles);
        this.detalles = state.state
    }
}
</script>

<style scoped>
    div {
        position: fixed;
        width: 500px;
        height: 200px;
        top: 0;
        left: 0;
        padding: 20px;
        background: rgba(255, 255, 255, .7);
        border: 1px solid black;
        
    }
</style>