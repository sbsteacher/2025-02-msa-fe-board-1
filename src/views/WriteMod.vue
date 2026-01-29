<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import httpService from '@/services/httpService';

//Path Variable 값 가져올 때 
const route = useRoute();
//주소 이동할 때 
const router = useRouter();

const state = reactive({
    mode: '등록',
    board: {
        id: 0,
        title: '',
        contents: ''
    }
});

//전송
const submit = async () => {
    //제목이 입력되어 있지 않으면 "제목을 입력해 주세요!" alert
    //내용이 입력되어 있지 않으면 "내용을 입력해 주세요!" alert
    //alert가 뜨면 메소드 종료!
    if(!state.board.title) {
        alert('제목을 입력해 주세요!');
        return;
    } else if(!state.board.contents) {
        alert('내용을 입력해 주세요!');
        return;
    }

    const result = await (state.board.id ? httpService.update(state.board) : httpService.save(state.board));
    if(!result) {
        alert(`글 ${state.mode}에 실패하였습니다.`);
        return;
    }
    const path = state.board.id ? `/detail/${state.board.id}` : '/';
    router.push(path)
    
}

onMounted(async () => {
    if(route.params.id) {
        state.mode = '수정';
        const id = route.params.id;
        state.board = await httpService.findById(id);
    }
});

</script>

<template>
<h3>글 {{state.mode}}</h3>
<div>
    <label>제목: <input type="text" v-model="state.board.title"></label>
</div>
<div>
    <label>내용: <textarea v-model="state.board.contents"></textarea></label>
</div>
<div>
    <button @click="submit">저장</button>
</div>
</template>

<style scoped>

</style>