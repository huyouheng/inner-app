<template>
    <div class="table-responsive">
        <div class="form-inline">
            <div class="dt-buttons">
                <button type="button" class="btn btn-primary btn-xs waves-effect add-btn" @click="addBuMen()">
                    <i class="material-icons">add</i>
                    <span>添加</span>
                </button>
            </div>
            <table class="table table-bordered table-striped table-hover">
                <thead>
                <tr role="row">
                    <th rowspan="1" colspan="1" style="width: 56px;">名称</th>
                    <th rowspan="1" colspan="1" style="width: 56px;">负责人</th>
                    <th rowspan="1" colspan="1" style="width: 56px;">创建时间</th>
                    <th rowspan="1" colspan="1" style="width: 56px;">员工数量</th>
                    <th rowspan="1" colspan="1" style="width: 56px;">操作</th>
                </tr>
                </thead>
                <tfoot>

                </tfoot>
                <tbody>
                <tr>
                    <td>研发部</td>
                    <td>孙华</td>
                    <td>2016-10-10</td>
                    <td>10</td>
                    <td colspan="1" style="width: 100px;">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-xs btn-info waves-effect" data-toggle="tooltip" data-placement="top" title="" data-original-title="编辑">
                                <i class="material-icons">mode_edit</i>
                            </button>
                            <button type="button" class="btn btn-xs btn-danger waves-effect" data-toggle="tooltip"  data-placement="top" title="" data-original-title="删除">
                                <i class="material-icons">delete</i></button>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
        <custom-modal name="createBuMen" :draggable="true" height="auto">
            <div class="form-line" style="display: flex;">
                <label class="form-label" style="display: inline-block; width: 80px;line-height: 40px;">部门名称:</label>
                <input type="text" v-model="create.c_name" class="form-control" style="flex: 1;">
            </div>
            <div class="form-line" style="display: flex;">
                <label class="form-label" style="display: inline-block; width: 80px;line-height: 40px;">负责人:</label>
                <input type="text" v-model="create.c_leader" class="form-control" style="flex: 1;">
            </div>
            <div class="form-line" style="display: flex;">
                <label class="form-label" style="display: inline-block; width: 80px;line-height: 40px;">创建时间:</label>
                <date-picker v-model="create.c_date"></date-picker>
            </div>

        </custom-modal>
    </div>
</template>

<script>
    import CustomModal from '../CustomModal';
    import DatePicker from 'vue-datepicker-local';
    export default {
        name: "bu-men",
        data (){
            return {
                create: {
                    c_date: '',
                    c_name: '',
                    c_leader: ''
                }
            }
        },
        components: {
            CustomModal, DatePicker
        },
        methods: {
            addBuMen (){
                this.$modal.show('createBuMen');
            }
        }
    }
</script>

<style scoped>
    .dt-buttons {
        margin-top: 5px;
        margin-left: 10px;
        margin-bottom: 12px;
    }

    .dt-buttons span {
        margin-right: 10px;
    }
    .add-btn {
        margin-left: -10px;
        margin-right: 20px;
    }

</style>