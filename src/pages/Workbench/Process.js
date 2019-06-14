import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Link from 'umi/link';
import styles from './Index.less';
import classNames from 'classnames';
import {
  Alert,
  Row,
  Col,
  Card,
  Calendar,
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
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;


console.log("styles:", styles)
class MyProcess extends PureComponent {
  state = {
    current: 'test',

  };

  handleTabChange = key => {
    // const { match } = this.props;
    // switch (key) {
    //   case 'articles':
    //     router.push(`${match.url}/articles`);
    //     break;
    //   case 'applications':
    //     router.push(`${match.url}/applications`);
    //     break;
    //   case 'projects':
    //     router.push(`${match.url}/projects`);
    //     break;
    //   default:
    //     break;
    // }
  };
  render() {
    const tabList = [
      {
        key: 'myToDo',
        tab: '流程代办',
      },
      {
        key: 'myChecked',
        tab: '我的已办',
      },
      {
        key: 'myCreate',
        tab: '由我启动',
      },
      {
        key: 'myDraft',
        tab: '我的草稿',
      },
    ];

    return (<PageHeaderWrapper
      title="流程中心"
      tabList={tabList}

      onTabChange={this.handleTabChange}
    >

    </PageHeaderWrapper>)
  }
}



export default MyProcess;
