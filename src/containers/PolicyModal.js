import React, {Component} from 'react';
import {Form, Input, Tabs} from "antd";
import TextArea from "antd/es/input/TextArea";
import CheckboxGroup from "antd/es/checkbox/Group";

const {TabPane} = Tabs;

class PolicyModal extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modalType: this.props['modalType'], // 1代表添加 0代表修改更新
            policy: this.props['policy']
        }
        // this.setState({
        //     title: this.state.modalType === 1 ? '策略添加' : '策略修改'
        // })
    }

    handleAddOrUpdateOk = () => {
        console.log('===================submit');
    }

    handleClose = () => {
        console.log('===================cancel');
    }


    render() {
        console.log(this.state.policy);
        const plainOptions = ['List', 'Detail', 'Data'];
        const defaultCheckedList = ['List', 'Detail'];
        // const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
        return (
            <Tabs tabBarExtraContent={this.operations}>
                <TabPane tab="基本模式" key="1">
                    <Form
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        layout="horizontal"
                        onFinish={this.onAddFinish}
                    >
                        <Form.Item label="策略ID" name="policyId"
                                   style={{marginBottom: 0}}>
                            <Input defaultValue={this.state.modalType === 1 ? this.state.policy.policyId : ''}
                                   disabled={this.state.modalType === 1}/>
                        </Form.Item>
                        <Form.Item label="策略名称" name="policyName" style={{marginBottom: 0}}>
                            <Input defaultValue={this.state.modalType === 1 ? this.state.policy.policyName : ''}/>
                        </Form.Item>
                        <Form.Item label="使用状态" name="policyState" style={{marginBottom: 0}}>
                            <Input defaultValue={this.state.policy.policyState ? '开启' : '关闭'} disabled={true}/>
                        </Form.Item>
                        <Form.Item label="任务类型" name="taskType" style={{marginBottom: 0}}>
                            <CheckboxGroup options={plainOptions}/>
                        </Form.Item>
                        <Form.Item label="List任务抓取表达式" name="listExpress" style={{marginBottom: 0,}}>
                            <TextArea defaultValue={this.state.policy.listExpress}/>
                        </Form.Item>
                        <Form.Item label="Data任务抓取表达式" name="dataExpress" style={{marginBottom: 0,}}>
                            <TextArea defaultValue={this.state.policy.dataExpress}/>
                        </Form.Item>
                        <Form.Item label="issue任务抓取表达式" name="issueExpress" style={{marginBottom: 0,}}>
                            <TextArea defaultValue={this.state.policy.dataExpress}/>
                        </Form.Item>
                    </Form>
                </TabPane>
                <TabPane tab="高级模式" key="2">
                    Content of tab 2
                </TabPane>
            </Tabs>
        );
    }
}

export default PolicyModal;
