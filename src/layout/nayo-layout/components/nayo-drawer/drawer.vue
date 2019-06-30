<template>
    <div class="nayo-drawer-wrap">
        <div class="left"><Icon type="md-menu" size="30" @click="show_drawer"/></div>
        <div class="right"><avatar></avatar></div>
        <div class="drawer"><drawer ref="drawer"></drawer></div>
    </div>
</template>

<script>
    import avatar from "./components/avatar";
    import drawer from "./components/drawer";
    export default {
        components: {
            avatar,
            drawer
        },
        methods: {
            init_listener() {
                window.addEventListener("resize", this.suit_the_window);
            },
            show_drawer() {
                this.$refs["drawer"].show_drawer();
            },
            close_drawer() {
                if (this.$refs["drawer"]) {
                    this.$refs["drawer"].close_drawer();
                }
            },
            suit_the_window(event) {
                let _change_width = 576;
                if (document.body.clientWidth > 576) {
                    this.close_drawer();
                }
            }
        },
        mounted() {
            this.init_listener();
        }
    }
</script>

<style lang="less">
    .nayo-drawer-wrap {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 25px 0 25px;
        justify-content: space-between;
        align-items: center;

        .left {
            cursor: pointer;
        }

        .right {}

        .drawer {
            position: absolute;
        }
    }
</style>