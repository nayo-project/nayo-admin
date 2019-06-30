<template>
    <div class="sample-count">
        <Card :bordered="false" dis-hover :padding="0">
            <div class="left" :style="back_color">
                <Icon :type="icon" size="50" color="#fff"></Icon>
            </div>
            <div class="right"></div>
        </Card>
    </div>
</template>

<script>
    import _ from "underscore";
    import { CountUp } from "countup.js";
    export default {
        props: {
            icon: {},
            color: {}
        },
        computed: {
            back_color() {
                return `background-color: ${this.color};`;
            }
        },
        mounted() {
            let count_up = new CountUp(this.$el.childNodes[0].childNodes[4].childNodes[1], _.random(10000, 99999));
            count_up.start();
        }
    }
</script>

<style lang="less">
    .sample-count {
        flex: 0 0 auto;
        display: flex;
        position: relative;
        height: 100px;
        width: 100%;

        .ivu-card {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;

            .ivu-card-body {
                flex: 0 0 auto;
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;

                .left {
                    flex: 0 0 auto;
                    display: flex;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    justify-content: center;
                    align-items: center;
                }
                .right {
                    flex: 1 0 auto;
                    display: flex;
                    position: relative;
                    font-size: 40px;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>