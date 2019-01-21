import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import MyMenu from "./MyMenu";
import "./TopMenu.css";

class TopMenu extends Component {
  state = { activeItem: "inbox" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu pointing secondary className="top-menu">
        <Menu.Menu postion="left" className="menu-logo">
          <Menu.Item>
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item name="setting" onClick={this.handleItemClick}>
            <MyMenu />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopMenu;
