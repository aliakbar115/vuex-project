<template>
  <div>
     <a class="btn btn-success" @click="increment(10)">Increase</a><!--  time = 10   -->
    <a class="btn btn-success" @click="decrement(15)">Decrease</a>  <!--  time = 10   -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["increment", "decrement"])  // Actions نحوه استفاده از
    // ...mapMutations(["increment", "decrement"]) // ساده شده خط های پایین
    // Increase() {
    //   this.$store.commit("increment");  // mutations   سینتکش استفاده از
    // },
    // Decrease() {
    //   this.$store.commit("decrement");  mutations   سینتکش استفاده از
    // }
  }
};
</script>
