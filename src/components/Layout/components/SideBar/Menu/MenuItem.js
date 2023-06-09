import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import fullList from '~/variable'
import config from '~/config/config'
import fullNav from '~/navigation'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon }) {
    const [shownav, setShownav] = useState(false)
    const handleShowNav = () => {
        shownav === true ? setShownav(false) : setShownav(true)
    }
    return (
        <div className={cx('wrapper-list')}>
            <NavLink
                to={to}
                className={(nav) =>
                    cx('menu_item', {
                        active: nav.isActive,
                    })
                }
                end
                onClick={handleShowNav}
            >
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('active-icon')}>{activeIcon}</span>
                <span className={cx('menu-item_title')}>{title}</span>
                {title === 'Thể loại' ? (
                    shownav === true ? (
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={cx('iconCheck', {
                                transformIcon: true,
                            })}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={cx('iconCheck', {
                                transformbforeIcon: !shownav,
                            })}
                        />
                    )
                ) : (
                    <></>
                )}
                {title === 'Quốc gia' ? (
                    shownav === true ? (
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={cx('iconCheck', {
                                transformIcon: true,
                            })}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={cx('iconCheck', {
                                transformbforeIcon: !shownav,
                            })}
                        />
                    )
                ) : (
                    <></>
                )}
            </NavLink>
            {title === 'Thể loại' && (
                <div
                    className={cx('nav-lists', {
                        showHiden: shownav,
                        hidenNav: !shownav,
                    })}
                >
                    <Navbar item={title} fullList={fullList} />
                </div>
            )}
            {title === 'Quốc gia' && (
                <div
                    className={cx('nav-lists', {
                        showHiden: shownav,
                        hidenNav: !shownav,
                    })}
                >
                    <Navbar item={title} fullList={fullNav} />
                </div>
            )}
        </div>
    )
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}
export default MenuItem
