<template>
    <div>
        <div class="workspace">
            <h3>Work space</h3>
        </div>
        <ul>
            <li><router-link to="/test">읽지 않은 모든 항목</router-link></li>
            <li><router-link to="/">멘션 및 반응</router-link></li>
            <li>채널
                <ul>
                    <li>ㅇㄹㄴㅇㄹ</li>
                    <li>dfs</li>
                    <li>sdf</li>
                    <li>sdf</li>
                    <li>asdf</li>
                </ul>
            </li>
        </ul>
        <ul>
            <li>다이렉트 메시지
                <ul>
                    <li>ㅇㄹㄴㅇㄹ</li>
                    <li>dfs</li>
                    <li>sdf</li>
                    <li>sdf</li>
                    <li>asdf</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.workspace{
    height: 3%;
    border-bottom : 1px solid rgb(82,38,83);
    text-align: center;
    align-items : center;
}
h3{
    color: white ;
}

ul>li{
    color:rgb(188,171,188)
}
</style>