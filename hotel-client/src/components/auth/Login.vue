<template>
    <div>
        <div class="columns">
            <div class="column is-full">
                <form v-on:submit.prevent='login'>
                    <!--Username input-->
                    <div class="columns">
                        <div class="column is-full">
                            <div class="control has-icon has-icon-right">
                                <input id="username"
                                       type="text"
                                       class="input is-medium"
                                       placeholder="Enter Username"
                                       v-model="form.data.username"
                                       @keydown="form.errors.clear('username')"
                                >
                                <span class="icon"><i class="fa fa-user"></i></span>
                                <span v-if="form.errors.has('username')" class="help is-danger">{{form.errors.get('username')}}</span>
                            </div>
                        </div>
                    </div>
                    <!--Password input-->
                    <div class="columns">
                        <div class="column is-full">
                            <div class="control has-icon has-icon-right">
                                <input id="password"
                                       type="password"
                                       class="input is-medium"
                                       placeholder="Enter Password"
                                       v-model="form.data.password"
                                       @keydown="form.errors.clear('password')"
                                >
                                <span class="icon"><i class="fa fa-key"></i></span>
                                <span v-if="form.errors.has('password')" class="help is-danger">{{form.errors.get('password')}}</span>
                            </div>
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

    import Form from '../../assets/js/core/Form'

    export default {
        name: 'login',
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