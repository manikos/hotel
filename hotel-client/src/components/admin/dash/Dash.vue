<template>
    <div>
        <h2>Dashboard</h2>
        <h2>{{shared.state.authUser}}</h2>
        <button class="btn btn-default" @click="updateStore">Update store</button>
    </div>
</template>

<script>
    // FIXME: How do I preserve state when parent updates?
    export default {
        name: 'dash',
        data() {
            return {
                shared: this.$store //alternatively `import store form ./store` and then `data() {return {shared:store}}`
            }
        },
        methods: {
            updateStore() {
//                this.shared.state.authUser.lastname = 'Spilitsas';
//                this.shared.updateName('Spilitsas');
//                this.$store.state.authUser.lastname = 'Pirgakis';
                this.$store.updateName('Pirgakis');
            }
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>