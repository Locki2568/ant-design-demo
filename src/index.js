
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './main.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Welcome Page</span>
              <Link to="/">Welcome Page</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="table" />
              <span>Table Page</span>
              <Link to="/table">Welcome Page</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

          <Header style={{ background: '#fff', padding: 0}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            This is a Title
            
          </Header>
          <Content style={{
            margin: '25px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Switch>
            <Route path="/" exact component ={()=><h1 className="welcome_text">Welcome to our new Web APP</h1>}></Route>
            <Route path="/table" exact component ={()=><h1>Table Page</h1>}></Route>

            {/* //<Route component = {NotFoundPage}/> */}
          </Switch>
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
          