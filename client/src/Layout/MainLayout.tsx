import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Route, Link } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import ProductAdd from "../Pages/Product/ProductAdd";
import ProductList from "../Pages/Product/ProductList";

const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className="header">This is Header</Header>
            <Layout style={{ minHeight: "90vh" }}>
                <Sider width={300} style={{ background: "#fff" }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        style={{ height: "90vh", borderRight: 5 }}
                    >
                        <Menu.Item key="1">
                            <Link to="/">Dashboard</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title="Product">
                            <Menu.Item key="2">
                                <Link to="/products/add">Add Product</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/products/list">Product List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Customer">
                            <Menu.Item key="4">
                                <Link to="/customers/add">Add Customer</Link>
                            </Menu.Item>
                            <Menu.Item key="5">Customer List</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="Sale">
                            <Menu.Item key="6">Add Sale</Menu.Item>
                            <Menu.Item key="7">Sale List</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="Purchase">
                            <Menu.Item key="8">Add Purchase</Menu.Item>
                            <Menu.Item key="9">Purchase List</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title="Transaction">
                            <Menu.Item key="10">Add Transaction</Menu.Item>
                            <Menu.Item key="11">Transaction List</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: "6px" }}>
                    <Content
                        style={{
                            background: "#fff",
                            padding: 24,
                            margin: 0,
                            minHeight: 800,
                        }}
                    >
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/products/add" component={ProductAdd} />
                        <Route path="/products/list" component={ProductList} />
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
