import classNames from 'classnames/bind'
import Styles from './Content.module.scss'
import Films from '../Filmsaction/films'
import fullNav from '~/navigation'
import { Route, Router, Routes } from 'react-router-dom'
const cx = classNames.bind(Styles)
function Content() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('film-nav')}></nav>
            <Films title={'Danh sách phim mới'} />
        </div>
    )
}

export default Content
