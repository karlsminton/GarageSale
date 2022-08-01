import Scanner from './scanner'
import $ from 'jquery'

export default class App {

  scanner;

  constructor()
  {
    this.scanner = new Scanner(this)
  }

  onActivation()
  {
    this.scanner.onActivation()
  }

  setResult(result)
  {
    alert('result proper received ya know kid')
  }
}
