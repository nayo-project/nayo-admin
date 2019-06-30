<template>
    <div class="nayo-layout">
        <Layout>
            <Sider width="230" class="sider">
                <div class="logo"></div>
                <nayo-menu></nayo-menu>
            </Sider>
            <Header class="header_1">
                <!-- components that you want to add -->
                <!-- here is the example -->
                <sample-userstatus></sample-userstatus>
            </Header>
            <Header class="header_2">
                <nayo-drawer></nayo-drawer>
            </Header>
            <Content class="content">
                <router-view>main-content</router-view>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        components: {
            "nayo-menu": (resolve) => require(["./components/nayo-menu"], resolve),
            "sample-userstatus": (resolve) => require(["./components/sample-userstatus"], resolve),
            "nayo-drawer": (resolve) => require(["./components/nayo-drawer"], resolve)
        }
    }
</script>

<style lang="less">
    @changeWidth: 576px;

    @media screen and (max-width: @changeWidth) {
        .nayo-layout {
            .sider {
                display: none;
            }

            .header_1 {
                display: none;
            }

            .header_2 {
                display: block !important;
            }

            .content {
                padding: 74px 16px 16px 16px !important;
            }
        }
    }

    .nayo-layout {
        position: relative;
        display: flex;


        .logo {
          width: 100%;
          height: 100px;
          background-image: url("./../../assets/logo.jpg");
          background-size: 65%;
          background-repeat: no-repeat;
          background-position: center center;
        }



        .sider {
            flex: 0 0 auto;
            position: fixed;
            height: 100vh;
            left: 0;
            overflow: auto;
            z-index: 101;
            transition: ease .2s;
        }

        .header_1 {
            flex: 0 0 auto;
            position: fixed;
            width: 100%;
            height: 54px;
            line-height: 54px;
            padding: 0 50px 0 280px;
            background: #ffffff;
            box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
            z-index: 100;
        }

        .header_2 {
            flex: 0 0 auto;
            display: none;
            position: fixed;
            width: 100%;
            height: 64px;
            line-height: 54px;
            padding: 0;
            background: #ffffff;
            box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
            z-index: 100;
        }

        .content {
            flex: 0 0 auto;
            display: flex;
            position: absolute;
            width: 100%;
            min-height: 100vh;
            padding: 74px 16px 16px 246px;
            z-index: 10;
            transition: ease .2s;
            background-color: #f5f7f9;
        }
    }
    .menu-item  {
        span {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }

        i {
            transform: translateX(0px);
            vertical-align: middle;
            font-size: 16px;
        }
    }
    .ivu-avatar-string {
        margin: auto;
        left: 0 !important;
        right: 0 !important;
    }
</style>