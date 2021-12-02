import React from 'react'
import {Button, Card, Col, message, Modal, Row, Table} from 'antd'
import Search from "antd/es/input/Search";

class Tables extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            columns: [
                {
                    title: '策略ID',
                    dataIndex: 'policyId',
                    key: 'policyId',
                    align: 'center',
                    render: text => <a>{text}</a>
                },
                {
                    title: '策略名',
                    dataIndex: 'policyName',
                    key: 'policyName',
                    align: 'center',
                },
                {
                    title: '使用状态',
                    dataIndex: 'policyState',
                    key: 'policyState',
                    align: 'center',
                    render: text => {
                        if ({text}.text === 1) {
                            return '启用';
                        } else {
                            return '关闭'
                        }
                    }
                },
                {
                    title: '集群ID',
                    dataIndex: 'clusterId',
                    key: 'clusterId',
                    align: 'center',
                },
                {
                    title: '任务类型',
                    dataIndex: 'taskType',
                    key: 'taskType',
                    align: 'center',
                },
                {
                    title: '消重服务ID',
                    dataIndex: 'deduplicationServerId',
                    key: 'deduplicationServerId',
                    align: 'center',
                },
                {
                    title: '有效时间',
                    dataIndex: 'periodTime',
                    key: 'periodTime',
                    align: 'center',
                },
                {
                    title: '操作',
                    dataIndex: 'operator',
                    key: 'operator',
                    align: 'center',
                    render: (row) =>
                        <div>
                            <Button type='primary' shape={"round"}>修改</Button>
                            <Button style={{marginLeft: '5px'}} shape={"round"} danger>复制</Button>
                            {/*通过点击事件传递数据*/}
                        </div>
                }
            ],
            dataSource: [
                {
                    key: '1',
                    policyId: 'HEIMAOTOUSU',
                    policyName: '黑猫投诉',
                    policyState: 1,
                    clusterId: 'cluster1',
                    deduplicationServerId: 'crServer2_2',
                    taskType: 'List|Detail|Data',
                    periodTime: 180
                },
                {
                    key: '2',
                    policyId: 'XUEQIU',
                    policyName: '雪球网',
                    policyState: 0,
                    clusterId: 'cluster1',
                    deduplicationServerId: 'crServer2_2',
                    taskType: 'List|Detail|Data',
                    periodTime: 180
                },
                {
                    key: '3',
                    policyId: 'CPWS',
                    policyName: '裁判文书',
                    policyState: 1,
                    clusterId: 'cluster1',
                    deduplicationServerId: 'crServer2_2',
                    taskType: 'List|Detail|Data',
                    periodTime: 180
                }
            ],
            selectedRows: [],
            rowSelection: {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                    this.setState({
                        selectedRows: selectedRows
                    })
                },
                getCheckboxProps: record => ({
                    disabled: record.policyId === 'Disable Policy', // Column configuration not to be checked
                    name: record.policyId,
                }),
            }
        }
        this.handleDeleteOk = this.handleDeleteOk.bind(this);
        this.deletePolicy = this.deletePolicy.bind(this);
    }

    handleDeleteOk = () => {
        const {selectedRows, dataSource} = this.state;
        if (selectedRows.length > 0) {
            selectedRows.forEach(item => {
                const id = item.key;
                for (let i = 0; i, dataSource.length; i++) {
                    if (id === dataSource[i].key) {
                        dataSource.splice(i, 1);
                        this.setState({
                            dataSource: dataSource
                        })
                        break
                    }
                }
            });
            this.setState({
                selectedRows: []
            })
        }
    };

    deletePolicy = () => {
        const {selectedRows} = this.state;
        if (selectedRows.length > 0) {
            Modal.confirm({
                title: `确认删除策略吗？`,
                onOk: this.handleDeleteOk,
                onCancel: () => {
                    message.info('取消删除策略');
                }
            });
        } else {
            message.warn('请选中要删除的策略');
        }

    }


    render() {
        return (
            <div className="policy-table">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="爬虫策略" bordered={false}>
                                <Search
                                    placeholder="策略名或者策略ID"
                                    allowClear
                                    enterButton="策略搜索"
                                    size="small"
                                    style={{
                                        marginBottom: '5px',
                                        paddingBottom: '10px',
                                        paddingTop: '10px',
                                        width: 250,
                                        height: 50
                                    }}
                                />
                                <Button style={{marginLeft: 20}} type='primary' shape={"round"}>新增</Button>
                                <Button style={{marginLeft: 5}} shape={"round"} onClick={this.deletePolicy}
                                        danger>删除</Button>

                                <Table
                                    rowSelection={this.state.rowSelection}
                                    dataSource={this.state.dataSource}
                                    columns={this.state.columns}
                                    size="middle"
                                    style={{marginBottom: '5px'}}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tables
