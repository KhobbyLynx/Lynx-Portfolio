import { lazy } from 'react'

const Faq = lazy(() => import('../../views/pages/faq'))
const License = lazy(() => import('../../views/pages/license'))
const Error = lazy(() => import('../../views/pages/misc/Error'))
const BlogList = lazy(() => import('../../views/pages/blog/list'))
const BlogDetails = lazy(() => import('../../views/pages/blog/details'))
const ComingSoon = lazy(() => import('../../views/pages/misc/ComingSoon'))
const Maintenance = lazy(() => import('../../views/pages/misc/Maintenance'))
const AccountSettings = lazy(() => import('../../views/pages/account-settings'))
const NotAuthorized = lazy(() => import('../../views/pages/misc/NotAuthorized'))
const KnowledgeBase = lazy(() =>
  import('../../views/pages/knowledge-base/KnowledgeBase')
)
const KnowledgeBaseCategory = lazy(() =>
  import('../../views/pages/knowledge-base/KnowledgeBaseCategory')
)
const KBCategoryQuestion = lazy(() =>
  import('../../views/pages/knowledge-base/KnowledgeBaseCategoryQuestion')
)

const PagesRoutes = [
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/knowledge-base',
    element: <KnowledgeBase />,
  },
  {
    path: '/knowledge-base/:category',
    element: <KnowledgeBaseCategory />,
  },
  {
    path: '/knowledge-base/:category/:question',
    element: <KBCategoryQuestion />,
  },
  {
    path: '/account-settings',
    element: <AccountSettings />,
  },
  {
    path: '/license',
    element: <License />,
  },
  {
    path: '/blog/list',
    element: <BlogList />,
  },
  {
    path: '/blog/detail/:id',
    element: <BlogDetails />,
  },
  {
    path: '/coming-soon',
    element: <ComingSoon />,
    meta: {
      publicRoute: true,
      layout: 'blank',
    },
  },
  {
    path: '/not-authorized',
    element: <NotAuthorized />,
    meta: {
      publicRoute: true,
      layout: 'blank',
    },
  },
  {
    path: '/maintenance',
    element: <Maintenance />,
    meta: {
      publicRoute: true,
      layout: 'blank',
    },
  },
  {
    path: '/error',
    element: <Error />,
    meta: {
      publicRoute: true,
      layout: 'blank',
    },
  },
]

export default PagesRoutes
