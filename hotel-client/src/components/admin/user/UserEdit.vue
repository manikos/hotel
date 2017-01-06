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
