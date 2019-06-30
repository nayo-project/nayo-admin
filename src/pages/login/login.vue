<template>
    <div class="nayo-admin-login">
        <div class="backgroud"></div>
        <div class="login">
            <Row type="flex" justify="center">
                <div class="logo"></div>
            </Row>
            <Row>
                <Form ref="login" :model="form_data">
                    <Row>
                        <FormItem prop="user">
                            <Input type="text" v-model="form_data.username" placeholder="用户名">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                    </Row>
                    <Row>
                        <FormItem prop="password">
                            <Input type="password" v-model="form_data.password" placeholder="密码">
                                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                    </Row>
                    <Row justify="center" type="flex" style="margin-bottom: 5px;">
                        <span>默认账号: admin  默认密码: 随意输入</span>
                    </Row>
                    <Row justify="center" type="flex">
                        <FormItem>
                            <Button id="login" type="primary" @click="login" @keyup="login">登录</Button>
                        </FormItem>
                    </Row>
                </Form>
            </Row>
        </div>
        <div class="author">
            <span>Illustrator:<a href="https://space.bilibili.com/29308962" target="_blank">渺渺</a></span>
            <span>copyright @渺渺，禁止商业使用</span>
        </div>
    </div>
</template>

<script>
    import { login } from "./api";
    export default {
        data() {
            return {
                form_data: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            init() {
                document.addEventListener("keyup", this.login_event);
            },
            login_event(event) {
                if (event.keyCode == 13) {
                    this.login();
                }
            },
            remove_listener() {
                document.removeEventListener("keyup", this.login_event);
            },
            login() {
                login(this.form_data).then(ret => {
                    if (ret) {
                        this.$Message.success({
                            content: "登录成功"
                        })
                        this.$Loading.start();
                        setTimeout(() => {
                            this.remove_listener();
                            this.$router.push("/");
                        }, 1000);
                    } else {
                        this.$Message.error({
                            content: "登录失败"
                        })
                    }
                })
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style lang="less">
    .nayo-admin-login {
        flex: 0 0 auto;
        display: flex;
        position: relative;
        height: 100%;
        width: 100%;

        .backgroud {
            flex: 0 0 auto;
            display: flex;
            position: fixed;
            height: 100%;
            width: 100%;
            background-image: url("../../assets/background.jpg");
            background-size: cover;
        }

        @media screen and (max-width: 576px) {
            .login {
                left: 0 !important;
                right: 0 !important;
            }

            .author {
                margin: auto;
                left: 0 !important;
                right: 0 !important;
            }
        }

        .login {
            flex: 0 0 auto;
            display: flex;
            position: absolute;
            margin: auto;
            padding: 0 55px 0 55px;
            width: 350px;
            height: 380px;
            top: 20vh;
            right: 150px;
            justify-content: center;
            flex-direction: column;
            border-radius: 10px;
            background-color: hsla(0,0%,100%,.25);

            &:before {
                content: "";
                position: absolute;
                width: 350px;
                height: 380px;
                left: 0;
                border-radius: 10px;
                box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
            }
            
            .logo {
                position: relative;
                width: 190px;
                height: 70px;
                left: -5px;
                margin-top: 15px;
                margin-bottom: 30px;
                background-image: url("../../assets/logo.jpg");
                background-size: 190px 60px;
                background-repeat:no-repeat;
            }
        }

        .author {
            display: flex;
            position: absolute;
            width: 300px;
            height: 100px;
            top: 80vh;
            right: 90px;
            color: #fff;
            font-size: 16px;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            a {
                color: #fff;
            }
        }
    }
</style>