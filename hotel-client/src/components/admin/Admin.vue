<template>
    <div>
        <div class="container">
            <div class="col-sm-8">
                <!--this will change-->
                <router-view></router-view>
            </div>
            <div class="col-sm-4">
                <adminSidebar></adminSidebar>
            </div>
        </div>

    </div>
</template>

<script>
    import AdminSidebar from './Sidebar.vue';
    export default {
        name: 'admin',
        components: {
            adminSidebar: AdminSidebar
        }

    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>