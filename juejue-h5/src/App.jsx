import { Suspense, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RoutesIndex from '@/router'
import NavBar from '@/components/NavBar'

import { ConfigProvider } from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css'

function App () {
  const { pathname } = useLocation() // 获取当前路径
  const needNav = ['/', '/home', '/data', '/user'] // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false) // 是否展示 Nav
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname]) // [] 内的参数若是变化，便会执行上述回调函数=

  return <>
    <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
      <>
        <Suspense
          fallback={
            <div
              style={{
                textAlign: 'center',
              }}>
              loading...
            </div>
          }>
          <RoutesIndex />
        </Suspense>
        <NavBar showNav={showNav} />
      </>
    </ConfigProvider>
  </>
}

export default App
