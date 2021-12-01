import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Icon, Menu} from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu

const SiderMenus = ({match}) => (
    <div style={{paddingBottom: '120px'}}>
        <Menu
            theme="dark"
            defaultSelectedKeys={[match.url]}
            selectedKeys={[match.url]}
            defaultOpenKeys={['sub4']}
            mode="inline"
        >
            <Menu.Item key="/">
                <Link to="/">
                    <Icon type="home"/>
                    <span>爬虫服务</span>
                </Link>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={
                    <span>
            <Icon type="switcher"/>
            <span>策略管理</span>
          </span>
                }
            >
                <Menu.Item key="/policy-config">
                    <Link to="/tables">策略配置</Link>
                </Menu.Item>
                <Menu.Item key="/policy-ext-config">
                    <Link to="/asyc-tables">策略扩展配置</Link>
                </Menu.Item>
                <Menu.Item key="/task-source-cofig">
                    <Link to="/asyc-tables">任务来源配置</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
            <Icon type="user"/>
            <span>消重服务管理</span>
          </span>
                }
            >
                <Menu.Item key="/profile">
                    <Link to="/profile">消重配置</Link>
                </Menu.Item>
                <Menu.Item key="/profile2">
                    <Link to="/profile">任务生成配置</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
            <Icon type="dot-chart"/>
            <span>主机与进程管理</span>
          </span>
                }
            >
                <Menu.Item key="/simple-math-chart">
                    <Link to="/simple-math-chart">主机配置</Link>
                </Menu.Item>
                <Menu.Item key="/archimedean-spiral-line">
                    <Link to="/archimedean-spiral-line">进程配置</Link>
                </Menu.Item>
                <Menu.Item key="/equiangular-spiral-line">
                    <Link to="/equiangular-spiral-line">主机进程配置</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="/info">
                <Link to="/tables">
                    <Icon type="home"/>
                    <span>汇总信息</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="/data">
                <Link to="/tables">
                    <Icon type="home"/>
                    <span>Data表维护</span>
                </Link>
            </Menu.Item>
        </Menu>
    </div>
)

SiderMenus.propTypes = {
    match: PropTypes.object.isRequired
}

export default SiderMenus
