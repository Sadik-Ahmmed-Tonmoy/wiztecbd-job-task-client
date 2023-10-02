import React from "react";
import { Breadcrumb, Layout, Menu, Radio, Slider, theme } from "antd";
import { Outlet } from "react-router-dom";
import banner from "../../assets/Banner/banner.png";
import Navbar from "../../Components/Navbar/Navbar";
import SliderMenu from "../../Components/SliderMenu/SliderMenu";

const { Header, Content, Sider } = Layout;

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Layout className="min-h-screen bg-white">
        <Header
          className="h-40 bg-transparent bg-fixed"
          style={{ backgroundImage: `url('${banner}')` }}
        >
          <div className="container mx-auto flex items-center h-full">
            <div>
              <Breadcrumb
                separator=">"
                items={[
                  {
                    title: "Healthcare & Beauty",
                    href: "",
                  },
                  {
                    title: "Skin Care",
                    href: "",
                  },
                ]}
              />
              <h3 className="text-3xl font-semibold">Skin Care Products</h3>
            </div>
          </div>
        </Header>
        <div>
          <Layout className="container mx-auto">
            <Sider
              className="z-30"
              breakpoint="md"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                }}
              >
                {/* menu items */}
                <SliderMenu />
                {/* menu items */}
              </Menu>
            </Sider>
            <Layout
              style={{
                padding: "0",
              }}
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                {/* Content */}
                <Outlet />
                {/* Content */}
              </Content>
            </Layout>
          </Layout>
        </div>
      </Layout>
    </div>
  );
};

export default Main;
