<template>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4">


                    <div class="box box-solid box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">Login or Register</h3>
                            <div class="box-tools pull-right">
                                <!-- Buttons, labels, and many other things can be placed here! -->
                                <!-- Here is a label for example -->
                                <span class="label label-primary">Label</span>
                            </div><!-- /.box-tools -->
                        </div><!-- /.box-header -->
                        <div class="box-body">
                            <!--TODO: add transition effect when changing from Login to Register component-->
                            <router-view></router-view>
                        </div><!-- /.box-body -->
                        <div class="box-footer">
                            The footer of the box
                        </div><!-- box-footer -->
                    </div><!-- /.box -->


                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'auth'
    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>