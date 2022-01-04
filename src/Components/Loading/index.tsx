import { useSelector } from 'react-redux'
import styles from './Loading.module.scss'
export default function Loading() {
  const loading = useSelector((state: any) => state.loading)
  return (
    <div
      className={styles['loading-container']}
      style={{
        display: loading ? 'flex' : 'none',
      }}
    >
      {/* <Spin
        size="large"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      /> */}
    </div>
  )
}
