import Quagga from 'quagga'

export default class Scanner
{
  _cameraEnabled = false;

  _config = {}

  constructor()
  {
    this._config = {
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.getElementById('interactive')
      },
      decoder : {
        readers : ["code_128_reader"]
      }
    }
  }

  _callback(error)
  {
    if (error) {
      return console.log(err)
    }
    console.log("Initialization finished. Ready to start")
    Quagga.start()
    this._cameraEnabled = !this._cameraEnabled
  }

  onActivation()
  {
    this._cameraEnabled ? Quagga.stop()
      : Quagga.init(this._config, this._callback)

    this._cameraEnabled = !this._cameraEnabled

    console.log('_cameraEnabled ', this._cameraEnabled)
  }


}
