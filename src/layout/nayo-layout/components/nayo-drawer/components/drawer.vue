<template>
    <div class="drawer-wrap">
        <Drawer placement="left" :closable="false" v-model="switch_onoff" width="230">
            <Sider width="230" class="sider">
                <div class="logo"></div>
                <nayo-menu @route_change="route_change"></nayo-menu>
            </Sider>
        </Drawer>
    </div>
</template>

<script>
    import nayoMenu from "./../../nayo-menu";
    export default {
        components: {
            nayoMenu
        },
        data() {
            return {
                switch_onoff: false
            }
        },
        methods: {
            route_change() {
                this.switch_onoff = false;
            },
            show_drawer() {
                this.switch_onoff = true;
            },
            close_drawer() {
                this.switch_onoff = false;
            }
        }
    }
</script>

<style lang="less">
    .drawer-wrap {
        display: flex;
        position: relative;
        width: 100%;
        min-height: 200px;
        padding: 10px 0 10px 0;
        background-color: #fff;
    }
    .ivu-drawer-body {
        padding: 0 !important;

        .sider {
            flex: 0 0 auto;
            position: fixed;
            height: 100vh;
            left: 0;
            overflow: auto;
            z-index: 101;
            transition: ease .2s;

            .logo {
              width: 100%;
              height: 100px;
              background-image: url("./../../../../../assets/logo.jpg");
              background-size: 65%;
              background-repeat: no-repeat;
              background-position: center center;
            }
        }
    }
</style>