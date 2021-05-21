import React from "react";
import { Row, Col, Checkbox, InputNumber, Form } from "antd";

interface IProps {
  dataSouce: any;
  id: number;
  handleCheckedRatio: (e: any, item: any, type: number) => void;
  disableRatio: boolean;
  disableAdjust: boolean;
}

function SubTabsForm({
  dataSouce,
  id,
  handleCheckedRatio,
  disableRatio,
  disableAdjust,
}: IProps) {
  return (
    <div>
      <Row>
        <Col span={4}>Parameter</Col>
        <Col span={4}>Weighting Ration</Col>
        <Col span={4}>Adjust in Bill</Col>
      </Row>
      {dataSouce.list.tabsCode === id
        ? dataSouce.list.conditionList.map((pro: any, index: number) => {
            return (
              <Row key={index} style={{ marginBottom: "5px" }}>
                <Col span={4}>{pro.conditionName}</Col>
                <Col span={4}>
                  <div style={{ display: "flex" }}>
                    <Form.Item
                      style={{ marginBottom: 0, flex: 1 }}
                      name={`checkedRatio_${pro.conditionCode}_${id}`}
                      valuePropName="checked"
                    >
                      <Checkbox
                        disabled={disableRatio}
                        onChange={(e) => {
                          handleCheckedRatio(e, pro, id);
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      style={{ marginBottom: 0, flex: 13 }}
                      name={`ration_${pro.conditionCode}_${id}`}
                    >
                      <InputNumber name="ration" disabled />
                    </Form.Item>
                  </div>
                </Col>
                <Col span={4}>
                  <div style={{ display: "flex" }}>
                    <Form.Item
                      style={{ marginBottom: 0, flex: 1 }}
                      name={`checkedAdjust_${pro.conditionCode}_${id}`}
                      valuePropName="checked"
                    >
                      <Checkbox disabled={disableAdjust} />
                    </Form.Item>
                    <Form.Item
                      style={{ marginBottom: 0, flex: 13 }}
                      name={`adjust_${pro.conditionCode}_${id}`}
                    >
                      <InputNumber name="ration" disabled />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            );
          })
        : null}
    </div>
  );
}

export default SubTabsForm;
