<template>
    <MenuItem :name="meta.name" :to="meta.to">
        <Icon :custom="meta.icon" v-if="meta.icon"></Icon>
        <span>{{ meta.name }}</span>
    </MenuItem>
</template>

<script>
    export default {
        props: {
            meta: {}
        }
    }
</script>

<style lang="less">
</style>