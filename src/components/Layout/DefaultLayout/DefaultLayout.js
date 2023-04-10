import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'
import SideBar from '../components/SideBar'
import Search from '../components/Search'
import Content from '../components/Content'
const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrappper')}>
            {children}
            {/* <SideBar />
            <Content />
            <Search /> */}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout
