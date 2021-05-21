import React, { useState, useEffect } from "react";
import { Tabs, Button, Form } from "antd";
import tabsMock from "./mocktabs";
import SubTabsForm from "./SubTabsForm";

interface IProps {}

const TabsComponent = () => {
  const [disableRatio, setDisableRatio] = useState(false);
  const [disableAdjust, setDisableAdjust] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const submit = tabsMock.map((wap) => {
      const wapData = wap.list.conditionList.map((item) => {
        return {
          billAdjustStatus:
            values[
              `checkedAdjust_${item.conditionCode}_${wap.list.tabsCode}`
            ] === undefined
              ? item.billAdjustStatus
              : values[
                  `checkedAdjust_${item.conditionCode}_${wap.list.tabsCode}`
                ],
          billAdjustValue:
            values[`adjust_${item.conditionCode}_${wap.list.tabsCode}`] ===
            undefined
              ? 0
              : values[`adjust_${item.conditionCode}_${wap.list.tabsCode}`],
          conditionCode: item.conditionCode,
          conditionId: item.conditionId,
          conditionName: item.conditionName,
          conditionPriority: item.conditionPriority,
          ratioStatus:
            values[
              `checkedRatio_${item.conditionCode}_${wap.list.tabsCode}`
            ] === undefined
              ? item.ratioStatus
              : values[
                  `checkedRatio_${item.conditionCode}_${wap.list.tabsCode}`
                ],
          ratioValue:
            values[`ration_${item.conditionCode}_${wap.list.tabsCode}`] ===
            undefined
              ? 1
              : values[`ration_${item.conditionCode}_${wap.list.tabsCode}`],
        };
      });
      return wapData;
    });
    console.log("submit---", submit);
    return submit;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCheckedRatio = (e: any, item: any, type: number) => {
    console.log("item---", item, "e---", e);
    if (`checkedRatio_${item.conditionCode}_${type}` === e.target.id) {
      item.ratioStatus = e.target.checked;
      if (item.ratioStatus === true) {
        setDisableAdjust(e.target.checked);
      }
    }
    if (
      `checkedAdjust_${item.conditionCode}_${type}` &&
      item.billAdjustStatus
    ) {
      item.billAdjustStatus = e.target.checked;
      setDisableRatio(e.target.checked);
    }
  };

  return (
    <div className="back-color">
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1">
            {tabsMock.map((item: any) => {
              return (
                <Tabs.TabPane
                  tab={item.list.tabsName}
                  key={item.list.tabsCode}
                  forceRender
                >
                  <SubTabsForm
                    dataSouce={item}
                    key={item.list.tabsCode}
                    id={item.list.tabsCode}
                    handleCheckedRatio={handleCheckedRatio}
                    disableRatio={disableRatio}
                    disableAdjust={disableAdjust}
                  />
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </div>
      </Form>
    </div>
  );
};

export default TabsComponent;
