<template>
    <div style="display: flex;">
        <div style="width: 300px;margin-top: 10px;">
            从 <b>{{initStart}}</b> 到 <b>{{initEnd}}</b> ，总共 <b>{{total}}</b> 条
        </div>
        <div style="flex: 1; margin-top: 10px;">
            <div class="pull-right">
                每页<select v-model="perPageCount" class="form-control input-sm"
                          @change="innerSelectChange()"
                          style="margin-top: 2px;">
                <template v-for="item in pageValues">
                    <option :value="item.value">{{item.value}}</option>
                </template>
            </select>条
                <ul class="pagination pull-right" style="margin: 0px;">
                    <template v-if="currentPage == 1">
                        <li class="paginate_button previous disabled" id="DataTables_Table_0_previous"><a
                                                                                                          aria-controls="DataTables_Table_0"
                                                                                                          data-dt-idx="0"
                                                                                                          tabindex="0">Previous</a></li>
                    </template>
                    <template v-else>
                        <li class="paginate_button previous" id="DataTables_Table_0_previous">
                            <a @click="firstClick()" aria-controls="DataTables_Table_0" data-dt-idx="0"
                                class="waves-effect waves-block waves-blue" tabindex="0">Previous</a></li>
                    </template>
                    <template v-for="item in totalPage">
                        <template v-if="item == currentPage">
                            <li class="paginate_button active"><a aria-controls="DataTables_Table_0"
                                                           :data-dt-idx="item" :tabindex="item">{{item}}</a></li>
                        </template>
                        <template v-else>
                            <li class="paginate_button"><a @click="changePageItem(item)" aria-controls="DataTables_Table_0"
                                                           :data-dt-idx="item" :tabindex="item">{{item}}</a></li>
                        </template>

                    </template>
                   <template v-if="currentPage == totalPage">
                       <li class="paginate_button next disabled" id="DataTables_Table_0_next"><a
                                                                                        aria-controls="DataTables_Table_0"
                                                                                        data-dt-idx="7"
                                                                                        tabindex="0">Next</a></li>
                   </template>
                    <template v-else>
                        <li class="paginate_button next" id="DataTables_Table_0_next"><a @click="lastClick()"
                                                                                         aria-controls="DataTables_Table_0"
                                                                                         data-dt-idx="7"
                                                                                         class="waves-effect waves-block waves-blue"
                                                                                         tabindex="0">Next</a></li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pageValues', 'total'],
        name: "paginate",
        data() {
            return {
                perPageCount: 10,
                currentPage: 1,
                start: 1,
                end: 10
            }
        },
        computed : {
            initStart (){
                return ((this.currentPage - 1) * this.perPageCount) + 1;
            },
            initEnd (){
                let count = (this.currentPage * this.perPageCount);
                return count > this.total ? this.total : count;
            },
            totalPage (){
                return Math.ceil(this.total / this.perPageCount);
            }
        },
        methods: {
            //每页显示的条数发生改变，向外触发事件
            innerSelectChange (){
                if (this.currentPage > this.totalPage) {
                    this.currentPage = 1;
                }
                this.$emit('change-query-info',{'page':this.currentPage,'count':this.perPageCount});
            },
            //页数切换的条数发生改变，向外触发事件
            changePageItem (page){
                this.currentPage = page;
                this.$emit('change-query-info',{'page':this.currentPage,'count':this.perPageCount});
            },
            firstClick (){
                this.currentPage -= 1;
                this.$emit('change-query-info',{'page':this.currentPage,'count':this.perPageCount});
            },
            lastClick (){
                this.currentPage += 1;
                this.$emit('change-query-info',{'page':this.currentPage,'count':this.perPageCount});
            }
        }
    }
</script>

<style scoped>
    .paginate_button a{
        cursor: pointer;
    }
</style>