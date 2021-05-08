import React, { useState } from "react";
import { Tabs } from "antd";
import tabsMock from "./mocktabs";

const { TabPane } = Tabs;
interface IProps {}

const TabsComponent = ({}: IProps) => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      {/* {tabsMock.map((item) => {
        return (
          <Tabs tabPosition="left">
            <Tabs.TabPane tab={item.list.tabsName} key={item.list.tabsCode}>
              <div>11111</div>
            </Tabs.TabPane>
          </Tabs>
        );
      })} */}
    </div>
  );
};

export default TabsComponent;
