import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "admin"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // admin
  $auth.registerStrategy('admin', new LocalScheme($auth, {
  "token": {
    "property": "token",
    "required": true,
    "type": "Bearer"
  },
  "user": {
    "property": "user"
  },
  "endpoints": {
    "login": {
      "url": "/api/admin/login",
      "method": "post",
      "propertyName": "token"
    },
    "logout": {
      "url": "/api/admin/logout",
      "method": "post"
    },
    "user": {
      "url": "/api/admin/user",
      "method": "get",
      "propertyName": "user"
    }
  },
  "name": "admin"
}))

  // customer
  $auth.registerStrategy('customer', new LocalScheme($auth, {
  "token": {
    "property": "token",
    "required": true,
    "type": "Bearer"
  },
  "user": {
    "property": "user"
  },
  "endpoints": {
    "login": {
      "url": "/api/customer/login",
      "method": "post",
      "propertyName": "token"
    },
    "logout": {
      "url": "/api/customer/logout",
      "method": "post"
    },
    "user": {
      "url": "/api/customer/user",
      "method": "get",
      "propertyName": "user"
    }
  },
  "name": "customer"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
