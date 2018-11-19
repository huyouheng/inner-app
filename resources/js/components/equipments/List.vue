<template>
    <div class="table-responsive">
        <div class="form-inline">
            <div class="dt-buttons">
                <button type="button" class="btn btn-primary btn-xs waves-effect add-btn">
                    <i class="material-icons">add</i>
                    <span>添加</span>
                </button>
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
                <tr role="row" class="even">
                    <td class="sorting_1">Bradley Greer</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>41</td>
                    <td>2012/10/13</td>
                    <td>$132,000</td>
                </tr>
                <tr role="row" class="odd">
                    <td class="sorting_1">Brenden Wagner</td>
                    <td>Software Engineer</td>
                    <td>San Francisco</td>
                    <td>28</td>
                    <td>2011/06/07</td>
                    <td>$206,850</td>
                </tr>
                <tr role="row" class="even">
                    <td class="sorting_1">Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td>$372,000</td>
                </tr>
                <tr role="row" class="odd">
                    <td class="sorting_1">Bruno Nash</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>38</td>
                    <td>2011/05/03</td>
                    <td>$163,500</td>
                </tr>
                <tr role="row" class="even">
                    <td class="sorting_1">Caesar Vance</td>
                    <td>Pre-Sales Support</td>
                    <td>New York</td>
                    <td>21</td>
                    <td>2011/12/12</td>
                    <td>$106,450</td>
                </tr>
                <tr role="row" class="odd">
                    <td class="sorting_1">Cara Stevens</td>
                    <td>Sales Assistant</td>
                    <td>New York</td>
                    <td>46</td>
                    <td>2011/12/06</td>
                    <td>$145,600</td>
                </tr>
                <tr role="row" class="even">
                    <td class="sorting_1">Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td>$433,060</td>
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
        name: "equipmentList",
        data () {
            return {
                pageValues: [
                    {key: 10, value: 10},
                    {key: 20, value: 20},
                    {key: 30, value: 30},
                    {key: 40, value: 40},
                    {key: 50, value: 50}
                ],
                total: 70,
                isQuery: false,
            }
        },
        components: {
            Paginate, DatePicker
        },
        methods: {
            resetQuery() {

            },

            queryChange (e){
                console.log(e)
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