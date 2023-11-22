import useJwt from '@src/@core/auth/jwt/useJwt'
import { DefaultRoute } from '../router/routes'

// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
  return (
    localStorage.getItem('userData') &&
    localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
  )
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 * @param {String} userRole Role of user
 */

// ** Login is not required
export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === 'client') return DefaultRoute
  return DefaultRoute
}
