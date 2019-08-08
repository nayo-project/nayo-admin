<template>
    <Submenu :name="meta.name">
        <template slot="title">
            <Icon :custom="meta.icon" v-if="meta.icon"></Icon>
            <span>{{ meta.name }}</span>
        </template>
        <nayoMenuItem :meta="children_meta" v-for="(children_meta, key) in meta.children" :key="key"></nayoMenuItem>
    </Submenu>
</template>

<script>
    import nayoMenuItem from "./nayo-menu-item";
    export default {
        props: {
            meta: {}
        },
        components: {
            nayoMenuItem
        }
    }
</script>

<style lang="less">
</style>