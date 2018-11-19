<template>
    <custom-panel page-name="员工详情" sub-name="员工详情中包含部门">
        <ul class="nav nav-tabs tab-nav-right" role="tablist" style="margin-top: -20px;">
            <li id="tab-users-index" class="active waves-effect">
                <router-link :to="{name: 'users-index'}">
                    <i class="material-icons">face</i>员工
                </router-link>
            </li>
            <li id="tab-users-buMen" class="waves-effect">
                <router-link :to="{name: 'users-buMen'}">
                    <i class="material-icons">assignment_ind</i>部门
                </router-link>
            </li>

        </ul>
        <div class="tab-content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </custom-panel>
</template>

<script>
    import CustomPanel from '../components/CustomPanel';

    export default {
        name: "users",
        data (){
            return {
                menuLevel: 2, //当前菜单的级别
            }
        },
        mounted (){

        },
        computed :{

        },
        components: {
            CustomPanel
        },
    }
</script>

<style scoped>

</style>