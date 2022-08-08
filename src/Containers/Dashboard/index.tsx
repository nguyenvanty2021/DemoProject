import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import taskAPI from '../../api/Task'
import LayoutComponent from '../../Components/Layout'
const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>([])
  const handleGetAllTX = async () => {
    try {
      const res = await taskAPI.getAllTask()
      setData(res?.data || [])
    } catch (error) {

    }
  }
  const handlePost = async (kq: any) => {
    try {
      const res: any = await taskAPI.addTask({
        kq
      })
     await handleGetAllTX()
    } catch (error) {

    }
  }
  useEffect(() => {
    handleGetAllTX()
  }, [])
  return <>
    <div style={{maxWidth: '100%', width: '100%'}} >
    {
      data?.length > 0 && data.map((values: any) => {
        return (
          <span key={values.id} >{values.kq}</span>
        )
      })
    }
    </div>
  <div>
  <Button onClick={() => handlePost('tai,')} >Tai</Button>
    <Button onClick={() => handlePost('xiu,')}  >Xiu</Button>
  </div>
  </>
}
export default Dashboard
