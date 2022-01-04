import { memo } from 'react'
import React from 'react'
import { Form, Radio, Drawer, Input, Button } from 'antd'
import { OrdersProps } from '../../../../models'
import styles from './update.module.scss'
import { useDispatch } from 'react-redux'
import { ORDERS } from '../../../../constants/Orders'
export interface OrderUpdateProps {
  onClose: () => void
  visible: boolean
  title: string
  objectOrder: OrdersProps | undefined
}
const OrderUpdate: React.FC<OrderUpdateProps> = ({
  onClose,
  visible,
  objectOrder,
  title,
}) => {
  const [form]: any = Form.useForm()
  const dispatch = useDispatch()
  const onFinish = (values: any): void => {
    onClose()
    dispatch({
      type: ORDERS.UPDATE_SAGA,
      payload: { ...values, id: objectOrder?.id },
    })
  }
  const update: any = form.getFieldValue()
  update.OrderNo = objectOrder?.OrderNo
  update.ServiceDate = objectOrder?.ServiceDate
  update.CustomerName = objectOrder?.CustomerName
  update.PickupPlace = objectOrder?.PickupPlace
  update.DropPlace = objectOrder?.DropPlace
  update.Quantity = objectOrder?.Quantity
  update.Vol = objectOrder?.Vol
  update.Drivers = objectOrder?.Drivers
  update.OrderProgress = objectOrder?.OrderProgress?.toLowerCase()
  return (
    <Drawer
      width={500}
      title={title}
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Order No"
          name="OrderNo"
          rules={[{ required: true, message: 'Please input order no!' }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Service Date"
          name="ServiceDate"
          rules={[{ required: true, message: 'Please input service date!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Customer Name"
          name="CustomerName"
          rules={[{ required: true, message: 'Please input customer name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pickup Place"
          name="PickupPlace"
          rules={[{ required: true, message: 'Please input pickup place!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Drop Place"
          name="DropPlace"
          rules={[{ required: true, message: 'Please input drop place!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Qty/Unit"
          name="Quantity"
          rules={[{ required: true, message: 'Please input quantity/unit!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Vol/WT"
          name="Vol"
          rules={[{ required: true, message: 'Please input vol/wt!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Driver"
          name="Drivers"
          rules={[{ required: true, message: 'Please input driver!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="OrderProgress" label="Order Progress">
          <Radio.Group>
            <Radio value="new">New</Radio>
            <Radio value="assigned">Assigned</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <div className={styles['btn']}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Drawer>
  )
}
export default memo(OrderUpdate)
