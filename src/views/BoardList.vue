<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/httpService';

const state = reactive({
    list: []
});

onMounted(async () => {
    const result = await httpService.findAll();
    state.list = result;
})
</script>

<template>
<h3>게시판 리스트</h3>
<table>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성일</th>
    </tr>
    <tr v-for="item in state.list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.createdAt }}</td>
    </tr>
</table>
</template>

<style scoped>
table { border-collapse: collapse; }
table, th, td { border: 1px solid #ccc; }
th, td { padding: 10px; }
</style>