<template>
  <div>
    <bounce-loader
      v-bind:loading="isLoading"
      v-bind:color="`#68d391`"
      v-bind:size="100"
    />
    <px-home-body-slider />
    <px-home-body-grid />
    <px-home-body-blogs />
  </div>
</template>
<script>
import PxHomeBodySlider from "@/components/PxHomeBodySlider";
import PxHomeBodyGrid from "@/components/PxHomeBodyGrid";
import PxHomeBodyBlogs from "@/components/PxHomeBodyBlogs";
//import api from "@/api";
export default {
  name: "Home",
  components: { PxHomeBodySlider, PxHomeBodyGrid, PxHomeBodyBlogs },
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
