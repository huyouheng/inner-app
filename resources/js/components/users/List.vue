<template>
    <div class="table-responsive">
        <div class="form-inline">
            <div class="dt-buttons">
                <router-link :to="{name: 'users-create'}">
                    <button type="button" class="btn btn-primary btn-xs waves-effect add-btn">
                        <i class="material-icons">add</i>
                        <span>添加</span>
                    </button>
                </router-link>
                <span>
                部门<select v-model="query.buMen" id="" class="form-control input-sm" @change="queryBuMen">
                    <template v-for="item in buMens">
                        <option :value="item.id">{{item.value}}</option>
                    </template>
                </select>
                </span>
                <span>
                    性别 <select v-model="query.sex" class="form-control input-sm" @change="querySex()">
                    <template v-for="item in sexs">
                        <option :value="item.id">{{item.value}}</option>
                    </template>
                </select>
                </span>
                <span>
                    入职时间<date-picker v-model="query.date" format="YYYY-MM" @input="queryDate()"></date-picker>
                </span>
                <span style="display: inline-block;clear: both;" v-if="isQuery">
                    <button type="button" class="btn btn-xs btn-default waves-effect waves-block" @click="resetQuery()">
                        <i class="material-icons">close</i><span>重置</span>
                    </button>
                </span>

            </div>

            <table class="table table-bordered table-striped table-hover dataTable js-exportable"
                   id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                <thead>
                <tr role="row">
                    <th rowspan="1" colspan="1" style="width: 56px;">Name</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                        aria-label="Position: activate to sort column ascending" style="width: 240px;">Position
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                        aria-label="Office: activate to sort column ascending" style="width: 105px;">Office
                    </th>
                    <th rowspan="1" colspan="1" style="width: 47px;">Age
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                        aria-label="Start date: activate to sort column ascending" style="width: 99px;">Start date
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                        aria-label="Salary: activate to sort column ascending" style="width: 81px;">Salary
                    </th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th rowspan="1" colspan="1">Name</th>
                    <th rowspan="1" colspan="1">Position</th>
                    <th rowspan="1" colspan="1">Office</th>
                    <th rowspan="1" colspan="1">Age</th>
                    <th rowspan="1" colspan="1">Start date</th>
                    <th rowspan="1" colspan="1">Salary</th>
                </tr>
                </tfoot>
                <tbody>


                <tr role="row" class="odd">
                    <td class="sorting_1">Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                </tr>
                <tr role="row" class="even">
                    <td class="sorting_1">Angelica Ramos</td>
                    <td>Chief Executive Officer (CEO)</td>
                    <td>London</td>
                    <td>47</td>
                    <td>2009/10/09</td>
                    <td>$1,200,000</td>
                </tr>
                <tr role="row" class="odd">
                    <td class="sorting_1">Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                </tr>
                </tbody>
            </table>

            <paginate :page-values="pageValues" :total="total"
                      v-on:change-query-info="queryChange"></paginate>
        </div>
    </div>
</template>

<script>
    import Paginate from '../Paginate';
    import DatePicker from 'vue-datepicker-local';

    export default {
        name: "userList",
        data() {
            return {
                pageValues: [
                    {key: 10, value: 10},
                    {key: 20, value: 20},
                    {key: 30, value: 30},
                    {key: 40, value: 40},
                    {key: 50, value: 50}
                ],
                total: 70,
                buMens: [
                    {id: 1, value: '全部'},
                    {id: 2, value: 'A'},
                    {id: 3, value: 'B'},
                    {id: 4, value: 'C'},
                ],
                sexs: [
                    {id: 0, value: '男'},
                    {id: 1, value: '女'}
                ],
                isQuery: false,
                query: {
                    date: '',
                    buMen: 1,
                    sex: ''
                }

            }
        },
        mounted() {

        },
        components: {
            Paginate, DatePicker
        },
        methods: {
            queryChange(perCount) {
                console.log(perCount)
            },

            queryBuMen() {
                this.isQuery = true;
                console.log(1)
            },
            querySex() {
                this.isQuery = true;
                console.log(2)
            },
            queryDate() {
                this.isQuery = true;
                console.log(3)
            },
            resetQuery() {
                this.isQuery = false;
                this.query.date = '';
                this.query.buMen = 1;
                this.query.sex = '';
            }
        }
    }
</script>

<style scoped>
    .dt-buttons {
        margin-left: 10px;
        margin-bottom: 10px;
    }

    .dt-buttons span {
        margin-right: 10px;
    }

    .add-btn {
        margin-left: -10px;
        margin-right: 20px;
    }
</style>