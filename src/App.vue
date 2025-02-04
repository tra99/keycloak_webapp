<template>
  <div>
    <h1>Welcome to Vue + Keycloak</h1>
    <p v-if="authenticated">Hello, {{ username }}</p>
    <p v-if="isAdmin">You have admin privileges.</p>
    <p v-if="isUser">You are a regular user.</p>
    <p v-if="isManager">You are a project manager.</p>
    <button v-if="authenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
import keycloak from "./keycloak";

export default {
  data() {
    return {
      authenticated: false,
      username: "",
      isAdmin: false,
      isUser: false,
      isManager: false,
    };
  },
  created() {
    this.authenticated = keycloak.authenticated;
    if (keycloak.tokenParsed) {
      this.username = keycloak.tokenParsed.preferred_username;
      this.isAdmin = keycloak.hasRealmRole("admin");
      this.isUser = keycloak.hasRealmRole("user");
    }
  },
  methods: {
    logout() {
      keycloak.logout({ redirectUri: "http://localhost:5173/" });
    },
  },
};
</script>
