<template>
    <p>Counter is: {{ counterResult }}</p>
</template>

<script>
    export default {
        computed:{
            counterResult(){
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>