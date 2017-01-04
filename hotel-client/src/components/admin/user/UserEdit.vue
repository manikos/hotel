<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h3>{{user.first_name}} {{user.last_name}}</h3>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-2">
                                <div class="box box-warning">
                                    <div class="box-body">


                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="someId">Username</label>
                                                    <input type="text" id="someId" class="form-control"
                                                           v-model="user.username">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="someOtherId">Email</label>
                                                    <input type="text" id="someOtherId" class="form-control"
                                                           v-model="user.email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="someOtherId">First Name</label>
                                                    <input type="text" id="someOtherId" class="form-control"
                                                           v-model="user.first_name">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="someOtherId">Last Name</label>
                                                    <input type="text" id="someOtherId" class="form-control"
                                                           v-model="user.last_name">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <!--FIXME when emit close then update parent state (maybe use store as well...)-->
                        <button class="btn btn-warning"
                                @click="$emit('close')"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'UserEdit',

        props: ['selectedUser'],
        data() {
            return {
                user: {}
            }
        },
        mounted() {
            this.user = this.selectedUser;
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 600px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #ECF0F5; //the color of adminLTE background
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        border: 0px;
        margin: 0px;
        padding: 0px;
        margin-top: 0;
        color: #E08E0B;
    }

    .modal-body {
        margin: 10px 0;
    }

    .modal-footer {
        border: 0px;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>