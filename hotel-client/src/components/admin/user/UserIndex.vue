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
                            type="button"
                            @click="showUser(user)"
                    >
                        Show User Modal
                    </button>
                    <button class="btn btn-flat btn-xs btn-warning"
                            @click="editUser(user)"
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

        <!--User Show Modal (init state: showModal = false)-->
        <!--###############################################-->
        <transition name="modal" mode="out-in">
            <!--TODO use a $watcher to watch which user was clicked-->
            <user-show-modal v-if="showModal"
                             @close="showModal = false"
                             :user="userSelected"
            >
            </user-show-modal>
        </transition>

        <!--User Edit Modal (init state: showModal = false)-->
        <!--###############################################-->

    </div>
</template>

<script>
    import UserShowModal from './UserShow.vue';

    export default {
        components: {
            UserShowModal
        },
        name: 'userManagement',
        data() {
            return {
                showModal: false,
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
                userSelected: {}
            }
        },
        methods: {
            showUser(user) {
                //TODO Make an ajax request to fetch user ?
                this.userSelected = user;
                this.showModal = true;
            },
            editUser(user) {
                this.$router.push({name: 'userEdit', params: {id: user.id}});
                /* TODO Alternatively we can make a "source of truth" to manage state:
                    e.g: var store.userSelected = user
                    in *editUser* component: data() {return {sharedState: store.userSelected}}
                 */
            },
            deleteUser(id) {
                // Sent DELETE ajax request to server
            }
        }
    };
</script>

<style style lang="scss" rel="stylesheet/scss">
    /*TODO @import or use it in App.vue*/
    .modal-enter-active,
    .modal-leave-active {
        transition: opacity .2s ease;
    }

    .modal-enter,
    .modal-leave-active {
        opacity: 0;
    }
</style>