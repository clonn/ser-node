config = require("./config.json")
request = require("request")
url = require("url")

class SerNode
  constructor: (options) ->
    this.id = options.id
    this.secret_key = options.secret_key
    this.config = options.config or config
    # console.log options
    return @
    # return @getToken()
  
  getRequestUrl: (urlparam) ->
    that = @
    return url.resolve(that.config.endpoint, urlparam)

  connect: (cb) ->
    that = @
    cb = cb or () -> return
    promise = new Promise (resolve, reject) ->

      requestUrl = that.getRequestUrl("user/get_token")
      console.log(requestUrl)
      requestForm = 
        id: that.id
        secret_key: that.secret_key

      request.post {
        url: requestUrl
        form: requestForm
      }, 
      (err, res, body) ->

        if (err)
          cb(err)
          return reject(err)

        result = JSON.parse body
        
        unless result.result.token
          cb(result)
          return reject(result)

        that.token = result.result.token
        cb(result)
        return resolve result

    return promise
    
  user: require("./user")

  request: (url, params) ->
    that = @
    promise = new Promise (resolve, reject) ->
      requestUrl = that.getRequestUrl(url)
      requestForm = params
      requestForm.token = that.token

      request.post {
        url: requestUrl
        form: requestForm
      },
      (err, res, body) ->
        
        return reject(err) if err

        result = JSON.parse body
        return resolve result
    return promise


module.exports = SerNode