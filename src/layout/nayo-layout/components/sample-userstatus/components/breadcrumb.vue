<template>
    <Breadcrumb>
        <BreadcrumbItem v-for="(item, key) in gen_bread" :key="key"><Icon :custom="item.icon" v-if="item.icon"></Icon> {{ item.name }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
    export default {
        computed: {
            gen_bread() {
                let _current_route_info = [];
                let _current_route_path = this.$route.path;
                for (let route_info of this.$store.state.__router_info__) {
                    let _temp = {
                        icon: "",
                        name: ""
                    }
                    if (Object.keys(route_info).includes("children")) {
                        for (let child_route_info of route_info["children"]) {
                            let _child_temp = {
                                icon: "",
                                name: ""
                            };
                            if (child_route_info.pathReg.test(_current_route_path)) {
                                _temp.icon = route_info.icon;
                                _temp.name = route_info.name;
                                _current_route_info.push(_temp);
                                _child_temp.icon = child_route_info.icon;
                                _child_temp.name = child_route_info.name;
                                _current_route_info.push(_child_temp);
                                break;
                            }
                        }
                    } else {
                        if (route_info.pathReg.test(_current_route_path)) {
                            _temp.icon = route_info.icon;
                            _temp.name = route_info.name;
                            _current_route_info.push(_temp);
                            break;
                        }
                    }
                }
                return _current_route_info;
            }
        }
    }
</script>

<style lang="less">
</style>