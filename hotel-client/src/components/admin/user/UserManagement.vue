<template>
    <div>
        <div class="box">
            <table class="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Last Login</th>
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
                    <!--TODO: FORMAT date-->
                    <td>{{user.id}}</td>
                    <td>
                        <button class="button is-info is-small"
                                @click="showUser(user)"
                        >
                            <span class="icon is-small">
                                <i class="fa fa-eye"></i>
                            </span>
                            <span>Show</span>
                        </button>
                        <button class="button is-primary is-small"
                                @click="editUser(user)"
                        >
                            <span class="icon is-small">
                                <i class="fa fa-edit"></i>
                            </span>
                            <span>Edit</span>
                        </button>
                        <button class="button is-danger is-small"
                                @click="deleteUser(user)"
                        >
                            <span class="icon is-small">
                                <i class="fa fa-times"></i>
                            </span>
                            <span>Delete</span>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
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
                   :selectedUser="selectedUser"
        >
        </user-edit>


    </div>
</template>

<script>
    //TODO: consinder using a global modal UI component <modal><user-info></user-info></modal>
        import UserInfo from './UserInfo.vue';
    //    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            UserInfo,
//            UserEdit,
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