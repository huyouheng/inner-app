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
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script>
    import TopMenu from './components/common/TopMenu';
    import LeftAside from './components/common/LeftAside';
    import RightAside from './components/common/RightAside';

    export default {
        name: "main-content",
        data (){
            return {
                oneLevelTag: '',//一级菜单标志
            }
        },
        components: {
            TopMenu, LeftAside, RightAside
        },
        created(){

        },
        mounted() {
            let name = this.$router.currentRoute.name.split('-');
            this.oneLevelTag = name[0];
            if (name.length === 2) { //表示存在二级菜单，其实最好的是用for循环去做，这里偷懒
                $('#tab-'+ name[0]+'-'+ name[1]).addClass('active');
                if (name[1] !== 'index') {
                    $('#tab-'+ name[0]+'-index').removeClass('active');
                }
            }
            $('#menu-'+ name[0]).addClass('active'); //设置父级菜单

            $('body').removeClass('login-page');
            $('body').removeClass('ls-closed');
            try{
                $.AdminBSB.browser.activate();
                $.AdminBSB.leftSideBar.activate();
                $.AdminBSB.rightSideBar.activate();
                $.AdminBSB.navbar.activate();
                $.AdminBSB.dropdownMenu.activate();
                $.AdminBSB.input.activate();
                $.AdminBSB.select.activate();
                $.AdminBSB.search.activate();
            } catch (e){
                console.log('%c 组件内部错误...','font-size:20px;background:#eee');
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