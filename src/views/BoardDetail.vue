<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    console.log('route.params.id: ', route.params.id);
})
</script>

<template>
<h3>Detail</h3>
</template>

<style scoped>

</style>