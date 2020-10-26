import React, {PureComponent} from "react";
import {TABS} from "../../const";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TABS.OVERVIEW,
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tab) {
      this.setState({
        activeTab: tab,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabClick={this.handleTabClick}
        />
      );
    }
  }

  return WithTabs;
};

export default withTabs;
