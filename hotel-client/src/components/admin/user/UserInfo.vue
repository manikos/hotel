<template>
    <transition name="modal">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">

                <div class="notification">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <div class="box">
                                    <p>
                                        <strong>{{user.first_name}} {{user.last_name}}</strong>
                                        <small>@{{user.username}}</small>
                                        <br>
                                        <strong>Last login</strong>
                                        <small>{{user.last_login}}</small>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores
                                        atque
                                        aut deleniti deserunt dolorem dolorum enim est eum facilis laboriosam,
                                        maiores
                                        odio
                                        recusandae repellendus sequi voluptates, voluptatibus! Eos, sint.Lorem ipsum
                                        dolor
                                        sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                                        fringilla
                                        egestas. Nullam condimentum luctus turpis.
                                    </p>
                                </div>
                            </div>
                            <nav class="level">
                                <div class="level-left">
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
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

<style>

    .modal {
        opacity: 1;
        /*transition: opacity .377s ease;*/
    }

    .modal-content {
        transform: scale(1);
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     * TODO: export classes to seperate transitions.scss file
     */
    .modal-enter,
    .modal-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0;
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: opacity .377s ease; /*i can remove it from here ad put it in .modal class*/
    }

    .modal-enter .modal-content, /*FIXME add .modal-close class using scss*/
    .modal-leave-to .modal-content /* .fade-leave-active in <2.1.8 */
    {
        transform: scale(1.1);
    }

    .modal-enter-active .modal-content, /*FIXME add .modal-close class using scss*/
    .modal-leave-active .modal-content /* .fade-leave-active in <2.1.8 */
    {
        transition: all .377s;
    }

    /*-----------------------------------------------------------------*/

    /*.modal-enter .modal-content, !*FIXME add .modal-close class using scss*!*/
    /*.modal-leave-to .modal-content !* .fade-leave-active in <2.1.8 *! {*/
    /*-webkit-transform: scale(1);*/
    /*transform: scale(1);*/
    /*}*/

    /*.modal-enter-active .modal-content,*/
    /*.modal-leave-active .modal-content {*/
    /*transition: all .377s ease;*/
    /*}*/

</style>

