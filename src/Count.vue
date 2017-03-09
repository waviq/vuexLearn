<template>
    <div class="container">
        <h2>CountWith Vuex </h2>
        <p>{{count}}</p>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                count: 0
            }
        },
        methods:{
            increment(){
                this.count++
            },
            decrement(){
                this.count--
            }
        }
    }
</script>