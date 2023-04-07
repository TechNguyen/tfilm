import classNames from 'classnames/bind'
import Styles from './Content.module.scss'
import Films from '../Filmsaction/films'
import titleNavi from '../navigation'
const cx = classNames.bind(Styles)
function Content() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('film-nav')}></nav>
            <Films />
        </div>
    )
}

export default Content
