import React from 'react'
import {Card, Col, Row, Table} from 'antd'

class Tables extends React.Component {
    render() {
        const columns2 = [
            {
                title: '策略ID',
                dataIndex: 'policyId',
                key: 'policyId',
                render: text => <a>{text}</a>
            },
            {
                title: '策略名',
                dataIndex: 'policyName',
                key: 'policyName'
            },
            {
                title: '使用状态',
                dataIndex: 'policyState',
                key: 'policyState'
            },
            {
                title: '集群ID',
                dataIndex: 'clusterId',
                key: 'clusterId',
            },
            {
                title: '任务类型',
                dataIndex: 'taskType',
                key: 'taskType',
            },
            {
                title: '消重服务ID',
                dataIndex: 'deduplicationServerId',
                key: 'deduplicationServerId',
            },
            {
                title: '有效时间',
                dataIndex: 'periodTime',
                key: 'periodTime',
            }
        ]
        const dataSource2 = [
            {
                key: '1',
                policyId: 'HEIMAOTOUSU',
                policyName: '黑猫投诉',
                policyState: 1,
                clusterId: 'cluster1',
                deduplicationServerId: 'crServer2_2',
                taskType: 'List|Detail|Data',
                periodTime: 180,
            }
        ]

        /*const columns3 = [
            {
                title: '姓名',
                dataIndex: 'name',
                filters: [
                    {
                        text: 'Joe',
                        value: 'Joe'
                    },
                    {
                        text: 'Jim',
                        value: 'Jim'
                    },
                    {
                        text: 'Submenu',
                        value: 'Submenu',
                        children: [
                            {
                                text: 'Green',
                                value: 'Green'
                            },
                            {
                                text: 'Black',
                                value: 'Black'
                            }
                        ]
                    }
                ],
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) => record.name.indexOf(value) === 0,
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => a.age - b.age
            },
            {
                title: '住址',
                dataIndex: 'address',
                filters: [
                    {
                        text: 'London',
                        value: 'London'
                    },
                    {
                        text: 'New York',
                        value: 'New York'
                    }
                ],
                filterMultiple: false,
                onFilter: (value, record) => record.address.indexOf(value) === 0,
                sorter: (a, b) => a.address.length - b.address.length
            }
        ]

        const dataSource3 = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                key: '4',
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park'
            }
        ]*/

        return (
            <div className="policy-table">
                {/*<Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基础表格" bordered={false}>
                                <Table
                                    dataSource={dataSource1}
                                    columns={columns1}
                                    size="middle"
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>*/}
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="爬虫策略" bordered={false}>
                                <Table
                                    dataSource={dataSource2}
                                    columns={columns2}
                                    size="middle"
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/*<Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基础表格 - 筛选" bordered={false}>
                                <Table
                                    dataSource={dataSource3}
                                    columns={columns3}
                                    size="middle"
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>*/}
            </div>
        )
    }
}

export default Tables
