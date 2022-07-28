class Scanner {

  constructor()
  {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 480,
            height: 480,
            facingMode: 'environment'
          },
        },
        locator: {patchSize: 'medium', halfSample: true},
        numOfWorkers: 4,
        decoder: {readers: ['code_128_reader']},
        locate: true,
      },
      function (e) {
        if (e) {
          return console.log(e)
        }
        Quagga.start()
      }
    )
    Quagga.onDetected(this.detected)
  }

  detected(result)
  {
    this.props.onDetected(result)
  }
}
