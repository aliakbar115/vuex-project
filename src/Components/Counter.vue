<template>
  <div>
    <a class="btn btn-success" @click="asyncIncrement({time:50,duration:1500})">Increase</a>
    <a class="btn btn-success" @click="asyncDecrement({time:100,duration:2000})">Decrease</a>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {

  data() {
    return {

    };
  },


  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])


    // Increase(){
    //   //this.$emit('updated', +1);
    //   this.$store.state.counter++;  //  یک عدد زیاد کردیم store متغییر را در
    // },
    // Decrease(){

    //   //this.$emit('updated', -1)
    //   this.$store.state.counter--;
    // }
  },
};
</script>





