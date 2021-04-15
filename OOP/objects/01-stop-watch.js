// define a stopwatch object
// properties: duration (initially zero)
// methods: reset, start, stop

function StopWatch() {
  let startTime, endTime, running, duration = 0

  this.start = () => {
    if (running)
      throw new Error('Stopwatch has already started')

    startTime = performance.now()
    running = true
  }

  this.stop = () => {
    if (!running)
      throw new Error('Stopwatch is not started')

    endTime = performance.now()
    let seconds = ((endTime - startTime) / 1000)
    duration += seconds
    running = false
  }

  this.reset = () => {
    if (running)
      throw new Error('Stop the watch first')
    duration = 0
  }

  Object.defineProperty(this, 'duration', {

    get: function () {
      return duration.toFixed(3)
    }
  })
}

const sw = new StopWatch()
