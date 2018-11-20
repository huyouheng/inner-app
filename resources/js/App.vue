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

    export default {
        name: "app",
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