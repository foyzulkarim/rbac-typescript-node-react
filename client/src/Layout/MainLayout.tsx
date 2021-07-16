import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Route, Link } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import ProductAdd from "../Pages/Product/ProductAdd";
import ProductList from "../Pages/Product/ProductList";
import CustomerAdd from "../Pages/Customer/CustomerAdd";
import CustomerList from "../Pages/Customer/CustomerList";
import CustomerDetail from '../Pages/Customer/CustomerDetail';
import PurchaseAdd from "../Pages/Purchase/PurchaseAdd";
import PurchaseList from "../Pages/Purchase/PurchaseList";
import SaleAdd from "../Pages/Sale/SaleAdd";
import SaleList from "../Pages/Sale/SaleList";
import TransactionAdd from "../Pages/Transaction/TransactionAdd";
import TransactionList from "../Pages/Transaction/TransactionList";
const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className="header"><h1>This is Header</h1></Header>
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
                            <Menu.Item key="5">
                                <Link to="/customers/list">Customer List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="Sale">
                            <Menu.Item key="6">
                                <Link to="/sales/add">Add Sale</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to="/sales/list">Sale List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="Purchase">
                            <Menu.Item key="8">
                                <Link to="/purchases/add">Add Purchase</Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link to="/purchases/list">Purchase List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title="Transaction">
                            <Menu.Item key="10">
                                <Link to="/transactions/add">
                                    Add Transaction
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Link to="/transactions/list">
                                    Transaction List
                                </Link>
                            </Menu.Item>
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
                        <Route path="/customers/add" component={CustomerAdd} />
                        <Route exact path="/customers/list" component={CustomerList} />
                        <Route exact path="/customers/list/:id" component={CustomerDetail} />
                        <Route path="/purchases/add" component={PurchaseAdd} />
                        <Route path="/purchases/list" component={PurchaseList} />
                        <Route path="/sales/add" component={SaleAdd} />
                        <Route path="/sales/list" component={SaleList} />
                        <Route path="/transactions/add" component={TransactionAdd} />
                        <Route path="/transactions/list" component={TransactionList} />
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
