import React, {Component} from 'react';
import {Button, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, Tabs, TreeSelect} from "antd";

const {TabPane} = Tabs;

class PolicyModal extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modalType: this.props['modalType'], // 1代表添加 0代表修改更新
            policy: this.props['policy']
        }
        this.setState({
            title: this.state.modalType === 1 ? '策略添加' : '策略修改'
        })
    }

    handleAddOrUpdateOk = () => {
        console.log('===================submit');
    }

    handleClose = () => {
        console.log('===================cancel');
    }


    render() {
        return (
            <Tabs tabBarExtraContent={this.operations}>
                <TabPane tab="基本模式" key="1">
                    <Form
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        layout="horizontal"
                        onFinish={this.onAddFinish}
                    >
                        <Form.Item label="Form Size" name="size">
                            <Radio.Group>
                                <Radio.Button value="small">Small</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="large">Large</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Input">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Select">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="TreeSelect">
                            <TreeSelect
                                treeData={[
                                    {title: 'Light', value: 'light', children: [{title: 'Bamboo', value: 'bamboo'}]},
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item label="Switch" valuePropName="checked">
                            <Switch/>
                        </Form.Item>
                        <Form.Item label="Button">
                            <Button >Button</Button>
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
