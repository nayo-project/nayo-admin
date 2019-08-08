<template>
    <Row type="flex" class-name="lang-sample-row">
        <Col span="12">
            <selectSample></selectSample>
        </Col>
    </Row>
</template>

<script>
    import { selectSample } from "./components";
    export default {
        components: {
            selectSample
        }
    }
</script>

<style lang="less">
    .lang-sample-row {
        min-width: 970px;
    }
</style>