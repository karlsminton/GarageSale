export default class AbstractViewmodel
{
  // All viewmodels must implement this function - even if it does nothing
  afterLoad()
  {
    console.log('afterLoad ran')
  }
}
