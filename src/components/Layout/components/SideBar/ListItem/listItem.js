import classNames from 'classnames/bind'
import Styles from './listItem.module.scss'
import { NavLink } from 'react-router-dom'
const cx = classNames.bind(Styles)
function ListItem({ title, dataId, toUrl }) {
    return (
        <NavLink
            to={toUrl}
            className={(nav) =>
                cx('menu_item', {
                    active: nav.isActive,
                })
            }
            end
            id={dataId}
        >
            <span className={cx('menu-item_title')}>{title}</span>
        </NavLink>
    )
}

export default ListItem
