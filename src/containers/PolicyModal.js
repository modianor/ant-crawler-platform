import React, {Component} from 'react';
import {Button, Form, Input, Modal, Tabs} from "antd";
import TextArea from "antd/es/input/TextArea";

const {TabPane} = Tabs;

class PolicyModal extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modalType: 1, // 1代表添加 0代表修改更新
            visible: true
        }
        this.setState({
            title: this.state.modalType === 1 ? '策略添加' : '策略修改'
        })
        this.handleAddOrUpdateOk = this.handleAddOrUpdateOk.bind(this);
        const operations = <Button>Extra Action</Button>;
    }

    handleAddOrUpdateOk = () => {

    }


    render() {
        return (
            <Modal
                /*添加弹框*/
                visible={this.state.visible}
                title={this.state.title}
                onCancel={this.handleAddOrUpdateOk}
                footer={null}
            >
                <Tabs tabBarExtraContent={this.operations}>
                    <TabPane tab="基本模式" key="1">
                        <Form
                            // style={{marginLeft: '-12px'}}
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}
                            layout="horizontal"
                            onFinish={this.onAddFinish}
                        >
                            <Form.Item name='task_name' label="任务名称">
                                <Input placeholder="任务名称"/>
                            </Form.Item>
                            <Form.Item name='task_reward' label="任务奖励">
                                <Input placeholder="任务奖励"/>
                            </Form.Item>
                            <Form.Item name='task_rules' label="任务规则">
                                <TextArea
                                    placeholder="任务规则"
                                    autoSize={{minRows: 3, maxRows: 5}}
                                />
                            </Form.Item>
                            <Form.Item style={{margin: '20px 0 0 120px '}}>
                                <Button style={{marginLeft: 30}} key="submit" type="primary" htmlType="submit"
                                        onClick={this.handleOk}>
                                    保存
                                </Button>
                                <Button style={{marginLeft: 30}} key="back" onClick={this.handleCancel}>
                                    取消
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="高级模式" key="2">
                        Content of tab 2
                    </TabPane>
                </Tabs>

            </Modal>
        );
    }
}

export default PolicyModal;