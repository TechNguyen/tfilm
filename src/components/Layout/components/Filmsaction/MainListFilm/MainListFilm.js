import classNames from 'classnames/bind'
import Styles from './MainListFilm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import listbanner from '~/listBanner'
import MovieItem from '../MovieItem/MovieItem'
const cx = classNames.bind(Styles)
function MainListFilm({ data }) {
    if (data) {
        return (
            <div className={cx('wrapper')}>
                {data.map((item, index) => (
                    <MovieItem item={item} index={index} />
                ))}
            </div>
        )
    }
}

export default MainListFilm
