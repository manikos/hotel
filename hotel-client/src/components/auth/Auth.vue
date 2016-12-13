<template>
    <div id="auth">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4">
                    <h2>Login or Register</h2>
                    <!--TODO: add transition effect when changing from Login to Register component-->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth'
    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>