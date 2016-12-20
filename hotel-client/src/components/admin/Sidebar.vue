<template>
    <div>
        <nav>
            <ul>
                <li><router-link to="/admin">Admin Dashboard</router-link></li>
                <li><router-link to="/admin/user">Manage Users</router-link></li>
                <li>Manage Roles</li>
                <li>Manage Permissions</li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'sidebar'
    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>