// ** React Imports
import { lazy } from 'react'

const Login = lazy(() => import('../../views/pages/authentication/LoginBasic'))

const Register = lazy(() =>
  import('../../views/pages/authentication/RegisterBasic')
)

const ForgotPassword = lazy(() =>
  import('../../views/pages/authentication/ForgotPasswordBasic')
)

const ResetPasswordBasic = lazy(() =>
  import('../../views/pages/authentication/ResetPasswordBasic')
)

const VerifyEmailBasic = lazy(() =>
  import('../../views/pages/authentication/VerifyEmailBasic')
)

const TwoStepsBasic = lazy(() =>
  import('../../views/pages/authentication/TwoStepsBasic')
)

const AuthenticationRoutes = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true,
    },
  },
  {
    path: '/register',
    element: <Register />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true,
    },
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    layout: 'BlankLayout',
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true,
    },
  },
  {
    path: '/reset-password',
    element: <ResetPasswordBasic />,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/verify-email',
    element: <VerifyEmailBasic />,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/two-steps-auth',
    element: <TwoStepsBasic />,
    meta: {
      layout: 'blank',
    },
  },
]

export default AuthenticationRoutes
