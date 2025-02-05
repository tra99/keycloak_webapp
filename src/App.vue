<template>
  <div>
    <h1>Welcome to Vue + Keycloak</h1>
    <p v-if="authenticated">Hello, {{ username }} ({{ email }})</p>
    <p v-if="isAdmin">You have admin privileges.</p>
    <p v-if="isUser">You are a regular user.</p>
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
      email: "",
      isAdmin: false,
      isUser: false,
    };
  },
  created() {
    console.log("Keycloak Object:", keycloak);
    this.authenticated = keycloak.authenticated;

    if (keycloak.tokenParsed) {
      console.log("Keycloak Token Parsed:", keycloak.tokenParsed);

      this.username = keycloak.tokenParsed.preferred_username;
      this.email = keycloak.tokenParsed.email || "No Email Provided";

      this.isAdmin = keycloak.hasRealmRole("admin");
      this.isUser = keycloak.hasRealmRole("user");
    }
  },
  methods: {
    logout() {
      console.log("Logging out...");
      keycloak.logout({ redirectUri: "http://localhost:5173/" });
    },
  },
};
</script>
