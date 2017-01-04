<template>
    <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
        <p class="menu-label">
            General
        </p>
        <!-- Sidebar Menu -->
        <ul class="menu-list">
            <li class="header">HEADER</li>
            <!-- Optionally, you can add icons to the links -->
            <li class="active">
                <router-link :to="{name: 'dash'}"><i class="fa fa-link"></i><span>Home</span></router-link>
            </li>
            <li>
                <router-link :to="{name: 'user'}"><i class="fa fa-link"></i><span>Users</span></router-link>
            </li>
        </ul>
        <!--<ul class="menu-list">-->
            <!--&lt;!&ndash;<li v-for="(item, index) in menu">&ndash;&gt;-->
                <!--&lt;!&ndash;<router-link :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'"&ndash;&gt;-->
                             <!--&lt;!&ndash;v-if="item.path" @click.native="toggle(index, item)">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>&ndash;&gt;-->
                    <!--&lt;!&ndash;{{ item.meta.label || item.name }}&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="icon is-small is-angle" v-if="item.children && item.children.length">&ndash;&gt;-->
                        <!--&lt;!&ndash;<i class="fa fa-angle-down"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;</span>&ndash;&gt;-->
                <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                <!--&lt;!&ndash;<a :aria-expanded="isExpanded(item)" v-else @click="toggle(index, item)">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>&ndash;&gt;-->
                    <!--&lt;!&ndash;{{ item.meta.label || item.name }}&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="icon is-small is-angle" v-if="item.children && item.children.length">&ndash;&gt;-->
                        <!--&lt;!&ndash;<i class="fa fa-angle-down"></i>&ndash;&gt;-->
                      <!--&lt;!&ndash;</span>&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->

                <!--&lt;!&ndash;<expanding v-if="item.children && item.children.length">&ndash;&gt;-->
                    <!--&lt;!&ndash;<ul v-show="isExpanded(item)">&ndash;&gt;-->
                        <!--&lt;!&ndash;<li v-for="subItem in item.children" v-if="subItem.path">&ndash;&gt;-->
                            <!--&lt;!&ndash;<router-link :to="generatePath(item, subItem)">&ndash;&gt;-->
                                <!--&lt;!&ndash;{{ subItem.meta && subItem.meta.label || subItem.name }}&ndash;&gt;-->
                            <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                        <!--&lt;!&ndash;</li>&ndash;&gt;-->
                    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                <!--&lt;!&ndash;</expanding>&ndash;&gt;-->
            <!--&lt;!&ndash;</li>&ndash;&gt;-->
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

        mounted () {
            let route = this.$route
            if (route.name) {
                this.isReady = true
                this.shouldExpandMatchItem(route)
            }
        },

//        computed: mapGetters({
//            menu: 'menuitems'
//        }),
//
        methods: {
//            ...mapActions([
//                'expandMenu'
//            ]),
//
//            isExpanded (item) {
//                return item.meta.expanded
//            },

            toggle (index, item) {
                this.expandMenu({
                    index: index,
                    expanded: !item.meta.expanded
                })
            },

            shouldExpandMatchItem (route) {
                let matched = route.matched
                let lastMatched = matched[matched.length - 1]
                let parent = lastMatched.parent || lastMatched
                const isParent = parent === lastMatched

                if (isParent) {
                    const p = this.findParentFromMenu(route)
                    if (p) {
                        parent = p
                    }
                }

                if ('expanded' in parent.meta && !isParent) {
                    this.expandMenu({
                        item: parent,
                        expanded: true
                    })
                }
            },

            generatePath (item, subItem) {
                return `${item.component ? item.path + '/' : ''}${subItem.path}`
            },

            findParentFromMenu (route) {
                const menu = this.menu
                for (let i = 0, l = menu.length; i < l; i++) {
                    const item = menu[i]
                    const k = item.children && item.children.length
                    if (k) {
                        for (let j = 0; j < k; j++) {
                            if (item.children[j].name === route.name) {
                                return item
                            }
                        }
                    }
                }
            }
        },

        watch: {
            $route (route) {
                this.isReady = true
                this.shouldExpandMatchItem(route)
            }
        }

    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import '~bulma/sass/utilities/variables';
    @import '~bulma/sass/utilities/mixins';

    .app-sidebar {
        position: fixed;
        top: 50px;
        left: 0;
        bottom: 0;
        padding: 20px 0 50px;
        width: 180px;
        min-width: 45px;
        max-height: 100vh;
        height: calc(100% - 50px);
        z-index: 1024 - 1;
        background: #FFF;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        overflow-y: auto;
        overflow-x: hidden;

        @include mobile() {
            transform: translate3d(-180px, 0, 0);
        }

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