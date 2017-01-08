<template>
    <section class="hero app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
        <div class="hero-head">
            <nav class="nav">
                <div class="nav-left">
                    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
                    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
                    <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="nav-center">
                    <!--<div class="container has-text-centered">-->
                    <figure class="image is-48x48">
                        <img src="../../../../static/logo.jpg"/>
                    </figure>
                    <!--</div>-->
                </div>
                <div class="nav-right is-flex">
                    <div class="nav-item">
                        <span class="icon is-medium">
                            <i class="fa fa-user-o"></i>
                        </span>
                    </div>
                    <div class="nav-item">
                        <span class="icon is-medium">
                          <i class="fa fa-gear"></i>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    //    import Tooltip from 'vue-bulma-tooltip'
    //    import {mapGetters, mapActions} from 'vuex'

    export default {

        components: {
//            Tooltip
        },

        props: {
            show: Boolean
        },
        methods: {
            log() {
                console.log('kjdjksdhf')
            }
        }

//        computed: mapGetters({
//            pkginfo: 'pkg',
//            sidebar: 'sidebar'
//        }),
//
//        methods: mapActions([
//            'toggleSidebar'
//        ])
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import '~bulma/sass/utilities/variables';

    .app-navbar {
        position: fixed;
        min-width: 100%;
        z-index: 1024;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

    }

    // TODO: declare colors globally
    .has-text-purple {
        color: #b86bff;
    }
    .has-text-green {
        margin-left: 10px;
        color: #36AC70;
    }

    .has-text-dark-blue {
        color: #28374B;
    }

</style>

