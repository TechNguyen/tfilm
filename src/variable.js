import axios from 'axios'
import { useState } from 'react'
let fullList = []
axios
    .get(`${process.env.REACT_APP_API_KEY}/the-loai`)
    .then((res) => {
        for (let x of res.data) {
            fullList.push(x)
        }
    })
    .catch((err) => {
        console.log(err)
    })
export default fullList
