import Quagga from 'quagga'

export default class Scanner
{
  _cameraEnabled;

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
    this._cameraEnabled = false;
  }

  _callback(error)
  {
    if (error) {
      return console.log('error initialising: ',err)
    }
    console.log('initialised successfully')
    Quagga.start()
  }

  onActivation()
  {
    this._cameraEnabled ? Quagga.stop()
      : Quagga.init(this._config, this._callback.bind(this))

    this._cameraEnabled = this._cameraEnabled === true ? false : true

    console.log('_cameraEnabled ', this._cameraEnabled)
  }


}
