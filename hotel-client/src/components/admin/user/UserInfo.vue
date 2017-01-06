<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h3>{{user.username}}</h3>
                    </div>

                    <div class="modal-body">
                        <ul>
                            <li v-for="item in user">{{item}}</li>
                        </ul>
                    </div>

                    <div class="modal-footer">
                        <p>This is the best footer ever!!!</p>
                        <button class="btn btn-default"
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
        name: 'UserInfo',

        props: ['user'],
        data() {
            return {}
        }
    };
</script>

