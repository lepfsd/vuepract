<template>
    <div>
        <h4>esto es un post con id: {{this.$route.params.id}} </h4>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
    }
}
</script>