<template>
  <div>
    <h1>Protected Page</h1>
    <p v-if="authenticated">Hello, {{ username }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import keycloak from "../keycloak";

export default {
  data() {
    return {
      authenticated: false,
      username: "",
    };
  },
  created() {
    this.authenticated = keycloak.authenticated;
    if (keycloak.tokenParsed) {
      this.username = keycloak.tokenParsed.preferred_username;
    }
  },
  methods: {
    logout() {
      keycloak.logout();
    },
  },
};
</script>
