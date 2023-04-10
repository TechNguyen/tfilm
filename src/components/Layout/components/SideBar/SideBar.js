import classNames from 'classnames/bind'
import Styles from './Sidebar.module.scss'
import images from '~/assets/imgs'
import Menu, { MenuItem } from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGlobe,
    faHouse,
    faClock,
    faUser,
    faUserGroup,
    faSquare,
    faGear,
    faRightFromBracket,
    faCoins,
    faCompass,
    faRecycle,
    faLocation,
    faFilm,
    faStrikethrough,
} from '@fortawesome/free-solid-svg-icons'
import { MenuList, Navigation, General } from '~/components/Infornav/infornav'
import { useState } from 'react'
const cx = classNames.bind(Styles)

function Sidebar(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <span className={cx('header_logo')}>
                    <img src={images.logoFilm} alt="logofilm" />
                </span>
                <h2 className={cx('logo_name')}>Esstimal</h2>
            </div>
            <div className={cx('wrapper_nav')}>
                <Menu>
                    <p className={cx('title_heading')}>Menu</p>
                    {MenuList.map((item, index) => (
                        <MenuItem
                            to={item.to}
                            title={item.title}
                            icon={item.icon}
                            activeIcon={item.iconActive}
                            key={index}
                        />
                    ))}
                </Menu>
                <Menu>
                    <p className={cx('title_heading')}>Category</p>
                    {Navigation.map((item, index) => (
                        <MenuItem
                            to={item.to}
                            title={item.title}
                            icon={item.icon}
                            activeIcon={item.iconActive}
                            key={index}
                        />
                    ))}
                </Menu>
                <Menu>
                    <p className={cx('title_heading')}>General</p>
                    {General.map((item, index) => (
                        <MenuItem
                            to={item.to}
                            title={item.title}
                            icon={item.icon}
                            activeIcon={item.iconActive}
                            key={index}
                        />
                    ))}
                </Menu>
            </div>
        </div>
    )
}
export default Sidebar
