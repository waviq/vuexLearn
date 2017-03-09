<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment Mutation</button>
        <button class="btn btn-primary" @click="decrement">Decrement Mutation</button>
    </div>
</template>

<script>
    //$emit = digunakan untuk mentrigger event
    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])

        }
    }
</script>