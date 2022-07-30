import Quagga from 'quagga'

export default class Scanner
{
  result

  _cameraEnabled

  _config = {}

  resultCollector

  constructor()
  {
    this._config = {
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.getElementById('interactive'),
        constraints: {
          width: 480,
          height: 320,
          facingMode: "environment"
        },
      },
      decoder : {
        readers : [
          "code_128_reader",
          "ean_reader",
          "ean_5_reader",
          "ean_2_reader",
          "ean_8_reader",
          // "ean_13_reader",
          "code_39_reader",
          "code_39_vin_reader",
          "codabar_reader",
          "upc_reader",
          "upc_e_reader",
          "i2of5_reader",
          "2of5_reader",
          "code_93_reader"
        ],
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true
          }
        }
      }
    }
    this._cameraEnabled = false;

    this.resultCollector = Quagga.ResultCollector.create({
      capture: true,
      capacity: 1,
      blacklist: [],
      filter: (result) => {
        return true
      }
    })
  }

  _callback(error)
  {
    if (error) {
      return console.log('error initialising: ',err)
    }
    Quagga.registerResultCollector(this.resultCollector)
    console.log('initialised successfully')
    Quagga.start()
    Quagga.onProcessed(this._onProcessed)
    Quagga.onDetected(this._onDetected.bind(this))
  }

  onActivation()
  {
    this._cameraEnabled ? Quagga.stop()
      : Quagga.init(this._config, this._callback.bind(this))

    this._cameraEnabled = this._cameraEnabled === true ? false : true

    console.log('_cameraEnabled ', this._cameraEnabled)
  }

  _onProcessed(result)
  {
    var drawingCtx = Quagga.canvas.ctx.overlay,
    drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')))
        result.boxes.filter((box) => {
          return box !== result.box
        }).forEach((box) => {
          Quagga.ImageDebug.drawPath(
            box,
            {
              x: 0,
              y: 1
            },
            drawingCtx,
            {
              color: 'green',
              lineWidth: 2
            }
          )
        })
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(
          result.box,
          {
            x: 0,
            y: 1
          },
          drawingCtx,
          {
            color: "#00F",
            lineWidth: 2
          }
        )
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(
          result.line,
          {
            x: 'x',
            y: 'y'
          },
          drawingCtx,
          {
            color: 'red',
            lineWidth: 3
          }
        )
      }
    }
  }

  _onDetected(result)
  {
    // this.result = result
    this.result = this.resultCollector.getResults()[0]
    console.log('results ', this.result.codeResult)
  }
}
