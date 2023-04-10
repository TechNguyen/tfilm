import axios from 'axios'
import { useState } from 'react'
let listbanner = []
axios
    .get(`${process.env.REACT_APP_API_KEY}/danh-sach/phim-moi-cap-nhat`)
    .then((res) => {
        for (let x of res.data.items) {
            axios
                .get(`https://ophim1.com/phim/${x.slug}`)
                .then((item) => {
                    listbanner.push(item.data.movie)
                })
                .catch(Error)
        }
    })
    .catch((err) => {
        console.log(err)
    })
export default listbanner
