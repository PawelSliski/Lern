<template>
  <div class="profile">
    <p>
      <router-link to="/" class="btn btn-primary logout-link" tag="button" onClick="window.location.href=window.location.href">Logout</router-link>
    </p>
    <h1>Welcome to Lern, {{account.user.firstName}}!</h1>
    <h3>List of users:</h3>
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.id">
        {{user.firstName + ' ' + user.lastName}}
        <span v-if="user.deleting">
          <em>- Deleting...</em>
        </span>
        <span v-else-if="user.deleteError" class="text-danger">- ERROR: {{user.deleteError}}</span>
        <span v-else>
          -
          <a @click="deleteUser(user.id)" class="text-danger">Delete</a>
        </span>
      </li>
    </ul>
  </div>
  
</template>

<style>
body {
  color: white;
}
.profile {
  padding-top: 20px;
  align-self: auto;
  margin: none;
  width: 90%;
  float: left;
  height: 50%;
}

.nav-link {
  display: none;
}
.inner {
  display: none;
}

.logout-link {
  float: top;
  float: right;
  margin-bottom: 500px;
  text-decoration: none;
  color: white;
}
</style>


<script>

import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
function mounted() {

        location.reload();
    };
</script>