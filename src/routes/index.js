import Home from '~/pages/Home/Home'
import Following from '~/pages/Following/index'
import Upload from '~/pages/Upload/index'
import Live from '~/pages/Live/index'
import config from '~/config/config'
import DetailFilm from '~/pages/DetailFilm/index'
const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.following, component: Following },
    { path: config.routers.profile, component: DetailFilm },
    { path: config.routers.live, component: Live },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
