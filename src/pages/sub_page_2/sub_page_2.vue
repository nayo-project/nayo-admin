<template>
    <div class="sub_index_2_wrap">
        <div class="sub_index_2_title">{{ title }}</div>
        <div class="sub_index_2_content">{{ content }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                content: ""
            }
        },
        mounted() {
            if (!this.$route.params.id || (isNaN(parseInt(this.$route.params.id)) && this.$route.params.id != "default")) {
                this.$router.push("/index/sub_index_2/default");
                this.title = "这是子页面2的默认页";
                this.content = "由于子页面2的路由是动态路由，需要进行页面组件内的导航，请尝试更改sub_index_2后边的default值，刷新路由，你会有新的发现";
            } else if (this.$route.params.id == "default") {
                this.title = "这是子页面2的默认页";
                this.content = "由于子页面2的路由是动态路由，需要进行页面组件内的导航，请尝试更改sub_index_2后边的default值，刷新路由，你会有新的发现";
            } else {
                this.title = "这是子页面2的匹配页";
                this.content = `id对应的值为${this.$route.params.id}`;
            }
        }
    }
</script>

<style lang="less">
    .sub_index_2_wrap {
        display: flex;
        position: relative;
        flex-direction: column;

        .sub_index_2_title {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .sub_index_2_content {
            font-size: 14px;
        }
    }
</style>