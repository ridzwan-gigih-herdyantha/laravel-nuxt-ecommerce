const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['isAdmin'] = require('..\\middleware\\isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isCustomer'] = require('..\\middleware\\isCustomer.js')
middleware['isCustomer'] = middleware['isCustomer'].default || middleware['isCustomer']

export default middleware
