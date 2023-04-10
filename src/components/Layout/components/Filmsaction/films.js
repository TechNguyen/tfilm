import classNames from 'classnames/bind'
import Styles from './films.module.scss'
import listbanner from '~/listBanner'
import { useCallback, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter,
    NavLink,
    Route,
    Router,
    Routes,
    useNavigate,
} from 'react-router-dom'
import actionVideo from './actionVideo/actionVideo'
const cx = classNames.bind(Styles)
function Films({ title }) {
    const [showFilmAction, setAction] = useState(false)
    const navigate = useNavigate()
    const handleEnterFilms = () => {
        showFilmAction === true ? setAction(false) : setAction(true)
    }
    const handleView = (item) => {
        navigate(`/phim/${item}`)
    }
    return (
        <div className={cx('movie_banner_wrapper')}>
            <p className={cx('movie-title')}>{title}</p>
            {listbanner.map((item, index) => (
                <div
                    className={cx('movie-item')}
                    key={index}
                    onMouseEnter={handleEnterFilms}
                >
                    <div className={cx('films-item')}>
                        <img
                            src={item.thumb_url}
                            alt="movie-item-banner"
                            key={item._id}
                        />
                        <p className={cx('film-name')}>Tên phim: {item.origin_name}</p>
                        <p className={cx('film-year')}>Năm phát hành: {item.year}</p>
                    </div>

                    <button
                        className={cx('film-button')}
                        onClick={() => handleView(item.slug)}
                    >
                        <FontAwesomeIcon icon={faPlay} className={cx('film-btn-icon')} />
                        Xem ngay
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Films
