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
        },
        mounted() {
            console.log(this.$nayo)
            console.log(this.$nayo.time.moment("20111031", "YYYYMMDD").fromNow())
            this.$nayo.axios.get("https://www.easy-mock.com/mock/5ccee7ded9699f18dbd891c1/nayo-admin/bar").then(v => {
                console.log(v)
            })
        }
    }
</script>

<style lang="less">
    .lang-sample-row {
        min-width: 970px;
    }
</style>