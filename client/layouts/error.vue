<template>
  <v-container>
    <v-sheet
      height="100%"
      width="100%"
      class="d-flex flex-column justify-center align-center"
    >
      <span
        class="grey--text font-weight-bold"
        style="font-size: 140px; line-height: 1"
        >404</span
      >
      <span class="grey--text text-h4 font-weight-bold">Page Not Found</span>
      <span class="red--text lighten-2">{{ otherError }}</span>
      <v-btn to="/materials" class="mt-6 rounded-pill" color="primary"
        ><v-icon>mdi-chevron-left</v-icon> Back Homepage
      </v-btn>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "landing",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
