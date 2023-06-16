import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useEffect, useState, useRef } from 'react'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'
import * as searchService from '~/service/searchApi'
import fullList from '~/variable'
import Filmweek from '../FilmofWeek/FilmWeek'
const cx = classNames.bind(styles)
function SearchHeader(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Enter the film"
                    className={cx('input__search')}
                />
            </div>

            <Filmweek />
        </div>
    )
}
export default SearchHeader
