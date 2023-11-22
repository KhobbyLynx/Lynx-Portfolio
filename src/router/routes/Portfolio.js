// ** React Imports
import { lazy } from 'react'

// ** Shop Ingegration
const Home = lazy(() => import('../../views/pages/portfolio/home'))
const About = lazy(() => import('../../views/pages/portfolio/about'))
const Projects = lazy(() => import('../../views/pages/portfolio/projects'))
const Contact = lazy(() => import('../../views/pages/portfolio/contact'))

const AppRoutes = [
  {
    element: <Home />,
    path: '/me',
    meta: {
      // className: 'ecommerce-application',
    },
  },
  {
    element: <Projects />,
    path: '/projects',
    meta: {},
  },
  {
    element: <About />,
    path: '/about',
    meta: {},
  },
  {
    element: <Contact />,
    path: '/contact',
    meta: {},
  },
]

export default AppRoutes
