<template>
    <article>
        <h2>suscribete a mi lista de correo</h2>
        <form>
            <input type="text" placeholder="correo">
            <input type="submit" value="suscribirse">
        </form>
    </article>
</template>

<style scoped>

    article {
        border: 1px solid gray;
    }

    form {
        padding: 20px;
    }

    input {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
    }

    h2 {
        margin-bottom: 0;
    }

    article * {
        box-sizing: border-box;
    }
</style>