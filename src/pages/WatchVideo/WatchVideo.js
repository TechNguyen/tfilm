import classNames from 'classnames/bind'
import Styles from './WatchVideo.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const cx = classNames.bind(Styles)
function WatchVideo() {
    const [dataMovie, setDatamovie] = useState(null)
    const { slug, num } = useParams()
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
        const trailer = movieItem.trailer
        const episodes = dataMovie.moviPro.episodes[0].server_data
        let videoItem = episodes.filter((item) => {
            return item.slug === num
        })
        console.log(videoItem[0])
        return (
            <div className={cx('wrapper-item')}>
                <iframe src={videoItem[0].link_embed} title={`phim/${slug}`} className={cx('')}></iframe>
            </div>
        )
    }
}

export default WatchVideo
