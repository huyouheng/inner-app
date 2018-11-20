<template>
    <div>
        <div class="tip">
            <span>添加员工</span>
            <router-link :to="{name: 'users-index'}">
                <button class="btn btn-xs btn-info waves-effect pull-right">返回</button>
            </router-link>
        </div>
        <hr>
        <div class="custom-input-group">
            <div class="custom-label">
                用户名 :
            </div>
            <div class="custom-input">
                <input type="text" class="form-control" v-model="create.username">
            </div>
        </div>

        <div class="custom-input-group">
            <div class="custom-label">
                邮箱 :
            </div>
            <div class="custom-input">
                <input type="text" class="form-control" v-model="create.email">
            </div>
        </div>
        <div class="custom-input-group">
            <div class="custom-label">
                密码 :
            </div>
            <div class="custom-input">
                <input type="text" class="form-control" v-model="create.password" placeholder="密码默认是邮箱">
            </div>
        </div>
        <div class="custom-input-group">
            <div class="custom-label">
                发送邮件通知 :
            </div>
            <div class="custom-input" style="line-height: 30px;">
                <toggle-button
                        v-model="create.isSendEmail"
                        :value="true"
                        :labels="{checked: '是', unchecked: '否'}"></toggle-button>
            </div>
        </div>

        <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink">

        <div style="margin-top: 20px;text-align: center;clear: both;">
            <button @click="addUser()" class="btn btn-success btn-sm waves-effect">添加</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "create",
        data() {
            return {
                create: {
                    username: '',
                    email: '',
                    isSendEmail: '',
                    password: ''
                },
            }
        },

        methods: {
            addUser(){

                if (this.create.username === '' ) {
                   return $.custrom.msg('error','用户名不能为空...');
                }
                if (this.create.email === '' ) {
                    return $.custrom.msg('error','用户邮箱不能为空...');
                }
                let password = this.create.password;
                if (this.create.password === '') {
                    password = this.create.email;
                }

                let formData = {
                    name: this.create.username,
                    email: this.create.email,
                    password: password,
                };

                const _this = this;

                axios.post('/api/register',formData).then((response)=>{
                    let data = response.data;

                    if (data.status) {
                        $.custrom.msg('success', data.message);
                        _this.$router.push({name: 'users-index', query:{refresh: true}})
                    } else {
                        console.log(222222)
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .tip {
        font-size: 14px;
        font-weight: 550;
    }
    .custom-input-group{
        display: flex;
        border-bottom: 1px solid #fbf4f4;
        padding-bottom: 4px;
        margin-bottom: 5px;
    }
    .form-control{
        max-width: 600px;
    }
    .custom-label{
        width: 100px;
        line-height: 30px;
        text-align: center;
    }
    .custom-input{
        flex: 1;
    }
    .v-switch-core{
        margin-top: 3px;
    }

</style>