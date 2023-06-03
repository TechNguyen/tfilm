import classNames from 'classnames/bind'
import Styles from './Content.module.scss'
import Films from '../Filmsaction/films'
import fullNav from '~/navigation'
import { Route, Router, Routes } from 'react-router-dom'
import ItemBanner from '../ItemBanner/ItemBanner'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import axios from 'axios'
import { Autoplay, EffectFade } from 'swiper'

const cx = classNames.bind(Styles)
function Content({ data }) {
    const [listBanner, setListBanner] = useState(null)
    useEffect(() => {
        const fetchingData = async () => {
            const { data: responsive } = await axios.get(
                `${process.env.REACT_APP_API_KEY}/danh-sach/phim-moi-cap-nhat?page=1`,
            )
            setListBanner(() => [...responsive.items])
        }
        fetchingData()
    }, [])
    if (listBanner) {
        return (
            <div className={cx('wrapper')}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    height={100}
                >
                    {listBanner.map((item, index) => (
                        <SwiperSlide>
                            <ItemBanner item={item} key={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Films title={'Danh sách phim mới'} />
            </div>
        )
    }
}

export default Content
