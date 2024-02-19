const Stream = require('node-rtsp-stream-es6')

const options = {
  name: 'streamName',
  url: 'rtsp://b03773d78e34.entrypoint.cloud.wowza.com:1935/app-4065XT4Z/80c76e59_stream1',
  port: 5000
}

stream = new Stream(options)

stream.start()