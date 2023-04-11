import classNames from 'classnames/bind'
import Styles from './Video.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import DetailFilm from '~/filmDetail'
const cx = classNames.bind(Styles)
function Video() {
    const [dataMovie, setDatamovie] = useState(null)
    const navigate = useNavigate()
    const handleVideo = (num, name) => {
        console.log(num, name)
        // navigate(`/phim/${name}/${num}`)
    }
    const { slug } = useParams()
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const { data: responsive } = await axios.get(
                    `${process.env.REACT_APP_API_KEY}/phim/${slug}`,
                )
                setDatamovie({
                    moviPro: responsive,
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchingData()
    }, [])
    if (dataMovie) {
        const movieItem = dataMovie.moviPro.movie
        const arrActor = movieItem.actor
        const arrDirector = movieItem.director
        const movieGenre = movieItem.category
        const movieNation = movieItem.country
        const videoPoster = movieItem.poster_url
        const trailer = movieItem.trailer
        const slug = movieItem.slug
        const episodes = dataMovie.moviPro.episodes[0].server_data
        console.log(episodes)
        return (
            <div className={cx('wrapper')}>
                <div className={cx('video-detail')}>
                    <div className={cx('video-poster')}>
                        <img src={movieItem.thumb_url} alt="posterImg" />
                    </div>
                    <div className={cx('video-infor')}>
                        <h1>{movieItem.name}</h1>
                        <h3>{movieItem.origin_name}</h3>
                        <span className={cx('video-directora')}>
                            Đạo diễn:
                            {arrDirector.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </span>
                        <span className={cx('video-actors')}>
                            Diễn Viên:
                            {arrActor.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </span>
                        <span className={cx('video-genre')}>
                            Thể loại:
                            {movieGenre.map((item, index) => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </span>
                        <span className={cx('video-genre')}>
                            Quốc gia:
                            {movieNation.map((item, index) => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </span>
                        <span className={cx('video-genre')}>
                            Thời lượng:
                            <p>{movieItem.time}</p>
                        </span>
                        <span className={cx('video-genre')}>
                            Đang phát:
                            <p>{movieItem.episode_current}</p>
                        </span>
                        <span className={cx('video-genre')}>
                            Lượt xem:
                            <p>{movieItem.view}</p>
                        </span>
                        <span className={cx('video-genre')}>
                            Năm phát hành:
                            <p>{movieItem.year}</p>
                        </span>
                        <span className={cx('video-genre')}>
                            Chất lượng:
                            <p>{movieItem.quality}</p>
                        </span>

                        <button>{movieItem.lang}</button>
                    </div>

                    <div className={cx('video-episodes')}>
                        {episodes.map((esp, index) => (
                            <button
                                className={cx('video-esp_num')}
                                key={index}
                                onClick={(esp) => handleVideo(esp, slug)}
                            >
                                {esp.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={cx('video-content')}>
                    <h1>
                        {movieItem.name} - {movieItem.origin_name} '({movieItem.year})'
                    </h1>
                    <p className={cx('video-content_title')}>{movieItem.content}</p>
                    <div className={cx('video-poster')}>
                        <img src={videoPoster} alt="video-poster" />
                    </div>

                    {trailer && (
                        <div className={cx('video-trailer')}>
                            <video src={trailer} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
    return null
}
export default Video
