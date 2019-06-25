<template>
<nav>
    <v-toolbar flat app class="cyan">
        <v-toolbar-side-icon class="red--text hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase white--text">
            <v-avatar size="40" class="grey lighten-2">
                <img  src="./../img/logo.jpg" alt="">
            </v-avatar>
                <span class="font-weight-bold mx-2 white--text white--text hidden-xs-only">Fire Elephant CMU - ช้างไฟ</span>
        </v-toolbar-title>

        <v-btn class="hidden-sm-and-down" fluid flat v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
                <v-icon right class="white--text">{{link.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-contant>
                <v-list-tile-title left class="white--text">
                    {{link.text}}
                </v-list-tile-title>
            </v-list-tile-contant>
        </v-btn>

        <v-spacer></v-spacer>
        <span>
            <h3 class="white--text hidden-xs-only">Contact Us</h3>
        </span>
        <v-btn  fab small flat color="gray" href="https://www.facebook.com/Fire-Elephant-CMU-%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%9F-406828930104568/">
            <img src="./../img/facebook.png">
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawer" class="gray-lighten">
        <v-layout column align-center>

        </v-layout>

        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-tile-action>
                    <v-icon class="grey--text">{{link.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-contant>
                    <v-list-tile-title class="grey--text">
                        {{link.text}}
                    </v-list-tile-title>
                </v-list-tile-contant>
            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
</nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {
                    icon: 'place',
                    text: 'Map',
                    route: '/'
                },
                {
                    icon: 'people',
                    text: 'ผู้จัดทำ',
                    route: '/team'
                },

            ]
        }
    }
}
</script>
