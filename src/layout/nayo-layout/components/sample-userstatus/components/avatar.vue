<template>
    <Dropdown trigger="click">
        <Avatar size="large" style="cursor: pointer; background: #2d8cf0;">Admin</Avatar>
        <DropdownMenu slot="list">
            <DropdownItem @click.native="logout">退出</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    import Cookie from "js-cookie";
    export default {
        methods: {
            logout() {
                Cookie.remove("username");
                window.location.reload();
            }
        }
    }
</script>

<style lang="less">
</style>