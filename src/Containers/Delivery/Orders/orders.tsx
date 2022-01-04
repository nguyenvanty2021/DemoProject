import LayoutComponent from '../../../Components/Layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ORDERS } from '../../../constants/Orders'
import styles from './orders.module.scss'
import OrderUpdate from './Update/index'
import { OrdersProps, ReducersProps } from '../../../models'
import { Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
const Orders: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [objectOrder, setObjectOrder] = useState<OrdersProps>()
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
  const loading = useSelector((state: ReducersProps) => state.loading)
  const orders = useSelector((state: ReducersProps) => state.OrdersReducers)
  const dispatch = useDispatch()
  const columns: any = [
    {
      title: 'Order No',
      dataIndex: 'OrderNo',
      key: 'OrderNo',
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Service Date',
      dataIndex: 'ServiceDate',
    },
    {
      title: 'Customer Name/Trade Type',
      dataIndex: 'CustomerName',
    },
    {
      title: 'Pickup Place',
      dataIndex: 'PickupPlace',
    },
    {
      title: 'Drop Place',
      dataIndex: 'DropPlace',
    },
    {
      title: 'Qty/Unit',
      dataIndex: 'Quantity',
    },
    {
      title: 'Vol/WT',
      dataIndex: 'Vol',
    },
    {
      title: 'Driver',
      dataIndex: 'Drivers',
    },
    {
      title: 'Order Progress',
      dataIndex: 'OrderProgress',
      render: (text: string, record: OrdersProps) =>
        text && text.includes("new") ? (
          <div className={styles['new']}>{text}</div>
        ) : (
          <div className={styles['assigned']}>{text}</div>
        ),
    },
    {
      title: 'Action',
      dataIndex: 'OrdeProgress',
      key: 'OrdeProgress',
      width: 100,
      fixed: 'right',
      render: (text: any, record: OrdersProps) => (
        <div>
          <span>
            <EditOutlined
              onClick={() => {
                setVisible(true)
                setObjectOrder(record)
              }}
              style={{
                cursor: 'pointer',
                marginRight: '0.5rem',
                fontSize: '1.25rem',
                color: 'rgb(83, 128, 247)',
              }}
            />
          </span>
          <span>
            {' '}
            <DeleteOutlined
              onClick={() =>
                dispatch({ type: ORDERS.DELETE, payload: record?.id })
              }
              style={{
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: 'rgb(227,85,76)',
              }}
            />
          </span>
        </div>
      ),
    },
  ]
  const onSelectChange = (selectedRowKeys: string[]): void => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelectedRowKeys(selectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const onClose = (): void => {
    setVisible(false)
  }
  useEffect(() => {
    dispatch({ type: ORDERS.GET_ALL, payload: '' })
  }, [])
  return (
    <LayoutComponent>
      <Table
        rowKey="id"
        loading={loading}
        scroll={{ x: 1500 }}
        /* @ts-ignore */
        // rowSelection={rowSelection}
        columns={columns}
        dataSource={orders}
      />
      <OrderUpdate
        title="Update Order"
        objectOrder={objectOrder}
        onClose={onClose}
        visible={visible}
      />
    </LayoutComponent>
  )
}
export default Orders
