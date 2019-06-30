<template>
    <Card :bordered="false" dis-hover>
        <div id="sample-circle"></div>
    </Card>
</template>

<script>
    import G2 from '@antv/g2';
    import {DataSet} from "@antv/data-set";
    import axios from "axios";
    import { circle_url } from "../../api";

    export default {
        data() {
            return {}
        },
        methods: {
            get_circle_data() {
                return new Promise((resolve, reject) => {
                    axios.get(circle_url).then(ret => {
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
                let text = ['MIDNIGHT', '3 AM', '6 AM', '9 AM', 'NOON', '3 PM', '6 PM', '9 PM'];
                let _data = [];
                for (let i = 0; i < 24; i++) {
                    let item = {};
                    item.type = i + '';
                    item.value = 10;
                    _data.push(item);
                }
                let dv = new DataSet.DataView();
                dv.source(_data).transform({
                    type: "percent",
                    field: "value",
                    dimension: "type",
                    as: "percent"
                });
                let chart = new G2.Chart({
                    container: "sample-circle",
                    forceFit: true,
                    height: 366,
                    padding: 80
                });
                chart.legend(false);
                chart.tooltip({
                    showTitle: false
                });
                let _bg_view = chart.view();
                _bg_view.coord("theta", {
                    innerRadius: 0.9
                });
                _bg_view.source(dv);
                _bg_view.intervalStack().position("percent").color("type", ["rgba(255, 255, 255, 0)"]).style({
                    stroke: "#444",
                    lineWidth: 1
                }).tooltip(false).select(false);
                _bg_view.guide().text({
                    position: ["50%", "50%"],
                    content: "24 hours",
                    style: {
                        lineHeight: "240px",
                        fontSize: "30",
                        fill: "#262626",
                        textAlign: "center"
                    }
                });
                //
                let _interval_view = chart.view();
                _interval_view.source(_data);
                _interval_view.coord("polar", {
                    innerRadius: 0.9
                });
                _interval_view.axis(false);
                _interval_view.interval().position("type*value").size("type", (val) => {
                    if (val % 3 == 0) {
                        return 4;
                    } else {
                        return 0;
                    }
                }).color("#444").tooltip(false).label("type", (val) => {
                    if (val % 3 == 0) {
                        return text[val / 3]
                    } else {
                        return "";
                    }
                }, {
                    offset: 15,
                    textStyle: {
                        fontSize: 12,
                        fontWeight: "bold",
                        fill: "#bfbfbf"
                    }
                });
                //
                let user_dv = new DataSet.DataView();
                user_dv.source(data).transform({
                    type: "percent",
                    field: "value",
                    dimension: "type",
                    as: "percent"
                });
                let _pie_view = chart.view();
                _pie_view.source(user_dv, {
                    percent: {
                        formatter: (val) => {
                            return `${(val * 100).toFixed(2)}%`
                        }
                    }
                });
                _pie_view.coord("theta", {
                    innerRadius: 0.75
                });
                _pie_view.intervalStack().position("percent").color("type").label("type", {
                    offset: 30
                }).select(false);

                chart.render();
            }
        },
        mounted() {
            this.get_circle_data().then(ret => {
                this.draw_pic(ret);
            }).catch(e => {
                console.log(e);
            });
        }
    }
</script>

<style lang="less">
    #sample-circle {
        width: 100%;
        height: 100%;
    }
</style>