import apicache from 'apicache'

const cache = apicache.middleware
export const cacheMiddleware = cache('3 minutes')
