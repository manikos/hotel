<template>
    <div>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h2>Cool header</h2>
                    </div>

                    <div class="modal-body">
                        <ul>
                            <li v-for="item in user">{{item}}</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate
                            deserunt distinctio expedita, facere fugit id maiores molestiae molestias non officiis quia
                            sit temporibus unde. Asperiores consequatur culpa mollitia!
                        </p>
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
    </div>
</template>

<script>
    export default {
        name: 'userShow',

        props: ['user'],
        data() {
            return {}
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 800px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }
</style>