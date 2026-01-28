<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();

const state = reactive({
    list: []
});

onMounted(async () => {
    const result = await httpService.findAll();
    state.list = result;
});

const moveToDetail = id => {
    //router와 id를 이용하여 주소 이동~~~~
    console.log('moveToDetail - id: ', id);
    router.push({
        path: `/detail/${id}`
    });
}
</script>

<template>
<h3>게시판 리스트</h3>
<table>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성일</th>
    </tr>
    
    <tr v-for="item in state.list" :key="item.id" @click="moveToDetail(item.id)">        
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

td { cursor: pointer;  }
tr:hover { background-color: aliceblue; }
tr:first-child { background-color: gray; }

</style>