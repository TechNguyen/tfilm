import classNames from 'classnames/bind'
import Styles from './Video.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import DetailFilm from '~/filmDetail'
const cx = classNames.bind(Styles)
function Video() {
    const { slug } = useParams()
    const result = DetailFilm(slug)
    console.log(result)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-poster')}>
                <img src={result[0].thumb_url} alt="posterImg" />
            </div>

            <div className={cx('video-infor')}></div>
        </div>
    )
}
export default Video
