import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout'
import Notfound from '~/components/NotFound/NotFound'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout
                        if (route.layout) {
                            Layout = route.layouts
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }
                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </Router>
    )
}
export default App
