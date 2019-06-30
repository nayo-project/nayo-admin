/*
* components
* */
import barComponent from "./bar/bar";
import circleComponent from "./circle/circle";
import countComponent from "./count/count";
import weatherComponent from "./weather/weather";
export const barSample = barComponent;
export const circleSample = circleComponent;
export const countSample = countComponent;
export const weatherSample = weatherComponent;
/*Async*/
export const stockSample = (resolve) => require(["./stock/stock.vue"], resolve)