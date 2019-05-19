<template>
    <transition name="modal-fade">
<div class="modal-backdrop">
    <div class="modal" >
        <h2>Register</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="user.username" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-modal btn-primary" :disabled="status.registering">Register</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <router-link to="/home" class="btn btn-modal btn-link">Close</router-link>
            </div>
        </form>
        </div>
</div>
</transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.694);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    border-radius: 10px;
    overflow-x: auto;
    position: relative;
    display: flex;
    padding: 10px;
    flex-direction: column;
    height: 550px;
    width: 25%;
    background-color: #32363E;
    border: 1.5px solid  rgb(29, 29, 29);
    color: rgb(29, 28, 28);
  }
.btn-modal{
    width: 49%;
    color: white;
}
.btn-close{
    margin-top: 0px;
}
.form-control{
    width: 99%;
}

    .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>