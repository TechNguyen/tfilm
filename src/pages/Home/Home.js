import { useEffect, useRef, useState } from 'react'
import Styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Sidebar from '~/components/Layout/components/SideBar/SideBar'
import Content from '~/components/Layout/components/Content/Content'
import SearchHeader from '~/components/Layout/components/Search/Search'
const cx = classNames.bind(Styles)
function Home(props) {
    return (
        <>
            <Sidebar />
            <Content />
            <SearchHeader />
        </>
    )
}
export default Home
