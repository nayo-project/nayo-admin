<template>
    <Card :bordered="false" dis-hover>
        <div id="sample-weather"></div>
    </Card>
</template>

<script>
    import G2 from '@antv/g2';
    import {DataSet} from "@antv/data-set";
    import axios from "axios";
    import { weather_url } from "../../api";

    export default {
        data() {
            return {}
        },
        methods: {
            get_weather() {
                return new Promise((resolve, reject) => {
                    axios.get(weather_url).then(ret => {
                        if (ret.data.code == 200) {
                            resolve(ret.data.data);
                        } else {
                            reject(false);
                        }
                    }).catch(e => {
                        reject(false);
                    });
                });
            },
            draw_pic(data) {
                let chart = new G2.Chart({
                    container: "sample-weather",
                    forceFit: true,
                    animate: true,
                    height: 266,
                    padding: [10, 40, 40, 40]
                });
                chart.source(data, {
                    month: {
                        type: "cat",
                        range: [0, 1]
                    }
                });
                chart.tooltip({
                    crosshairs: {
                        type: "line"
                    }
                });
                chart.axis("temperature", {
                    label: {
                        formatter(text, item, index) {
                            return `${text}℃`;
                        }
                    }
                });
                chart.line().position("month*temperature").color("city", "#7aacff-#8e7aff");
                chart.point().position('month*temperature').color('city', "#7aacff-#8e7aff").size(5).shape('circle').style({
                    stroke: '#fff',
                    lineWidth: 1
                });
                chart.render();
            }
        },
        mounted() {
            this.get_weather().then(ret => {
                this.draw_pic(ret);
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="less">
    #sample-weather {
        width: 100%;
        height: 100%;
    }
</style>