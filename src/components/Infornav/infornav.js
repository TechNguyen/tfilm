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

export const MenuList = [
    {
        to: '/',
        title: 'Trang chủ',
        icon: <FontAwesomeIcon icon={faHouse} />,
        iconActive: <FontAwesomeIcon icon={faHouse} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/community',
        title: 'Cộng đồng',
        icon: <FontAwesomeIcon icon={faGlobe} />,
        iconActive: <FontAwesomeIcon icon={faGlobe} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/discovery',
        title: 'Khám phá',
        icon: <FontAwesomeIcon icon={faCoins} />,
        iconActive: <FontAwesomeIcon icon={faCoins} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/comming',
        title: 'Sắp công chiếu',
        icon: <FontAwesomeIcon icon={faClock} />,
        iconActive: <FontAwesomeIcon icon={faClock} style={{ color: '#0d039b' }} />,
    },
]
export const Social = [
    {
        to: '/friends',
        title: 'Bạn bè',
        icon: <FontAwesomeIcon icon={faUserGroup} />,
        iconActive: <FontAwesomeIcon icon={faUserGroup} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/parties',
        title: 'Parties',
        icon: <FontAwesomeIcon icon={faCompass} />,
        iconActive: <FontAwesomeIcon icon={faCompass} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/media',
        title: 'Media',
        icon: <FontAwesomeIcon icon={faSquare} />,
        iconActive: <FontAwesomeIcon icon={faSquare} style={{ color: '#0d039b' }} />,
    },
]
export const Navigation = [
    {
        to: '/genre',
        title: 'Thể loại',
        icon: <FontAwesomeIcon icon={faRecycle} />,
        iconActive: <FontAwesomeIcon icon={faRecycle} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/nation',
        title: 'Quốc gia',
        icon: <FontAwesomeIcon icon={faLocation} />,
        iconActive: <FontAwesomeIcon icon={faLocation} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/series',
        title: 'Phim bộ',
        icon: <FontAwesomeIcon icon={faFilm} />,
        iconActive: <FontAwesomeIcon icon={faFilm} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/odd',
        title: 'Phim lẻ',
        icon: <FontAwesomeIcon icon={faStrikethrough} />,
        iconActive: (
            <FontAwesomeIcon icon={faStrikethrough} style={{ color: '#0d039b' }} />
        ),
    },
]
export const General = [
    {
        to: '/setting',
        title: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} />,
        iconActive: <FontAwesomeIcon icon={faGear} style={{ color: '#0d039b' }} />,
    },
    {
        to: '/loggin',
        title: 'Đăng nhập',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        iconActive: (
            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#0d039b' }} />
        ),
    },
    {
        to: '/Logout',
        title: 'Đăng ký',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        iconActive: (
            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#0d039b' }} />
        ),
    },
]
