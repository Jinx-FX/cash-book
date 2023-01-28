import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import("@/container/Home"))
const About = lazy(() => import("@/container/About"))
const Data = lazy(() => import("@/container/Data"))
const User = lazy(() => import("@/container/User"))
const Login = lazy(() => import("@/container/Login"))
const Detail = lazy(() => import("@/container/Detail"))
const UserInfo = lazy(() => import("@/container/UserInfo"))
const Account = lazy(() => import("@/container/Account"))

export default function RoutesIndex () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/data' element={<Data />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/userinfo' element={<UserInfo />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  )
}
