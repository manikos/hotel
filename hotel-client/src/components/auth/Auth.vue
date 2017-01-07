<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="box">
                    <div class="box">
                        <h1 class="title is-4">Welcome to Hotel admin</h1>
                    </div>
                    <router-view></router-view>
                </div>

            </div>
        </div>


        <!--<div class="row">-->
        <!--<div class="col-sm-4 col-sm-offset-4">-->


        <!--<div class="box box-solid box-primary">-->
        <!--<div class="box-header with-border">-->
        <!--<h3 class="box-title">Login or Register</h3>-->
        <!--<div class="box-tools pull-right">-->
        <!--&lt;!&ndash; Buttons, labels, and many other things can be placed here! &ndash;&gt;-->
        <!--&lt;!&ndash; Here is a label for example &ndash;&gt;-->
        <!--<span class="label label-primary">Label</span>-->
        <!--</div>&lt;!&ndash; /.box-tools &ndash;&gt;-->
        <!--</div>&lt;!&ndash; /.box-header &ndash;&gt;-->
        <!--<div class="box-body">-->
        <!--&lt;!&ndash;TODO: add transition effect when changing from Login to Register component&ndash;&gt;-->
        <!--<router-view></router-view>-->
        <!--</div>&lt;!&ndash; /.box-body &ndash;&gt;-->
        <!--<div class="box-footer">-->
        <!--The footer of the box-->
        <!--</div>&lt;!&ndash; box-footer &ndash;&gt;-->
        <!--</div>&lt;!&ndash; /.box &ndash;&gt;-->


        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: 'auth'
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    /*@import '~bulma';*/

    .title {
        color: #00D1B2;
    }

</style>