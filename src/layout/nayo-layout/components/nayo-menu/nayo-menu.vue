<template>
    <Menu ref="nayo-menu" :active-name="active_menu_name" :open-names="active_open_name" theme="dark" width="auto"  @on-select="menu_change">
        <nayo-menu :is="menu_type(meta)" :meta="meta" v-for="(meta, key) in menu_list" :key="key"></nayo-menu>
    </Menu>
</template>

<script>
    import nayoMenuItem from "./nayo-menu-item";
    import nayoSubMenuItem from "./nayo-sub-menu";
    export default {
        components: {
            nayoMenuItem,
            nayoSubMenuItem
        },
        data() {
            return {
                active_menu_name: null,
                active_open_name: [],
                menu_list: []
            }
        },
        methods: {
            menu_change(menu_name) {
                this.active_menu_name = menu_name;
            },
            init_active_menu() {
                let _first_active_route_path = "/";
                let _first_active_route_tag = null;
                let _first_open_route_name = null
                // when the url path is "/", if the route meta's "active" is true, the router will push to this route, if all route meta don's have the active, the router will push to the first route meta
                if (this.$route.path == "/") {
                    for (let route_meta of this.menu_list) {
                        if (Object.keys(route_meta).includes("children")) {
                            for (let child of route_meta.children) {
                                if (child.active) {
                                    _first_active_route_path = `${child.to}`;
                                    _first_active_route_tag = child.name;
                                    _first_open_route_name = route_meta.name;
                                }
                            }
                        } else {
                            if (route_meta.active) {
                                _first_active_route_path = route_meta.path;
                                _first_active_route_tag = route_meta.name;
                            }
                        }
                    }
                    // after finding the active route meta, if first_active_route does not exist, will do this next
                    if (_first_active_route_tag == null && this.menu_list[0]) {
                        if (Object.keys(this.menu_list[0]).includes("children")) {
                            if (this.menu_list[0].children[0]) {
                                _first_active_route_path = `${this.menu_list[0].children[0].to}`;
                                _first_active_route_tag = this.menu_list[0].children[0].name;
                                _first_open_route_name = this.menu_list[0].name;
                            }
                        } else {
                            _first_active_route_path = this.menu_list[0].path;
                            _first_active_route_tag = this.menu_list[0].name;
                        }
                    }
                    this.$router.replace(_first_active_route_path);
                } else {
                    _first_active_route_path = this.$route.path;
                    for (let menu_meta of this.menu_list) {
                        if (Object.keys(menu_meta).includes("children")) {
                            for (let child_meta of menu_meta.children) {
                                if (child_meta.pathReg.test(this.$route.path)) {
                                    _first_active_route_tag = child_meta.name;
                                    _first_open_route_name = menu_meta.name;
                                    break;
                                }
                            }
                        } else {
                            if (menu_meta.pathReg.test(this.$route.path)) {
                                _first_active_route_tag = menu_meta.name;
                                break;
                            }
                        }
                    }
                }
                if (!_first_active_route_tag) {
                    this.$router.replace("/");
                }
                if (_first_open_route_name) {
                    this.active_open_name = [ _first_open_route_name ];
                } else {
                    this.active_open_name = [];
                }
                this.active_menu_name = _first_active_route_tag;
            },
            init_menu_create() {
                this.init_menu_meta();
                this.init_active_menu();
            },
            init_menu_meta() {
                let _route_meta_info = this.$store.state.__router_info__;
                let _routers = [];
                for (let router_meta of _route_meta_info) {
                    let _temp = {};
                    if (!Object.keys(router_meta).includes("independent") && !router_meta.independent) {
                        if (Object.keys(router_meta).includes("children")) {
                            _temp.name = router_meta.name ? `${router_meta.name}` : null;
                            _temp.path = router_meta.path ? `${router_meta.path}` : null;
                            _temp.icon = router_meta.icon ? router_meta.icon : null;
                            if (router_meta.active) {
                                _temp.active = router_meta.active;
                            }
                            _temp.children = [];
                            for (let children of router_meta.children) {
                                let _temp_children = {};
                                _temp_children.name = children.name ? `${children.name}` : null;
                                _temp_children.icon = children.icon ? children.icon : null;
                                _temp_children.to = `${_temp.path}${children.path}`;
                                _temp_children.pathReg = children.pathReg ? children.pathReg : null;
                                if (children.active) {
                                    _temp_children.active = children.active;
                                }
                                _temp.children.push(_temp_children);
                            }
                        } else {
                            _temp.name = router_meta.name ? `${router_meta.name}` : null;
                            _temp.path = router_meta.path ? `${router_meta.path}` : null;
                            _temp.icon = router_meta.icon ? router_meta.icon : null;
                            _temp.to = router_meta.path ? `${router_meta.path}` : null;
                            _temp.pathReg = router_meta.pathReg ? router_meta.pathReg : null;
                            if (router_meta.active) {
                                _temp.active = router_meta.active;
                            }
                        }
                        _routers.push(_temp);
                    }
                }
                this.menu_list = _routers;
            },
            menu_type(router_meta) {
                if (Object.keys(router_meta).includes("children")) {
                    return "nayoSubMenuItem";
                } else {
                    return "nayoMenuItem";
                }
            },
        },
        watch: {
            "$route"(route) {
                this.init_menu_create();
                this.$nextTick(() => {
                    this.$refs["nayo-menu"].updateOpened();
                    this.$emit("route_change", route);
                });
            }
        },
        created() {
            this.init_menu_create();
        }
    }
</script>

<style lang="less">
</style>