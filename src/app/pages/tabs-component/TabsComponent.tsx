import React, { useState } from "react";
import { Tabs } from "antd";
import tabsMock from "./mocktabs";
interface IProps {}

const TabsComponent = ({}: IProps) => {
  return (
    <div>
      <Tabs tabPosition="left" defaultActiveKey="1">
        {tabsMock.map((item) => {
          return (
            <Tabs.TabPane tab={item.list.tabsName} key={item.list.tabsCode}>
              <div>11111</div>
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
