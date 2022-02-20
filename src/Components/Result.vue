<template>
  <div>
    <h3>Counter is : {{ counter }}</h3>
  </div>
</template>

<script>
export default {
  //props: ["counter"]
  computed: {
    counter() {
      //return this.$store.state.counter;    //  گرفتیم store از
      return this.$store.getters.doubleCounter; // برای این است که مثلا کد تکراری ننویسیم
      

    }
  }
};
</script>
