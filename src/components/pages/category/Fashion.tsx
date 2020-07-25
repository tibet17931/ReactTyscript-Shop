import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";

const { Meta } = Card;

export default () => {
  return (
    <div className="ant-card">
      <div className="ant-card-head">
        <div className="ant-card-head-title">Fashion</div>
      </div>
      <div className="ant-card-body">
        <Row gutter={[16, 8]}>
          <Col xs={13} sm={10} md={8} lg={8} xl={6} span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>

          <Col xs={13} sm={10} md={8} lg={8} xl={6} span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>

          <Col xs={13} sm={10} md={8} lg={8} xl={6} span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>

          <Col xs={13} sm={10} md={8} lg={8} xl={6} span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
