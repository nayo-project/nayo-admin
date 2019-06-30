<template>
    <Tooltip content="全屏">
        <Icon :type="icon_type" size="23" style="cursor: pointer" @click="switch_full"/>
    </Tooltip>
</template>

<script>
    import { full_screen, is_full_screen } from "@/utils";
    export default {
        data() {
            return {
                current_status: false,
                icon_type: "md-expand"
            }
        },
        watch: {
            current_status(val) {
                if (val) {
                    this.icon_type = "md-contract";
                } else {
                    this.icon_type = "md-expand";
                }
            }
        },
        methods: {
            switch_full() {
                this.current_status = !is_full_screen();
                full_screen(this.current_status, document.documentElement);
            }
        }
    }
</script>

<style lang="less">
</style>