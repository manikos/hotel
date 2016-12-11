<template>
    <div>
        <h3>Enter your credentials to login</h3>
        <form v-on:submit.prevent='onFormSubmit'>
            <!--Username-->
            <div class="form-group">
                <label for='username'>Username</label>
                <input id="username" type="text" class="form-control" placeholder="Enter Username">
            </div>
            <!--Password-->
            <div class="form-group">
                <label for='username'>Password</label>
                <input id="password" type="text" class="form-control" placeholder="Enter Password">
            </div>
            <input type="submit" value="Login" class="btn btn-success col-sm-12">
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
        name: 'login'
    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>