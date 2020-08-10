<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <!-- Icon, Home, Logo -->
      <b-navbar-brand v-bind:to="{ name: 'home' }">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- NavBar-->
          <b-navbar-nav>
            <b-nav-item
              v-for="l in links"
              v-bind:key="l.title"
              v-bind:to="l.to"
              >{{ l.title }}</b-nav-item
            >
          </b-navbar-nav>
          <!-- User Combo-->
          <px-header-user-combo />
          <!-- Search Box-->
          <px-header-search-box />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import PxHeaderSearchBox from "@/components/PxHeaderSearchBox";
import PxHeaderUserCombo from "@/components/PxHeaderUserCombo";
export default {
  name: "PxHeader",
  components: { PxHeaderSearchBox, PxHeaderUserCombo },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
