<template>
    <custom-panel page-name="员工详情" sub-name="员工详情中包含部门">
        <ul class="nav nav-tabs tab-nav-right" role="tablist" style="margin-top: -20px;">
            <li role="presentation" class="active">
                <a href="#home_only_icon_title" data-toggle="tab">
                    <i class="material-icons">face</i>员工
                </a>
            </li>
            <li role="presentation">
                <a href="#profile_only_icon_title" data-toggle="tab">
                    <i class="material-icons">assignment_ind</i>部门
                </a>
            </li>

        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="home_only_icon_title">
                <user-list></user-list>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="profile_only_icon_title">
                <bu-men></bu-men>
            </div>

        </div>
    </custom-panel>
</template>

<script>
    import CustomPanel from '../components/CustomPanel';
    import UserList from '../components/users/List';
    import BuMen from '../components/users/BuMen';

    export default {
        name: "bumen",
        components: {
            CustomPanel, UserList, BuMen
        }
    }
</script>

<style scoped>

</style>