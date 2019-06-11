import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Link from 'umi/link';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
  Tabs
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './Index.less';
const { TabPane } = Tabs;
const FormItem = Form.Item;
const { Option } = Select;
const {RangePicker} = DatePicker;

class propram extends PureComponent {
  state = {
    expand: false,
  };
  getFields() {
    return (
      <>
        <Col span={6}>
          <Form.Item label='项目名称'>
            <Select
                mode="multiple"
                placeholder="项目名称"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
              <Option key="3">333</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='赛事名称'>
            <Select
                
                mode="multiple"
                placeholder="赛事名称"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
              <Option key="3">333</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='节目名称'>
            <Input 
              placeholder="节目名称" 
              suffix={
                <Icon type="edit"/>
              }
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='业务级别'>
            <Select
                mode="multiple"
                placeholder="级别"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
              <Option key="3">333</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='是否付费'>
            <Select
                placeholder="是否付费"
              >
              <Option key="1">免费</Option>
              <Option key="2">付费</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='演播室'>
            <Select
                placeholder="演播室"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='解说员'>
            <Select
                placeholder="解说员"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='审核状态'>
            <Select
                placeholder="审核状态"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={8} sm={24}>
          <FormItem label="节目时间">
            <RangePicker
              style={{ width: '100%' }}
              showTime
              format="YYYY-MM-DD HH:MM:SS"
              placeholder={['开始日期', '结束日期']}
            />
          </FormItem>
        </Col>
        <Col span={6}>
          <Form.Item label='节目ID'>
            <Input 
              placeholder="节目ID" 
              suffix={
                <Icon type="edit"/>
              }
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='比赛ID'>
            <Input 
              placeholder="比赛ID" 
              suffix={
                <Icon type="edit"/>
              }
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='频道ID'>
            <Input 
              placeholder="频道ID" 
              suffix={
                <Icon type="edit"/>
              }
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='输出渠道'>
            <Select
                placeholder="输出渠道"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='创建者'>
            <Input 
              placeholder="创建者" 
              suffix={
                <Icon type="edit"/>
              }
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='是否可见'>
            <Select
                placeholder="是否可见"
              >
              <Option key="1">111</Option>
              <Option key="2">222</Option>
            </Select>
          </Form.Item>
        </Col>
      </>     
    )
  }

  handleSearch = e =>{}
  handleReset = e =>{}
  toggle = e =>{
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="节目" key="1">
          <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} layout="inline">
            <Row gutter={8}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  Clear
                </Button>
                <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                  Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                </a>
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane tab="待审核" key="2">
          待审核
        </TabPane>
        <TabPane tab={<span><Icon type="delete" />已删除</span>} key="3">
          
          已删除
        </TabPane>
      </Tabs>
    )
  }
}



export default propram;
