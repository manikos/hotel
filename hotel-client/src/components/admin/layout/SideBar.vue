<template>
    <aside class="menu app-sidebar is-hidden-mobile animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
        <p class="menu-label">
            GENERAL
        </p>
        <ul class="menu-list">
            <!--TODO: MAke  <li> = <menu-item> vue component-->
            <li>
                <router-link :to="{name: 'dash'}">
                    <span class="icon is-small">
                        <i class="fa fa-home"></i>
                    </span>
                    <span>Home</span>
                </router-link>
            </li>
        </ul>
        <p class="menu-label">
            USERS
        </p>
        <ul class="menu-list">
            <li>
                <router-link :to="{name: 'user'}">
                    <span class="icon is-small">
                        <i class="fa fa-user"></i>
                    </span>
                    <span>User mgmt</span>
                </router-link>
            </li>
            <li>
                <a>
                    <span class="icon is-small">
                        <i class="fa fa-users"></i>
                    </span>
                    <span>Roles</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small">
                        <i class="fa fa-tasks"></i>
                    </span>
                    <span>Permissions</span>
                </a>
            </li>
        </ul>
        <p class="menu-label">
            MEMBERS
        </p>
        <ul class="menu-list">
            <li>
                <a>
                    <span class="icon is-small">
                        <i class="fa fa-link"></i>
                    </span>
                    <span>Foo</span>
                </a>
                <ul>
                    <li>
                        <a>
                            <span class="icon is-small">
                                <i class="fa fa-link"></i>
                            </span>
                            <span>Bar</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small">
                                <i class="fa fa-link"></i>
                            </span>
                            <span>Bar</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- Sidebar Menu -->
        <!--<ul class="menu-list">-->
        <!--<li class="header">INFO</li>-->
        <!--&lt;!&ndash; Optionally, you can add icons to the links &ndash;&gt;-->
        <!--<li class="active">-->

        <!--</li>-->
        <!--<li>-->
        <!--<router-link :to="{name: 'user'}"><i class="fa fa-link"></i><span>Users</span></router-link>-->
        <!--</li>-->
        <!--</ul>-->
        <!--<ul class="menu-list">-->
        <!--<li v-for="(item, index) in menu">-->
        <!--<router-link :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'"-->
        <!--v-if="item.path" @click.native="toggle(index, item)">-->
        <!--<span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>-->
        <!--{{ item.meta.label || item.name }}-->
        <!--<span class="icon is-small is-angle" v-if="item.children && item.children.length">-->
        <!--<i class="fa fa-angle-down"></i>-->
        <!--</span>-->
        <!--</router-link>-->
        <!--<a :aria-expanded="isExpanded(item)" v-else @click="toggle(index, item)">-->
        <!--<span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>-->
        <!--{{ item.meta.label || item.name }}-->
        <!--<span class="icon is-small is-angle" v-if="item.children && item.children.length">-->
        <!--<i class="fa fa-angle-down"></i>-->
        <!--</span>-->
        <!--</a>-->

        <!--<expanding v-if="item.children && item.children.length">-->
        <!--<ul v-show="isExpanded(item)">-->
        <!--<li v-for="subItem in item.children" v-if="subItem.path">-->
        <!--<router-link :to="generatePath(item, subItem)">-->
        <!--{{ subItem.meta && subItem.meta.label || subItem.name }}-->
        <!--</router-link>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</expanding>-->
        <!--</li>-->
        <!--</ul>-->
    </aside>
</template>

<script>
    //    import Expanding from 'vue-bulma-expanding'
    //    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
//            Expanding
        },

        props: {
            show: Boolean
        },

        data () {
            return {
                isReady: false
            }
        },

//        mounted () {
//            let route = this.$route
//            if (route.name) {
//                this.isReady = true
//                this.shouldExpandMatchItem(route)
//            }
//        },

//        computed: mapGetters({
//            menu: 'menuitems'
//        }),
//
//        methods: {
//            ...mapActions([
//                'expandMenu'
//            ]),
//
//            isExpanded (item) {
//                return item.meta.expanded
//            },
//
//            toggle (index, item) {
//                this.expandMenu({
//                    index: index,
//                    expanded: !item.meta.expanded
//                })
//            },
//
//            shouldExpandMatchItem (route) {
//                let matched = route.matched
//                let lastMatched = matched[matched.length - 1]
//                let parent = lastMatched.parent || lastMatched
//                const isParent = parent === lastMatched
//
//                if (isParent) {
//                    const p = this.findParentFromMenu(route)
//                    if (p) {
//                        parent = p
//                    }
//                }
//
//                if ('expanded' in parent.meta && !isParent) {
//                    this.expandMenu({
//                        item: parent,
//                        expanded: true
//                    })
//                }
//            },
//
//            generatePath (item, subItem) {
//                return `${item.component ? item.path + '/' : ''}${subItem.path}`
//            },
//
//            findParentFromMenu (route) {
//                const menu = this.menu
//                for (let i = 0, l = menu.length; i < l; i++) {
//                    const item = menu[i]
//                    const k = item.children && item.children.length
//                    if (k) {
//                        for (let j = 0; j < k; j++) {
//                            if (item.children[j].name === route.name) {
//                                return item
//                            }
//                        }
//                    }
//                }
//            }
//        },

//        watch: {
//            $route (route) {
//                this.isReady = true
//                this.shouldExpandMatchItem(route)
//            }
//        }

    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import '~bulma/sass/utilities/variables';
    @import '~bulma/sass/utilities/mixins';

    .app-sidebar {
        position: fixed;
        top: 50px; //TODO: mke it equal to the fixed height of navbar
        left: 0;
        bottom: 0;
        padding: 20px;
        width: 180px;
        min-width: 45px;
        max-height: 100vh;
        height: calc(100% - 50px);
        z-index: 1024 - 1; //TODO make it $sidebar_index = $navbar_index - 1
        background: #FFF;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

        //  @include mobile() {
        //     transform: translate3d(-180px, 0, 0);
        //   }

        .icon {
            vertical-align: baseline;
            &.is-angle {
                position: absolute;
                right: 10px;
                transition: transform .377s ease;
            }
        }

        .menu-label {
            padding-left: 5px;
        }

        .menu-list {
            li a {
                &[aria-expanded="true"] {
                    .is-angle {
                        transform: rotate(180deg);
                    }
                }
            }

            li a + ul {
                margin: 0 10px 0 15px;
            }
        }

    }
</style>