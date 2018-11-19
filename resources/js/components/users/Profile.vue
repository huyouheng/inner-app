<template>
   <custom-panel page-name="个人中心" :sub-name="username">
        <div class="profile-bg">
            120
        </div>
   </custom-panel>
</template>

<script>
    import CustomPanel from '../CustomPanel';
    export default {
        name: "profile",
        data (){
            return {
                username: '胡有恒'
            }
        },
        components: {
            CustomPanel
        }
    }
</script>

<style scoped>
    .profile-bg {
        width: 100%;
        height: 320px;
        background: url('/images/user-img-background.jpg');
        background-size: 100% 100%;
    }
</style>