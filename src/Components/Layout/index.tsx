import React, { useState } from 'react'
import AvatarImg from './../../assets/Layout/avatar.png'
import { Layout, Menu } from 'antd'
import {
  MenuOutlined,
  UserOutlined,
  RiseOutlined,
  FileTextOutlined,
  FileMarkdownOutlined,
} from '@ant-design/icons'
import styles from './layout.module.scss'
import AvatarComponent from '../Avatar'
import Logo from './../../assets/Layout/logo.jpeg'
import { ModelLayout } from '../../constants/Layout'
import ImageComponent from '../Image'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Link } from 'react-router-dom'
import { RoutesRedirect } from '../../utils/routes'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
const { Header, Sider, Content } = Layout
const rootSubmenuKeys = ['Delivery', 'Common', 'Admin']
const LayoutComponent: React.FC = (props) => {
  const history = useHistory()
  const { pathname } = history.location
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [openKeys, setOpenKeys] = useState<string[]>([
    pathname.toLowerCase().includes(rootSubmenuKeys[0].toLowerCase())
      ? rootSubmenuKeys[0]
      : pathname.toLowerCase().includes(rootSubmenuKeys[1].toLowerCase())
      ? rootSubmenuKeys[1]
      : pathname.toLowerCase().includes(rootSubmenuKeys[2].toLowerCase())
      ? rootSubmenuKeys[2]
      : '',
  ])
  const onOpenChange = (keys: string[]): void => {
    const latestOpenKey: string | undefined = keys.find(
      (key) => openKeys.indexOf(key) === -1,
    )
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const toggle = (): void => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout className={styles['layout']}>
      <Sider
        style={{ backgroundColor: 'rgb(46,52,69)' }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <ImageComponent
          src={Logo}
          alt={ModelLayout.Logo}
          styles={{
            width: '100%',
            height: '4rem',
            paddingRight: '0.5rem',
            backgroundColor: '#ffffff',
          }}
        />
        <Menu
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ backgroundColor: 'rgb(46,52,69)' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
        >
          <Menu.Item key={RoutesRedirect.Dashboard} icon={<RiseOutlined />}>
            <Link to={RoutesRedirect.Dashboard}>Dashboard</Link>
          </Menu.Item>
          <SubMenu
            style={{ backgroundColor: 'rgb(46,52,69)' }}
            key="Delivery"
            icon={<FileTextOutlined />}
            title="Delivery"
          >
            <Menu.Item key={RoutesRedirect.DeliveryOrders}>
              <Link to={RoutesRedirect.DeliveryOrders}>Orders</Link>
            </Menu.Item>
            <Menu.Item key={RoutesRedirect.DeliveryImportOrders}>
              <Link to={RoutesRedirect.DeliveryImportOrders}>
                Import Orders
              </Link>
            </Menu.Item>
            <Menu.Item key={RoutesRedirect.DeliveryRoutes}>
              <Link to={RoutesRedirect.DeliveryRoutes}>Routes</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="Common" icon={<FileMarkdownOutlined />} title="Common">
            <Menu.Item key={RoutesRedirect.CommonCustomers}>
              <Link to={RoutesRedirect.CommonCustomers}>Customers</Link>
            </Menu.Item>
            <Menu.Item key={RoutesRedirect.CommonPlaces}>
              <Link to={RoutesRedirect.CommonPlaces}>Places</Link>
            </Menu.Item>
            <Menu.Item key={RoutesRedirect.CommonStandardCodes}>
              <Link to={RoutesRedirect.CommonStandardCodes}>
                Standard Codes
              </Link>
            </Menu.Item>
            <Menu.Item key={RoutesRedirect.CommonDrivers}>
              <Link to={RoutesRedirect.CommonDrivers}>Drivers</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="Admin" icon={<UserOutlined />} title="Admin">
            <Menu.Item key={RoutesRedirect.AdminUsers}>
              <Link to={RoutesRedirect.AdminUsers}>Users</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className={styles['site-layout']}>
        <Header
          className={styles['site-layout-background']}
          style={{ padding: 0 }}
        >
          <div className={styles['layout__header']}>
            <span>
              <MenuOutlined
                className={styles['layout__header__icon']}
                onClick={() => toggle()}
              />
            </span>
            <div className={styles['layout__header__avatar']}>
              <AvatarComponent
                styles={{ width: '2.5rem', height: '2.5rem' }}
                src={AvatarImg}
                alt={ModelLayout.Avatar}
              />
              <h4>nguyenvanty</h4>
            </div>
          </div>
        </Header>
        <Content className={styles['layout__content']}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}
export default LayoutComponent
