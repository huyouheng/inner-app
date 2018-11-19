<template>
    <div>
        //header
        <top-menu></top-menu>
        <section>
            //left aside
            <left-aside></left-aside>
            //right aside
            <right-aside></right-aside>
        </section>

        <section class="content">
            <template v-if="invalidRoute">
                404
            </template>
            <template v-else>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </template>
        </section>
    </div>
</template>

<script>
    import TopMenu from './components/common/TopMenu';
    import LeftAside from './components/common/LeftAside';
    import RightAside from './components/common/RightAside';
    export default {
        name: "app",
        data (){
            return {
                oneLevelTag: '',//一级菜单标志
            }
        },
        mounted(){
            try {

                let name = this.$router.currentRoute.name.split('-');
                this.oneLevelTag = name[0];
                if (name.length === 2) { //表示存在二级菜单，其实最好的是用for循环去做，这里偷懒
                    $('#tab-'+ name[0]+'-'+ name[1]).addClass('active');
                }
                $('#menu-'+ name[0]).addClass('active'); //设置父级菜单
            } catch (e){
                console.info('****************\n\n');
                console.group("404");
                console.groupCollapsed('%c 呀,404被你发现啦! ', 'background: #222; color: #bada55;font-size:20px;','话说,你对浏览器做啦啥？？');
                console.log('');
                console.log('');
                console.groupEnd();
                console.info('\n\n****************');
            }
        },
        components: {
            TopMenu, LeftAside, RightAside
        },
        computed:{
            invalidRoute () {
                return !this.$route.matched || this.$route.matched.length === 0;
            }
        },
        watch :{
            '$route' (to, from) {
                let _to = to.name.split('-');
                let _from = from.name.split('-');

                let level = this.$router.currentRoute.meta.level;
                //表示设置二级菜单active
                this.oneLevelTag = _to[0];

                if (_to.length === level && _from.length === level) {
                    $('#tab-'+ _to[level -2]+'-'+ _to[level -1]).addClass('active');
                    $('#tab-'+ _from[level -2]+'-'+ _from[level -1]).removeClass('active');
                }

                $('#menu-'+ _to[0]).addClass('active'); //设置父级菜单

                if (_from[0] !== this.oneLevelTag) {
                    $('#menu-'+ _from[0]).removeClass('active'); //移除父级菜单
                }
            }
        }
    }
</script>

<style scoped>

</style>