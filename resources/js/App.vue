<template>
    <div v-if="invalidRoute">
        <not-found></not-found>
    </div>
    <div v-else>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import NotFound from './components/common/404';
    import jwtToken from './utils/jwt';
    export default {
        name: "app",
        created(){
            if (jwtToken.getToken()) {
                this.$store.dispatch('setAuthUser');
            } else {
                this.$router.push({name: 'login'});
            }

        },
        computed: {
            invalidRoute () {
                return !this.$route.matched || this.$route.matched.length === 0;
            }
        },
        components:{
            NotFound
        }
    }
</script>

<style scoped>

</style>