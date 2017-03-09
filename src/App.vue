<template>
    <!--Di Vue JS penulisan component di pisahkan dengan tanda (-) jika nama component hurus besar-->
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <appAnotherResult></appAnotherResult>
                <hr>
                <appCounter></appCounter>
                <br />
                <app-another-counter-mutation></app-another-counter-mutation>
                <br />
                <app-another-counter-mutation-action></app-another-counter-mutation-action>

                <hr>
                <input type="text" :value="value" @input="updateValueOnStore"/>
                <br />
                {{value}}
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounterMutation from './components/AnotherCounterMutation.vue';
    import AnotherCounterMutationAction from './components/AnotherCounterMutationAction.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue'

    export default {
        computed:{
          value:{
              get() {
                  return this.$store.getters.valueGetter
              },
              set(values) {
                  this.$store.dispatch('updateValue', values)
              }
          }
        },

        methods:{
          updateValueOnStore(event) {
              this.$store.dispatch('updateValue', event.target.value)
          }
        },

        components: {
            appCounter: Counter,
            appAnotherCounterMutation: AnotherCounterMutation,
            appAnotherCounterMutationAction: AnotherCounterMutationAction,
            appResult: Result,
            appAnotherResult: AnotherResult,
        }
    }
</script>

