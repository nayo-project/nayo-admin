<template>
    <div class="user-status">
        <div class="left">
            <div class="bread">
                <breadcrumb></breadcrumb>
            </div>
        </div>
        <div class="right">
            <div class="full-screen">
                <full-screen></full-screen>
            </div>
            <div class="avatar">
                <avatar></avatar>
            </div>
        </div>
    </div>
</template>

<script>
    import fullScreen from "./components/full-screen"
    import avatar from "./components/avatar"
    import breadcrumb from "./components/breadcrumb"
    export default {
        components: {
            fullScreen,
            avatar,
            breadcrumb
        }
    }
</script>

<style lang="less">
    .user-status {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;

        .left {
            display: flex;
            flex: 0 0 auto;
        }

        .right {
            display: flex;
        }

        .full-screen {
            flex: 0 0 auto;
            margin-right: 20px;
        }
    }
</style>