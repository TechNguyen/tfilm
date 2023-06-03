import classNames from 'classnames/bind'
import Styles from './MovieItem.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(Styles)
function MovieItem({ item, index }) {
    const [showFilmAction, setAction] = useState(true)
    const navigate = useNavigate()
    const handleEnterFilms = () => {
        setAction(true)
    }
    const handleMouseLeft = () => {
        setAction(false)
    }
    const handleView = (item) => {
        navigate(`/phim/${item}`)
    }
    return (
        <div
            className={cx('movie-item')}
            key={index}
            // onMouseEnter={handleEnterFilms}
            // onMouseLeave={handleMouseLeft}
        >
            <div className={cx('films-item')}>
                <img src={item.thumb_url} alt="movie-item-banner" key={item._id} />
                <p className={cx('film-name')}>Tên phim: {item.origin_name}</p>
                <p className={cx('film-year')}>Năm phát hành: {item.year}</p>
                {showFilmAction && (
                    <div className={cx('movie-btn')}>
                        <button
                            className={cx('film-button')}
                            onClick={() => handleView(item.slug)}
                        >
                            <FontAwesomeIcon
                                icon={faPlay}
                                className={cx('film-btn-icon')}
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MovieItem
