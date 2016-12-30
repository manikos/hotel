<template>
    <div>
        <!-- Main Header -->
        <app-header></app-header>

        <!-- Left side column. contains the logo and sidebar -->
        <app-sidebar></app-sidebar>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <!--<section class="content-header">-->
                <!--<h1>-->
                    <!--Διαχείριση Χρηστών-->
                    <!--<small>Optional description</small>-->
                <!--</h1>-->
                <!--<ol class="breadcrumb">-->
                    <!--<li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>-->
                    <!--<li class="active">Here</li>-->
                <!--</ol>-->
            <!--</section>-->
            <!-- Main content -->
            <section class="content">
                <!-- Your Page Content Here -->
                <!--this will change-->
                <h3>This is from Admin {{shared.state.authUser}}</h3>
                <router-view></router-view>
            </section>
            <!-- /.content -->
        </div>

        <!-- Main Footer -->
        <app-footer></app-footer>

        <!-- Control Sidebar -->
        <app-control-sidebar></app-control-sidebar>

    </div>
</template>

<script>
    import AppHeader from './Header.vue';
    import AppSidebar from './Sidebar.vue';
    import AppFooter from './Footer.vue';
    import AppControlSidebar from './ControlSidebar.vue'
    import store from './../../store'
    export default {
        name: 'admin',
        components: {
            AppSidebar,
            AppHeader,
            AppFooter,
            AppControlSidebar
        },
        data() {
            return {
                shared: store
            }
        },
        methods: {
            // TODO make an ajax request to te server
          fetchAuthUser() {
              this.shared.state.authUser = {
                  firstname: 'Nick',
                  lastname: 'Mavrakis'
              }
          }
        },
        created() {
            this.fetchAuthUser();
        }

    };
</script>

<style></style>