<template>
    <div class="home">

        <img alt="Vue logo" src="../../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <router-view></router-view>
        <p>{{$store.state.index.data}}</p>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        created() {
            this.$router.push('/Home/children')
        },
        mounted() {
        }

    }
</script>
