import axios from 'axios'
import { useState } from 'react'
let fullNav = []
axios
    .get(`${process.env.REACT_APP_API_KEY}/quoc-gia`)
    .then((res) => {
        for (let x of res.data) {
            fullNav.push(x)
        }
    })
    .catch(Error)
export default fullNav
