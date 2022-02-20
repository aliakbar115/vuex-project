<template>
  <div>
    <h3>Counter is : {{ doubleCounter }}</h3>
    <h3>string is : {{ stringCounter }}</h3>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  //props: ["counter"]
  // computed: {
  //   doubleCounter() {
  //    return this.$store.getters.doubleCounter;   // getters   سینتکش استفاده از
  //   },
  //   stringCounter(){
  //     return this.$store.getters.stringCounter;  // getters   سینتکش استفاده از
  //   }

  // }
  computed:{   // getters  ساده شده فانکشن های بالا  --- سینتکس دیگر استفاده از
    ...mapGetters (['doubleCounter','stringCounter'])// داریم را اینجا می نویسیم البته آنهایی که می خواهیم استفاده کنیم  store اسم گترهایی که در
  }

};
</script>
