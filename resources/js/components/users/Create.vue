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
                发送邮件通知 :
            </div>
            <div class="custom-input" style="line-height: 30px;">
                <toggle-button
                        v-model="create.isSendEmail"
                        :value="true"
                        :labels="{checked: '是', unchecked: '否'}"></toggle-button>
            </div>
        </div>
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
                    isSendEmail: ''
                },
            }
        },

        methods: {
            addUser(){
                if (this.create.username === '') {

                }

                iziToast.error({title: '提示',position: 'topCenter',theme: 'light',message: '用户名和邮箱不能为空...'});
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