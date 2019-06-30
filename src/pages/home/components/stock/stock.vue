<template>
  <Card :bordered="false" dis-hover>
    <div id="sample-stock"></div>
  </Card>
</template>

<script>
  import G2 from '@antv/g2';
  import {DataSet} from "@antv/data-set";
  import axios from "axios";
  import { stock_url } from "../../api";

  export default {
    data() {
      return {}
    },
    methods: {
      get_stock_data() {
        return new Promise((resolve, reject) => {
          axios.get(stock_url).then(ret => {
            if (ret.data.code == 200) {
              for (let item of ret.data.data) {
                item.date = new Date(item.date).getTime();
                item.open = parseFloat(item.open);
                item.close = parseFloat(item.close);
                item.high = parseFloat(item.hight);
                delete item.hight;
                item.low = parseFloat(item.low);
              }
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
        let ds = new DataSet({
          state: {
            start: 1546272000000,
            end: 1556467200000
          }
        });
        let dv = ds.createView();
        dv.source(data).transform({
          type: "filter",
          callback: (obj) => {
            let date = obj.date;
            return date <= ds.state.end && date >= ds.state.start;
          }
        }).transform({
          type: "map",
          callback: (obj) => {
            let _date = new Date(obj.date);
            obj.date = `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDate()}`;
            obj.trend = obj.open <= obj.close ? "上涨" : "下跌";
            obj.range = [obj.open, obj.close, obj.high, obj.low]
            return obj;
          }
        });
        let chart = new G2.Chart({
          container: "sample-stock",
          forceFit: true,
          height: 366,
          animate: true,
          padding: [10, 40, 40, 40]
        });
        chart.source(dv, {
          date: {
            type: "timeCat",
            nice: false,
            range: [0, 1]
          },
          open: {
            alias: "开盘价"
          },
          close: {
            alias: "收盘价"
          },
          high: {
            alias: "最高价"
          },
          low: {
            alias: "最低价"
          },
          range: {
            alias: "股票价格",
            tickCount: 5
          }
        });
        chart.tooltip({
          showTitle: false,
          itemTpl: '<li data-index={index}>' + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' + '{name}{value}</li>'
        })
        chart.schema().position("date*range").color("trend", (val) => {
          if (val == "上涨") {
            return "#f04864";
          }
          if (val == "下跌") {
            return "#2fc25b";
          }
        }).shape("candle").tooltip("date*open*close*high*low", (date, open, close, high, low) => {
          return {
            name: date,
            value: '<br><span style="padding-left: 16px">开盘价：' + open + '</span><br/>' + '<span style="padding-left: 16px">收盘价：' + close + '</span><br/>' + '<span style="padding-left: 16px">最高价：' + high + '</span><br/>' + '<span style="padding-left: 16px">最低价：' + low + '</span>'
          };
        });
        chart.render();
      }
    },
    mounted() {
      this.get_stock_data().then(ret => {
        this.draw_pic(ret);
      }).catch(e => {
        console.log(e)
      });
    }
  }
</script>

<style lang="less">
  #sample-stock {
    width: 100%;
    height: 100%;
  }
</style>
