import Unit from '../src/Unit'
import { expect } from 'chai'

const vo = new Unit('te', 'test', '_')

describe('Tolerance', () => {
  it(
    'checks if the object has the given code', 
    () => {
      expect(vo.isCode('flange')).to.equal(false)
      expect(vo.isCode('te')).to.equal(true)
    }
  )

  it(
    'returns the symbol as the value',
    () => expect(vo.toString()).to.equal('_')
  )
})