<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    @import '/assets/css/style.less';
    @import "assets/css/detailShow.less";
    @import "assets/css/editorInput.less";
    @import "assets/css/searchInput.less";
    @import '/assets/font/iconfont/iconfont.css';
    @import "assets/css/popUpOne.less";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
</style>
