<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    //$emit = digunakan untuk mentrigger event
    export default {
        methods: {
            increment() {
                this.$store.state.counter++
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>