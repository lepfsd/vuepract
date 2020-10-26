const { defer } = require("lodash");

export default {

    //estado
    state: {
        tituloTarea: ''
    },

    //mutacion
    guardarTarea(titulo) {
        this.state.tituloTarea = titulo;
    }
}