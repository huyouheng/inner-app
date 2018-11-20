<template>
    <custom-panel page-name="设备" sub-name="包含设备类型">
        <ul class="nav nav-tabs tab-nav-right" role="tablist" style="margin-top: -20px;">
            <li role="presentation" id="tab-equipments-index" class="active waves-effect">
                    <router-link :to="{name: 'equipments-index'}">
                        <i class="material-icons">speaker_group</i>设备
                    </router-link>
            </li>
            <li role="presentation" id="tab-equipments-type" class="waves-effect">
                    <router-link :to="{name: 'equipments-type'}">
                        <i class="material-icons">developer_board</i>类型
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
    import List from '../components/equipments/List';

    export default {
        name: "equipments",
        data () {
            return {
            }
        },
        mounted (){

        },
        components: {
            CustomPanel,List
        },
    }
</script>

<style scoped>

</style>