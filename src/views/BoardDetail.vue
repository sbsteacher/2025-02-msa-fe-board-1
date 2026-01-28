<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import httpService from '@/services/httpService';

const route = useRoute();
const state = reactive({
    data: {
        id: 0,
        title: '',
        contents: '',
        createdAt: ''
    }
});

onMounted(async () => {
    console.log('route.params.id: ', route.params.id);
    const id = route.params.id;
    state.data = await httpService.findById(id);
    //findById 통신하고 결과를 state.data에 담아주세요.
})
</script>

<template>
<h3>Detail</h3>
<div>번호: {{ state.data.id }}</div>
<div>제목: {{ state.data.title }}</div>
<div>작성일: {{ state.data.createdAt }}</div>
<div>내용: {{ state.data.contents }}</div>
</template>

<style scoped>

</style>