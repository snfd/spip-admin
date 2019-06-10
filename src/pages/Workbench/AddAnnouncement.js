import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Link from 'umi/link';
import router from 'umi/router';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
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
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const { Option } = Select;
const children = [];
for(let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const FormItem = Form.Item;
class addRow extends PureComponent {
  state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null)
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  submitdata = () => {
    const htmlString = editorState.toHTML();
    console.log('submitdata')
  }
  submitContent = async () => {
      // 在编辑器获得焦点时按下ctrl+s会执行此方法
      // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
      const htmlContent = this.state.editorState.toHTML()
  }

  handleEditorChange = (editorState) => {
      this.setState({ editorState })
  }
  goBack = ()=>{
    router.push('/workbench/bulletin-board')
  }
  render() {
    const { editorState } = this.state
    return (
      <PageHeaderWrapper title="新建公告板">
        <Form onSubmit={this.submitdata} layout="inline">
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={8} sm={24}>
              <FormItem label="标题">
                <Input placeholder="请输入" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col md={24} sm={24}>
              <FormItem label="发布范围">
                <Select
                  style={{ minWidth: '300px' }}
                  mode="multiple"
                  placeholder="请输入"
                >
                {children}
                </Select>
              </FormItem>
            </Col>
          </Row>
          <div className="my-component">
              <BraftEditor
                  value={editorState}
                  onChange={this.handleEditorChange}
                  onSave={this.submitContent}
              />
          </div>
          <Button key="cancel" onClick={() => this.goBack()}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={() => this.submitContent()}>
            完成
          </Button>
        </Form>
      </PageHeaderWrapper>
    );
  }
}

export default addRow;
