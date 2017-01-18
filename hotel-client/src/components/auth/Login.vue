<template>
    <div>
        <div class="columns">
            <div class="column is-full">
                <form v-on:submit.prevent='login'>
                    <!--Username input-->
                    <div class="columns">
                        <div class="column is-full">
                            <username v-model="form.data.username"
                                      :error="form.errors.get('username')"
                                      placeholder="Enter your username"
                                      @keydown="form.errors.clear('username')"
                                      icon="fa-user"
                            >
                            </username>
                        </div>
                    </div>
                    <!--Password input-->
                    <div class="columns">
                        <div class="column is-full">
                            <password v-model="form.data.password"
                                      :error="form.errors.get('password')"
                                      placeholder="Enter your password"
                                      @keydown="form.errors.clear('password')"
                                      icon="fa-key"
                            >
                            </password>
                        </div>
                    </div>
                    <!--Submit button-->
                    <div class="columns">
                        <div class="column is-full">
                            <button type="submit"
                                    class="button is-primary is-fullwidth is-large"
                                    :disabled="form.errors.hasAny()"
                            >
                                <span class="icon"><i class="fa fa-sign-in"></i></span>
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-full">
                <p class="text-center">
                    You don't have an account? Please register
                    <router-link to="register">here</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    import Form from '../../assets/js/core/Form';
    import TextInput from '../shared/ui/TextInput.vue'
    import PasswordInput from '../shared/ui/PasswordInput.vue'

    export default {
        name: 'login',
        components: {
            username: TextInput,
            password: PasswordInput
        },
        data() {
            return {
                form: new Form({
                    username: '',
                    password: ''
                })
            }
        },
        methods: {
            login() {
                this.form.post('/auth/')
                    .then(response => {
                        // Store the received JWT + expiration date
                        this.$auth.setToken(response.data.token, Date.now() + 14400000);
                        // Redirect user TODO: Is server sending redirect urls? what we do? redirect according to the role?
                        this.$router.push({name: 'dash'})
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>