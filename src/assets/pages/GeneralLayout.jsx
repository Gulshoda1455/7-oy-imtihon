
import  { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  {
    path: "/",
    label: "Home",
    icon: <PieChartOutlined />,
  },
  {
    path: "/category",
    label: "Categories",
    icon: <DesktopOutlined />,
  },
  {
    path: "/products",
    label: "Products",
    icon:<DesktopOutlined />,
  },
].map((item, index) => {
  return {
    key: index,
    label: <NavLink to={item.path}>{item.label}</NavLink>,
    icon: item.icon,
  };
});
const GeneralLayout = () => {
  const navigate = useNavigate()
  useEffect(()=>{
      const token = localStorage.getItem("token");
      if(!token){
         navigate("/login")
      }
  },[])
  


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer},
  } = theme.useToken();
  return (
  
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} />
        {/* <Menu.Item key="/">
              <NavLink to="/">
                <Icon type="home" />
                <span>Home</span>
              </NavLink>
            </Menu.Item> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        
          <Outlet/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default GeneralLayout;