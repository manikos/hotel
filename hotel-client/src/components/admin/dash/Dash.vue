<template>
    <div>
        <h2>Dashboard</h2>
        <h2>{{authUser.name}}</h2>
        <button class="btn btn-default" @click="updateStore">Update store</button>
    </div>
</template>

<script>
    // TODO: attach store object to Vue prototype and make an `$store` alias
    // FIXME: How do I preserve state when parent updates?
    import store from './../../../store'
    export default {
        name: 'dash',
        data() {
            return store
        },
        methods: {
            updateStore() {
                this.authUser.name = 'Kostas';
            }
        }

    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>