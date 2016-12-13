<template>
    <div>
        <h2>All users listing</h2>
        <table class="table .table-condensed">
            <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>last_login</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.first_name}}</td>
                <td>{{user.last_name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.last_login}}</td>
                <td>
                    <button class="btn btn-flat btn-xs btn-primary"
                            @click="showUser(user.id)"
                    >
                        Show
                    </button>
                    <button class="btn btn-flat btn-xs btn-warning"
                            @click="editUser(user.id)"
                    >
                        Edit
                    </button>
                    <button class="btn btn-flat btn-xs btn-danger"
                            @click="deleteUser"
                    >
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'UserManagement',
        data() {
            return {
                users: [
                    {
                        id: 1,
                        username: 'irag',
                        first_name: 'Iraklis',
                        last_name: 'Georgas',
                        email: 'irag@example.com',
                        last_login: '21/12/2015'
                    },
                    {
                        id: 2,
                        username: 'nick',
                        first_name: 'Nick',
                        last_name: 'Mavrakis',
                        email: 'nick@example.com',
                        last_login: '20/12/2015'
                    },
                ],
            }
        },
        methods: {
            showUser(id) {
                this.$router.push({name: 'showUser', params: {id: id}})
            },
            editUser(id) {
                this.$router.push({name: 'editUser', params: {id: id}})
            },
            deleteUser(id) {
                // Sent DELETE ajax request to server
            }
        }
    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>