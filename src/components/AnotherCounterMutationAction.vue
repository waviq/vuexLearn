<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment Mutation Action</button>
        <button class="btn btn-primary" @click="decrement">Decrement Mutation Action</button>
    </div>
</template>

<script>
    //$emit = digunakan untuk mentrigger event
    import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])


        }
    }
</script>