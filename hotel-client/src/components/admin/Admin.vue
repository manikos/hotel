<template>
    <div>
        <!--<nprogress-container></nprogress-container>-->
        <nav-bar :show="true"></nav-bar>
        <side-bar :show="true"></side-bar>
        <app-main></app-main>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    //    import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
    import NavBar from './layout/NavBar.vue'
    import SideBar from './layout/SideBar.vue'
    import AppMain from './layout/AppMain.vue'
    import FooterBar from './layout/FooterBar.vue'

    export default {
        components: {
            NavBar,
            SideBar,
            AppMain,
            FooterBar,
//            NprogressContainer
        },
//        beforeMount () {
//            const {body} = document;
//            const WIDTH = 768;
//            const RATIO = 3;
//
//            const handler = () => {
//                if (!document.hidden) {
//                    let rect = body.getBoundingClientRect();
//                    let isMobile = rect.width - RATIO < WIDTH;
//                    this.toggleDevice(isMobile ? 'mobile' : 'other');
//                    this.toggleSidebar(!isMobile)
//                }
//            };
//
//            document.addEventListener('visibilitychange', handler);
//            window.addEventListener('DOMContentLoaded', handler);
//            window.addEventListener('resize', handler);
//        },
//
//        computed: mapGetters({
//            sidebar: 'sidebar'
//        }),
//
//        methods: mapActions([
//            'toggleDevice',
//            'toggleSidebar'
//        ])
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import '~bulma';
    @import '~animate.css';
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome';

    .animated {
        animation-duration: .377s;
    }

    //@import '~wysiwyg.css/wysiwyg.sass';
    // .nprogress-container {
    //    position: fixed !important;
    //    width: 100%;
    //      height: 50px;
    //      z-index: 2048;
    //     pointer-events: none;

    //    #nprogress {
    //        $color: #48e79a;

    //       .bar {
    //            background: $color;
    //     }
    //         .peg {
    //              box-shadow: 0 0 10px $color, 0 0 5px $color;
    //           }
    //
    //           .spinner-icon {
    //              border-top-color: $color;
    //               border-left-color: $color;
    //          }
    //      }
    //   }
</style>