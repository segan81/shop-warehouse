<template>
  <div>
    <bounce-loader
      v-bind:loading="isLoading"
      v-bind:color="`#68d391`"
      v-bind:size="100"
    />
  </div>
</template>
<script>
//import api from "@/api";
export default {
  name: "Home",
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    this.loading = true;
  }
};
</script>
