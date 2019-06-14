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
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

const ItemList = function (props) {
  const items = props.play_list.map((item) => {
    return (
      <li key={item.id}>
        <a href="#" >{item.title}</a>
        <a href="#" >{item.content}</a>
        <a href="#" >{item.date}</a>
      </li>
    );
  });
  return (
    <ul className={styles.item_list}>
      {items}
    </ul>
  );

}
function getListData(value) {
  let reObj;
  switch (value.date()) {
    case 8:
      reObj = {type: 1};
      break;
    case 10:
      reObj = {type: 1};
      break;
    case 15:
      reObj = {type: 1};
      break;
    default:
  }
  return reObj || {};
}

function dateCellRender(value) {

  const nowDate = value.date();
  let firFlag = "",
  secFlag = "";
  if (nowDate == 15) {
    firFlag = <div className={styles.fresh_flag}></div>
    secFlag = <div className={styles.match_flag}></div> 
  } 
  return (
    <div className={styles.date_icon}>
      {firFlag}
      {secFlag}
    </div>
  );
}




console.log("styles:", styles)
class MyIndex extends PureComponent {
  state = {
    current: 'mail',
    play_list: [
      {
        id: 1,
        title: "月表",
        content: "六月赛事排播表",
        date: "2019-05-06 19:10:36",
      },
      {
        id: 2,
        title: "月表",
        content: "六月赛事排播表",
        date: "2019-05-06 19:10:36",
      }
    ],
  };

  handleClick = (val) => {
    console.log('click ', val);
    this.setState({
      current: val.key,
    });
  };
  onSelectDate = (val) =>{
    console.log("sel val:", val.date())
    let reObj = getListData(val);
    if (reObj.type) {
      this.setState({
        selectedFlag: true,
        selectedVal:"testInfof"
      });
    } else {
      this.setState({
        selectedFlag: false,
      });
    }

  }

  render() {
    return (<div className={styles.main_cintainer}>
      <Row gutter={16} type="flex" justify="space-between" className={styles.ele_row}>
        <Col span={12} >
          <Card title="流程代办" bordered={false} extra={<Link to="/workbench/process">>> 流程中心</Link>} className={styles.title_row}>

          </Card>
        </Col>
        <Col span={12} >
          <Card title="公告板" bordered={false} extra={<Link to="/workbench/bulletin-board">>> 查看更多</Link>} className={styles.title_row}>

          </Card>
        </Col>

      </Row>
      <Row gutter={16} type="flex" justify="space-between" className={styles.ele_row}>
        <Col span={12} >
          <Card title="排播表" bordered={false} className={styles.title_row}>
            <ItemList play_list={this.state.play_list}></ItemList>
          </Card>
        </Col>
        <Col span={12} >
          <Card className={styles.title_row} title="我的日程" bordered={false}
            bodyStyle={{ padding: 2 }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ 'lineHeight': '30px' }}>
              <Menu.Item key="mail" className={styles.menu_item}>
                重要赛事
              </Menu.Item>
              <Menu.Item key="app" className={styles.menu_item}>
                个人工作日程
                </Menu.Item>
            </Menu>
            <div style={{ width: '100%', height:'100%'}}>
              <Calendar fullscreen={false} dateCellRender={dateCellRender} onSelect={this.onSelectDate}  />
            </div>
            {this.state.selectedFlag && <Alert message={this.state.selectedVal} type="info" />}
          </Card>
        </Col>

      </Row>
    </div>)
  }
}



export default MyIndex;
