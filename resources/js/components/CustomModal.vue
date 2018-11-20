<template>
    <modal :name="name" :clickToClose="false" :draggable="draggable" :height="height" :width="width">
        <div class="panel panel-default">
            <div class="panel-heading text-center" style="position: relative;">
                <span>添加</span> <i class="material-icons waves-effect waves-block"
                                   style="position: absolute;top: 8px;right: 5px;color:#9e9292;" @click="closeModel()">close</i>
            </div>
            <div class="panel-body">
                <slot></slot>
            </div>
            <div class="panel-footer text-center" style="background: #fff;margin-bottom: -20px;">
                <button type="button" class="btn btn-default btn-sm waves-effect clearfix" style="margin-right: 20px;" @click="closeModel()">取消</button>
                <button type="button" class="btn btn-success btn-sm waves-effect clearfix" @click="createBtn()">创建</button>
            </div>
        </div>
    </modal>
</template>

<script>
    export default {
        name: "custom-modal",
        props: {
            name: '',
            width: {
                type: [String, Number],
                default: 600
            },
            height: {
                type: [String, Number],
                default: 300
            },
            draggable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeModel (){
                this.$modal.hide(this.name);
            },
            createBtn() {
                this.$emit('create-btn')
            }
        }
    }
</script>

<style scoped>

</style>