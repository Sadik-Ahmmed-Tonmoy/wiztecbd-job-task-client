import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Parallax } from "react-parallax";
import banner from "../../../assets/Banner/banner.png";
const { Header, Content, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="relative bg-white">
      <Layout className="min-h-screen">
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
        <Layout>
          <Sider
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
              <div className="sticky top-0">
                <Menu.Item key="1" className="bg-blue-100 ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                  >
                    <span className="mx-4 text-blue-600">example</span>
                  </NavLink>
                </Menu.Item>
              </div>
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
      </Layout>
    </div>
  );
};

export default Home;
