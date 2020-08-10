<template>
  <b-nav-item-dropdown right>
    <!-- Using 'button-content' slot -->
    <template v-slot:button-content>
      / User
    </template>
    <b-dropdown-item href="#">Profile</b-dropdown-item>
    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
