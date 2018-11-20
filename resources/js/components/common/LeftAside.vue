<template>
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info" id="leftUserInfo">
            <div class="image">
                <img src="/images/user.png" width="48" height="48" alt="User"/>
            </div>
            <div class="info-container">
                <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                <div class="email">john.doe@example.com</div>
                <div class="btn-group user-helper-dropdown">
                    <i class="material-icons waves-effect waves-block" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="true">keyboard_arrow_down</i>
                    <ul class="dropdown-menu pull-right">
                        <li>
                            <router-link :to="{name: 'profile',params: {id:1}}">
                                <i class="material-icons">person</i>个人中心
                            </router-link>
                        </li>
                        <li role="seperator" class="divider"></li>
                        <li><a href="javascript:void(0);" id="showPersonInfoToRight"><i
                                class="material-icons">repeat</i>右侧显示</a></li>
                        <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">input</i>Sign
                            Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
            <ul class="list">
                <li class="header">MAIN NAVIGATION</li>
                <li class="waves-effect waves-block" id="menu-home">
                    <router-link to="/">
                        <i class="material-icons">home</i>
                        <span>Home</span>
                    </router-link>
                </li>
                <li class="waves-effect waves-block" id="menu-users">
                    <router-link to="/users">
                        <i class="material-icons">person</i>
                        <span>员工</span>
                    </router-link>
                </li>
                <li class="waves-effect waves-block" id="menu-equipments">
                    <router-link to="/equipments">
                        <i class="material-icons">speaker_group</i>
                        <span>设备</span>
                    </router-link>
                </li>
                <li class="active"></li>
            </ul>
        </div>
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <div class="copyright">
                &copy; 2016 - 2017 <a href="javascript:void(0);">ADMIN - MATERIAL DESIGN</a>.
            </div>
            <div class="version">
                <b>Version: </b> 1.0.5
            </div>
        </div>
        <!-- #Footer -->
    </aside>
</template>

<script>
    export default {
        name: "left-aside",
        data() {
            return {
                MenuLevel: 1, //当前菜单的级别
            }
        },
        mounted() {
            // let tab = this.$router.currentRoute.name.split('-');
            // $('#menu-'+tab[this.MenuLevel -1 ]).addClass('active');
        },

    }
</script>

<style scoped>
    .sidebar .user-info {
        -webkit-background-size: 100%;
        background-size: 100%;
    }
</style>