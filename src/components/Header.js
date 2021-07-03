import React from "react";
import "./style.scss";


import { Layout, Menu } from 'antd';
import {
    UnorderedListOutlined,
    HomeOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

export default class HeaderSide extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider className="sideBar" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        <img src="https://i.ibb.co/mG6967Z/todo2.png" width="50px" height="50px" alt="todo" border="0" />
                    </div>
                    <Menu className="sideBar" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="To Do">
                            <Menu.Item key="2">Add New</Menu.Item>
                            <Menu.Item key="3">Completed</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4" icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <h1 align="center">To-Do</h1>
                    </Header>
                </Layout>
            </Layout>
        );
    }
}


