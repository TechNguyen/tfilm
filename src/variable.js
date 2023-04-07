import axios from 'axios'
import { options } from '~/option'
import { useState } from 'react'
let fullList = []
options.url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres'
axios
    .request(options)
    .then((res) => {
        for (let x of res.data.results.splice(1)) {
            fullList.push(x)
        }
    })
    .catch((err) => {
        console.log(err)
    })
export default fullList
