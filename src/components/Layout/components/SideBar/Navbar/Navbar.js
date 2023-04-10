import classNames from 'classnames/bind'
import Styles from './Navbar.module.scss'
import ListItem from '../ListItem/listItem'

import { useState } from 'react'
const cx = classNames.bind(Styles)
function Navbar({ fullList }) {
    return (
        <div className={cx('wrapper')}>
            {fullList.map((item, index) => (
                <ListItem
                    title={item.name}
                    key={index}
                    dataId={item._id}
                    toUrl={item.slug}
                />
            ))}
        </div>
    )
}

export default Navbar
