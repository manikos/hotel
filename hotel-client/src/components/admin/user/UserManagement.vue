<template>
    <div>
        <div class="box box-solid box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">User listing</h3>
            </div>
            <div class="box-body">
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
                        <td>{{Date(user.last_login)}}</td>
                        <td>
                            <button class="btn btn-flat btn-xs btn-primary"
                                    type="button"
                                    @click="showUser(user)"
                            >
                                <i class="fa fa-eye"></i> Show
                            </button>
                            <button class="btn btn-flat btn-xs btn-warning"
                                    @click="editUser(user)"
                            >
                                <i class="fa fa-pencil-square-o"></i> Edit
                            </button>
                            <button class="btn btn-flat btn-xs btn-danger"
                                    @click="deleteUser"
                            >
                                <i class="fa fa-trash"></i> Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="box-footer">
                There are {{users.length}} users total
            </div>
        </div>

        <!--This is the user info dialog-->
        <user-info v-if="showUserInfo"
                   @close="showUserInfo = false"
                   :user="selectedUser"
        >
        </user-info>

        <!--This is the user info dialog-->
        <user-edit v-if="showUserEdit"
                   @close="showUserEdit = false"
                   :user="selectedUser"
        >
        </user-edit>

    </div>
</template>

<script>
    import UserInfo from './UserInfo.vue';
    import UserEdit from './UserEdit.vue'

    export default {
        components: {
            UserInfo, UserEdit
        },
        name: 'UserManagement',
        data() {
            return {
                selectedUser: {}, // this will correspond to the user clicked
                showUserInfo: false,
                showUserEdit: false,
                users: [], // this will be populated upon created
            }
        },
        methods: {
            showUser(user) {
                this.selectedUser = user; //TODO use events and props
                this.showUserInfo = true;
            },
            editUser(user) {
                this.selectedUser = user; //TODO use events and props
                this.showUserEdit = true;
//                this.$router.push({name: 'userEdit', params: {id: user.id}});
                /* TODO Alternatively we can make a "source of truth" to manage state:
                 e.g: var store.userSelected = user
                 in *editUser* component: data() {return {sharedState: store.userSelected}}
                 */
            },
            deleteUser(id) {
                // Sent DELETE ajax request to server
            },
            fetchUsers() {
                this.$http.get('/user')
                    .then(response => {
                        this.users = response.body
                    })
                    .catch(response => {
                        if (response.status === 401)
                            alert('You are not logged in');
                    });
            }
        },
        created() {
            this.fetchUsers();
        }
    };
</script>

<style style lang="scss" rel="stylesheet/scss">

</style>