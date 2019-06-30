<template>
    <div class="sample-grid">
        <Row :gutter="48" type="flex" class-name="row-1">
            <Col :xl="6" :md="12" :xs="24" :span="12" class-name="col-1-1"><countSample color="#9E7A7A" icon="md-cube"></countSample></Col>
            <Col :xl="6" :md="12" :xs="24" :span="12" class-name="col-1-2"><countSample color="#58B2DC" icon="ios-bowtie"></countSample></Col>
            <Col :xl="6" :md="12" :xs="24" :span="12" class-name="col-1-3"><countSample color="#8A6BBE" icon="md-cloudy-night"></countSample></Col>
            <Col :xl="6" :md="12" :xs="24" :span="12" class-name="col-1-4"><countSample color="#E03C8A" icon="logo-freebsd-devil"></countSample></Col>
        </Row>
        <Row :gutter="48" type="flex" class-name="row-2">
            <Col :xl="6" :xs="24" :span="24" class-name="col-2-1"><circleSample></circleSample></Col>
            <Col :xl="18" :xs="24" :span="24" class-name="col-2-2"><stockSample></stockSample></Col>
        </Row>
        <Row :gutter="48" type="flex" class-name="row-3">
            <Col :xl="12" :xs="24" :span="24" class-name="col-3-1"><weatherSample></weatherSample></Col>
            <Col :xl="12" :xs="24" :span="24" class-name="col-3-2"><barSample></barSample></Col>
        </Row>
    </div>
</template>

<script>
    import { barSample, circleSample, countSample, weatherSample, stockSample } from "./components";

    export default {
        components: {
            stockSample,
            weatherSample,
            circleSample,
            barSample,
            countSample
        }
    }
</script>

<style lang="less">
    .sample-grid {
        width: 100%;
        height: 100%;
        .row-1 {
            .col-1-1, .col-1-2, .col-1-3, .col-1-4 {
                margin: 30px 0 30px 0;
                height: 100px;
            }
        }

        .row-2 {
            .col-2-1, .col-2-2 {
                margin: 30px 0 30px 0;
                height: 400px;
            }
        }

        .row-3 {
            .col-3-1, .col-3-2 {
                margin: 30px 0 30px 0;
                height: 300px;
            }
        }
    }
    .ivu-card {
        overflow: hidden;
    }
</style>