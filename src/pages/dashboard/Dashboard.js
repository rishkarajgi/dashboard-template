import React, { Component } from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import MainContainer from "../MainContainer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <LeftMenu />
        <MainContainer>{this.props.children}</MainContainer>
      </div>
    );
  }
}

export default Dashboard;
