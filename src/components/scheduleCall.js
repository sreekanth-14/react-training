import React from 'react';
import { Button, Modal, Popover } from 'antd';
import { Input } from 'antd';
import { Form } from 'antd';
import { Radio } from 'antd';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCalendar, faClock, faBell, faVideo, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Select } from 'antd';



const { Option } = Select;

const alertTime = ['5 minutes before', '10 minutes before', '15 minutes before', '30 minutes before', '60 minutes before' ];

const addStaff = ['staff1', 'staff2', 'staff3', 'staff4', 'staff5'];

const format = 'HH:mm';

const hourFormat = 'HH';
const minutesFormat = 'mm'

const title = (
    <div style={{textAlign: "center"}}>
        <div>
            <b style={{fontSize: 25}}>Schedule a Call</b>
        </div>
        <br></br>
        <div>
            <Radio.Group >
                <Radio.Button defaultvalue style={{borderColor: 'white'}}><FontAwesomeIcon size='2x' icon={faPhoneVolume} style={{width: 210, marginLeft: -95}}/></Radio.Button>
                <Radio.Button value="b" style={{borderColor: 'white'}}><FontAwesomeIcon size='2x' icon={faVideo} /></Radio.Button>
            </Radio.Group>
        </div>
    </div>
);


class ScheduleCall extends React.Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return(
            <div style={{marginTop: 10}}>
                <center><Button type="primary" onClick={this.showModal} >Schedule Call</Button></center>
                <Modal title={title} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <div>
                    <Form labelCol={{span: 5}} layout="horizontal" >
                        <Form.Item>
                            <FontAwesomeIcon icon={faPencilAlt} style={{ width: 50 }}/>
                            Title <Input style={{ width: 340, marginLeft: 16 }} placeholder='Title' />
                        </Form.Item>
                        <Form.Item>
                            <Select  style={{ width: 150, marginLeft: 16 }} placeholder='+ Add Subject'>
                                <Option value="subject">Subject</Option>
                            </Select>
                            <Select style={{width: 150, marginLeft: 16}} placeholder='+ Add Staff' >
                                {addStaff.map(staff => (
                                    <Option key={staff}>{staff}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <FontAwesomeIcon icon={faCalendar} style={{ width: 50 }}/>
                            Date <DatePicker style={{width: '160px', marginLeft: 16}} />
                        </Form.Item>
                        <Form.Item>
                            <FontAwesomeIcon icon={faClock} style={{ width: 50 }}/>
                            Time <TimePicker use12Hours format={format} style={{marginLeft: 16}}/> 
                        </Form.Item>
                        <Form.Item style={{marginLeft: 17}}>
                            Call Duration <TimePicker style={{marginLeft: 16}} suffixIcon='hour' defaultValue={moment('01', format)} format={hourFormat} placeholder='select hour'/>
                            <TimePicker style={{marginLeft: 18}} suffixIcon='minutes' defaultValue={moment('00', format)} format={minutesFormat} placeholder='select minutes'/>
                        </Form.Item>
                        <Form.Item>
                            <FontAwesomeIcon icon={faBell} style={{ width: 50 }}/>
                            Alert <Select style={{width: '160px', marginLeft: 16}} defaultValue={alertTime[0]}>
                            {alertTime.map(alert => (
                            <Option key={alert}>{alert}</Option>
                            ))}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{backgroundColor: '#1350df', color: 'white', marginLeft: 160, paddingRight: 20, paddingLeft: 20}}>Schedule Call</Button>
                        </Form.Item>
                    </Form>
                    </div>  
                </Modal>
            </div>
        );
    }
}

export default ScheduleCall;