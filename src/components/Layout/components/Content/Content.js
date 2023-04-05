import classNames from 'classnames/bind'
import Styles from './Content.module.scss'
const cx = classNames.bind(Styles)
function Content() {
    return <div className={cx('wrapper')}></div>
}

export default Content
