import classNames from 'classnames/bind'
import Styles from './ItemBanner.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const cx = classNames.bind(Styles)
function ItemBanner({ item, index }) {
    return (
        <div className={cx('movie__banner-item')} key={index}>
            <img
                src={`https://img.ophim1.com/uploads/movies/${item.poster_url}`}
                alt="movie-item-banner"
                key={item._id}
                width={100}
            />
        </div>
    )
}

export default ItemBanner
