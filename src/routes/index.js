import Home from '~/pages/Home/Home'
import DetailFilm from '~/pages/DetailFilm/index'
import config from '~/config/config'
import Community from '~/pages/community/Community'
import Discovery from '~/pages/discovery/Discovery'
import Comming from '~/pages/comming/comming'
import Friends from '~/pages/friends/friends'
import Parties from '~/pages/parties/parties'
import Genre from '~/pages/genre/genre'
import Nation from '~/pages/nation/nation'
import Series from '~/pages/series/series'
import Media from '~/pages/media/media'
import Odd from '~/pages/odd/odd'
import Setting from '~/pages/setting/setting'
import Loggout from '~/pages/Logout/Logout'
import Loggin from '~/pages/loggin/loggin'
import Video from '~/pages/Video/Video'
import WatchVideo from '~/pages/WatchVideo/WatchVideo'
const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.detail, component: DetailFilm },
    { path: config.routers.community, component: Community },
    { path: config.routers.discovery, component: Discovery },
    { path: config.routers.comming, component: Comming },
    { path: config.routers.friends, component: Friends },
    { path: config.routers.parties, component: Parties },
    { path: config.routers.genre, component: Genre },
    { path: config.routers.nation, component: Nation },
    { path: config.routers.series, component: Series },
    { path: config.routers.odd, component: Odd },
    { path: config.routers.setting, component: Setting },
    { path: config.routers.loggin, component: Loggin },
    { path: config.routers.Logout, component: Loggout },
    { path: config.routers.media, component: Media },
    { path: config.routers.video, component: Video },
    { path: config.routers.detailVideo, component: WatchVideo },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
