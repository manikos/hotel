<template>
    <div>
        <h2>This is the user edit form</h2>
    </div>
</template>

<script>
    export default {
        name: 'UserEdit',

        mounted() {
            //TODO: mae an ajax call to get :id user's data
            console.log(this.$route.params)
        }



    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>