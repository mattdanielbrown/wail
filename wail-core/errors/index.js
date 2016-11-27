export class NullStatsError extends Error {
  constructor (message) {
    super()
    Object.defineProperty(this, 'name', {
      value: this.constructor.name
    })
    this.message = message
    Error.captureStackTrace(this, NullStatsError)
  }
}


