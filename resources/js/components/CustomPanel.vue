<template>
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header" style="padding: 20px 10px 10px 15px;">
                    <h2 style="font-size: 20px;">
                        {{ pageName }}
                        <small>{{ getSubTitle }} .</small>
                    </h2>
                    <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons waves-effect waves-block">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">refresh</i>刷新</a></li>
                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "panel-header",
        props: ['pageName', 'subName'],
        data (){
            return {
                PageName: ''
            }
        },
        computed : {
            getSubTitle (){
                return this.subName;
            }
        }
    }
</script>

<style scoped>

</style>