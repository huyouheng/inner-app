<template>
    <div>
        <div id="container"><img class="png" src="/images/404.png"/> <img class="png msg" src="images/404_msg.png"/>
            <p>
                <router-link to="/">
                    <img class="png" src="/images/404_to_index.png"/>
                </router-link>
            </p>
        </div>
        <div id="cloud" class="png"></div>
    </div>
</template>

<script>
    export default {
        name: "not-found",
        mounted(){
            console.info('****************\n\n');
            console.group("404");
            console.groupCollapsed('%c 呀,404被你发现啦! ', 'background: #222; color: #bada55;font-size:20px;','话说,你对浏览器做啦啥？？');
            console.log('');
            console.log('');
            console.groupEnd();
            console.info('\n\n****************');
        }
    }
</script>

<style scoped>
    body {
        background: url("/images/error_bg.jpg") repeat-x scroll 0 0 #67ACE4;
    }
    #container {
        margin: 0 auto;
        padding-top: 50px;
        text-align: center;
        width: 560px;
    }
    #container img {
        border: medium none;
        margin-bottom: 50px;
    }
    #container .error {
        height: 200px;
        position: relative;
    }
    #container .error img {
        bottom: -50px;
        position: absolute;
        right: -50px;
    }
    #container .msg {
        margin-bottom: 65px;
    }
    #cloud {
        background: url("/images/error_cloud.png") repeat-x scroll 0 0 transparent;
        bottom: 0;
        height: 170px;
        position: absolute;
        width: 100%;
    }
</style>