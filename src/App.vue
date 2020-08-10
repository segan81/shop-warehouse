<template>
  <main>
    <px-header v-bind:links="links" />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: {
    PxHeader
  },
  data() {
    return {
      links: [
        {
          title: "/ Items",
          to: { name: "items" }
        },
        {
          title: "/ Services",
          to: { name: "services" }
        },
        {
          title: "/ About",
          to: { name: "about" }
        },
        {
          title: "/ Contact",
          to: { name: "contact" }
        }
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
