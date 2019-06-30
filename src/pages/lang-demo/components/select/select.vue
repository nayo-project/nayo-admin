<template>
    <div class="lang-demo-wrap">
        <Card :bordered="false" dis-hover>
            <Row type="flex" class-name="row-1">
                <Col span="12">
                    <Select v-model="$i18n.locale">
                        <Option v-for="(item, key) in languageList" :value="item.key" :key="key">{{ item.value }}</Option>
                    </Select>
                </Col>
            </Row>
            <Row type="flex" class-name="row-2">{{ $t("lang_sample.hello", $i18n.local) }}</Row>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                languageList: [
                    { key: "en", value: "English" },
                    { key: "cn", value: "中文" },
                    { key: "jp", value: "日本語" },
                    { key: "kr", value: "한국어" },
                    { key: "fr", value: "Français" }
                ]
            }
        }
    }
</script>

<style lang="less">
    .lang-demo-wrap {
        .row-1 {
            height: 50px;
            margin-top: 30px;
            margin-bottom: 30px;
            align-items: center;
        }
        .row-2 {
            height: 70px;
            margin-top: 30px;
            margin-bottom: 30px;
            align-items: center;
            font-size: 25px;
        }
    }
</style>