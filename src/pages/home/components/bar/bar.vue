<template>
    <Card :bordered="false" dis-hover>
        <div id="sample-bar"></div>
    </Card>
</template>

<script>
    import G2 from '@antv/g2';
    import {DataSet} from "@antv/data-set";
    import axios from "axios";
    import { bar_url } from "../../api";

    export default {
        data() {
            return {}
        },
        methods: {
            get_bar_data() {
                return new Promise((resolve, reject) => {
                    axios.get(bar_url).then(ret => {
                        if (ret.data.code == 200) {
                            resolve(ret.data.data);
                        } else {
                            reject(false);
                        }
                    }).catch(e => {
                        reject(false);
                    })
                });
            },
            draw_pic(data) {
                let chart = new G2.Chart({
                    container: "sample-bar",
                    forceFit: true,
                    height: 266
                });
                chart.source(data);
                chart.scale("sales", {
                    tickInterval: 20
                });
                chart.interval().position("year*sales");
                chart.render();
            }
        },
        mounted() {
            this.get_bar_data().then(ret => {
                this.draw_pic(ret);
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="less">
    #sample-bar {
        width: 100%;
        height: 100%;
    }
</style>