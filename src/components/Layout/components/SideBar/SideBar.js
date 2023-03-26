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
const cx = classNames.bind(Styles)
const MenuList = [
    {
        to: '/',
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHouse} />,
        iconActive: <FontAwesomeIcon icon={faHouse} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Community',
        icon: <FontAwesomeIcon icon={faGlobe} />,
        iconActive: <FontAwesomeIcon icon={faGlobe} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Discovery',
        icon: <FontAwesomeIcon icon={faCoins} />,
        iconActive: <FontAwesomeIcon icon={faCoins} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Comming soon',
        icon: <FontAwesomeIcon icon={faClock} />,
        iconActive: <FontAwesomeIcon icon={faClock} style={{ color: '#0d039b' }} />,
    },
]
const Social = [
    {
        to: '/',
        title: 'Friends',
        icon: <FontAwesomeIcon icon={faUserGroup} />,
        iconActive: <FontAwesomeIcon icon={faUserGroup} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Parties',
        icon: <FontAwesomeIcon icon={faCompass} />,
        iconActive: <FontAwesomeIcon icon={faCompass} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Media',
        icon: <FontAwesomeIcon icon={faSquare} />,
        iconActive: <FontAwesomeIcon icon={faSquare} style={{ color: '#0d039b' }} />,
    },
]
const Navigation = [
    {
        to: '/',
        title: 'Genre',
        icon: <FontAwesomeIcon icon={faRecycle} />,
        iconActive: <FontAwesomeIcon icon={faRecycle} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Nation',
        icon: <FontAwesomeIcon icon={faLocation} />,
        iconActive: <FontAwesomeIcon icon={faLocation} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Series movie',
        icon: <FontAwesomeIcon icon={faFilm} />,
        iconActive: <FontAwesomeIcon icon={faFilm} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Odd movie',
        icon: <FontAwesomeIcon icon={faStrikethrough} />,
        iconActive: (
            <FontAwesomeIcon icon={faStrikethrough} style={{ color: '#0d039b' }} />
        ),
    },
]
const General = [
    {
        to: '/',
        title: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} />,
        iconActive: <FontAwesomeIcon icon={faGear} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/',
        title: 'Log In',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        iconActive: (
            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#0d039b' }} />
        ),
    },
    {
        to: '/',
        title: 'Log Out',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        iconActive: (
            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#0d039b' }} />
        ),
    },
]
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
                    <p className={cx('title_heading')}>Social</p>
                    {Social.map((item, index) => (
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
