import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './FilmWeek.module.scss'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(Styles)

function Filmweek(props) {
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
    const [listWeek, setlistweek] = useState(null)
    useEffect(() => {
        const fetchingData = async () => {
            const { data: responsive } = await axios.get(
                `${process.env.REACT_APP_API_KEY}/danh-sach/phim-moi-cap-nhat?page=1`,
            )

            setlistweek(() => [...responsive.items])
        }
        fetchingData()
    }, [])

    if (listWeek) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    {listWeek.map((item, index) => (
                        <div className={cx('films-item')}>
                            <img
                                src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`}
                                alt="movie-item-banner"
                                key={item._id}
                            />
                            <p className={cx('film-name')}>
                                Tên phim: {item.origin_name}
                            </p>
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
                    ))}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}
export default Filmweek
