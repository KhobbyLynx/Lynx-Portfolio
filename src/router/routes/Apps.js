// ** React Imports
import { lazy } from 'react'

// ** Shop Ingegration
const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() =>
  import('../../views/apps/ecommerce/wishlist')
)
const EcommerceCheckout = lazy(() =>
  import('../../views/apps/ecommerce/checkout')
)

const AppRoutes = [
  {
    element: <EcommerceShop />,
    path: '/shop',
    meta: {
      className: 'ecommerce-application',
    },
  },
  {
    element: <EcommerceWishlist />,
    path: '/wishlist',
    meta: {
      className: 'ecommerce-application',
    },
  },
  {
    path: '/product-detail/:product',
    element: <EcommerceDetail />,
    meta: {
      className: 'ecommerce-application',
    },
  },
  {
    path: '/checkout',
    element: <EcommerceCheckout />,
    meta: {
      className: 'ecommerce-application',
    },
  },
]

export default AppRoutes
