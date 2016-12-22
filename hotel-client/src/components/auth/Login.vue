<template>
    <div>
        <h3>Enter your credentials to login</h3>
        <form v-on:submit.prevent='login'>
            <!--Username-->
            <div class="form-group">
                <label for='username'>Username</label>
                <input id="username"
                       type="text"
                       class="form-control"
                       placeholder="Enter Username"
                       v-model="user.username"
                >`
            </div>
            <!--Password-->
            <div class="form-group">
                <label for='username'>Password</label>
                <input id="password"
                       type="password"
                       class="form-control"
                       placeholder="Enter Password"
                       v-model="user.password"
                >
            </div>
            <!--Submit button-->
            <button type="submit"
                    class="btn btn-success col-sm-12"
            >
                Login
            </button>
        </form>
        <hr>
        <div class="row">
            <p class="text-center">
                You don't have an account? Please register
                <router-link to="register">here</router-link>
            </p>
        </div>
    </div>
</template>

<script>

    //
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    username: '',
                    password: '', // TODO: should this be encrypted? Are we OK using https:// ?
                }
            }
        },
        methods: {
            // TODO consider moving method to `Auth` plugin
            login() {
                this.$http.post('/auth', this.user)
                    .then(response => {
                        // Store the received JWT + expiration date
                        this.$auth.setToken(response.body.token, Date.now() + 14400000);
                        // Redirect user
                        // TODO: Is server sending redirect urls? what we do?
                        // TODO: redirect according to the role?
                        this.$router.push({name: 'dash'})

                    })
                    .catch(response => {
                        if (response.status === 0)
                            alert('Python server is not running bro!')
                    });
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>