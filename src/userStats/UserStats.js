import "./userStats.css";
import Card from "react-bootstrap/Card";
import mail from "../Images/mail.png";
import Avatar from "react-avatar";
import profile from "../Images/profile.png";
import archive from "../Images/archive.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import attendance from "../Images/attendance.png";
import reject from "../Images/reject.png";
import calender from "../Images/calender.png";
import React from "react";
import ReactEcharts from "echarts-for-react";
import rocket from "../Images/rocket.png";

const Profile = () => {
  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      offset: 2,
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0
      },
      axisTick: {
        show: false
      },
      data: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    },
    textStyle: {
      fontFamily: "Microsoft YaHei",
      fontSize: "0.5em",
      fontStyle: "normal",
      fontWeight: "normal"
    },
    yAxis: {
      show: false,
      type: "value"
    },
    series: [
      {
        data: [100, 300, 350, 200, 280, 100, 160],
        type: "bar",
        barWidth: "15em",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
          borderType: "solid",
          borderRadius: [10, 10, 10, 10]
        },
        itemStyle: {
          borderRadius: [10, 10, 10, 10]
        },
        smooth: true
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  };
  return (
    <>
      <div className="userStatsGroup">
        <div className="userStats">
          <Avatar
            round={true}
            size="80"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
          />
          <div className="userDetails">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={mail}
                style={{ maxWidth: "2em", paddingRight: "1em" }}
                alt="Mail"
              />
              henryboyd@gmail.com
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={profile}
                style={{
                  maxWidth: "2em",
                  paddingRight: "1em",
                  marginBottom: "0.5em"
                }}
                alt="Profile"
              />
              Henry Boyd
            </div>
            <button className="archive">
              Archive
              <img src={archive} style={{ maxWidth: "4em" }} alt="Archive" />
            </button>
          </div>
        </div>
        <div className="statsGroup">
          <div className="fourGroup">
            <Row className="rowAlign">
              <Col style={{ marginBottom: "1em", marginRight: "1em" }}>
                <Card className="timeStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        round={true}
                        size="32"
                        style={{ backgroundColor: "rgb(144 199 255)" }}
                        src="https://static.vecteezy.com/system/resources/previews/009/342/688/original/clock-icon-clipart-design-illustration-free-png.png"
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">13h</h3>
                        <p className="statName">Time</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ marginBottom: "1em" }}>
                <Card className="attendStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        style={{ backgroundColor: "#97d797" }}
                        round={true}
                        size="32"
                        src={attendance}
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">188</h3>
                        <p className="statName">Atendeed</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="rowAlign1">
              <Col style={{ marginRight: "1em" }}>
                <Card className="meetStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        round={true}
                        size="32"
                        src={calender}
                        style={{ backgroundColor: "#d184f0" }}
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">119</h3>
                        <p className="statName">Meetings</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="rejectStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        round={true}
                        size="32"
                        src={reject}
                        style={{ backgroundColor: "#f3be5c" }}
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">41</h3>
                        <p className="statName">Rejected</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <div className="graph">
              <div className="current">Current Week</div>
              <div className="activity">Activity</div>
            </div>
            <ReactEcharts
              option={options}
              style={{ maxHeight: "8em" }}
            ></ReactEcharts>
          </div>
        </div>
        <div className="copyLink">
          <img className="rocket" src={rocket} alt="rocket" />
          <h4 style={{ marginBottom: "1em", marginTop: "1em" }}>
            Onboard Clients
          </h4>
          <div>Share the link with prospects and discuss all stuff</div>
          <button className="btnCopyLink">
            Copy Link
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_167291.png"
              alt="copy"
              style={{ maxWidth: "1em", maxHeight: "1em" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
