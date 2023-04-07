import classNames from 'classnames/bind'
import Styles from './Navbar.module.scss'
import ListItem from '../ListItem/listItem'

import { useState } from 'react'
const cx = classNames.bind(Styles)
function Navbar({ fullList }) {
    console.log(fullList)
    return (
        <div className={cx('wrapper')}>
            {fullList.map((item, index) => (
                <ListItem title={item} key={index} />
            ))}
        </div>
    )
}

export default Navbar
