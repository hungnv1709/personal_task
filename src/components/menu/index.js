import React from "react";
import { Menu } from 'antd';
import { CalendarOutlined, MailOutlined, ScheduleOutlined, PictureOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './index.css';
import { CalendarContainer, Event } from '../screens';
const { SubMenu } = Menu;

const Sider = () => {
  return (
    <Router>
      <div style={{ display: "flex" }} className='app-container'>
        <div
          style={{
            padding: "10px",
            width: "15%"
          }}
        >
          <Menu>
            <Menu.Item key="calendar" icon={<CalendarOutlined style={{ color: "#2ecc71" }} />}><Link to="/calendar">Calendar</Link></Menu.Item>
            <Menu.Item key="inbox" icon={<MailOutlined style={{ color: "#3498db" }} />}><Link to="/inbox">Inbox</Link></Menu.Item>
            <Menu.Item key="vacation" icon={<PictureOutlined style={{ color: "#9b59b6" }} />}><Link to="/vacation">Vacation</Link></Menu.Item>
            <Menu.Item key="event" icon={<ScheduleOutlined style={{ color: "#c0392b" }} />}><Link to="/event">Event/Task</Link></Menu.Item>
          </Menu>
        </div>
        <div id="content">
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
      </div>
      <div style={{ height: 100, width: '100%', borderStyle: 'solid' }}>

      </div>
    </Router>
  );
}

const Child = () => {
  let { id } = useParams();
  let screen;

  switch (id) {
    case "calendar":
      screen = <CalendarContainer />
      break;
    case "event":
      screen = <Event />;
      break
    default:
      screen = <h1>hello</h1>
      break;
  }
  return screen;
}

export default Sider;