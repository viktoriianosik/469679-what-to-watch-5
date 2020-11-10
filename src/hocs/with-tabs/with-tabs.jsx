import React, {PureComponent} from "react";
import {TABS} from "../../const";
import {store} from "../../index";
import {fetchReviewsList} from "../../store/api-action";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: TABS.OVERVIEW,
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tab, id) {
      this.setState({
        activeTab: tab,
      });
      if (tab === TABS.REVIEWS) {
        store.dispatch(fetchReviewsList(id));
      }
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
