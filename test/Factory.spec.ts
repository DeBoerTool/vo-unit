import { Factory, Unit } from '../'
import { expect } from 'chai'

const defaultVo = new Factory().make('in')
const customVo = new Factory([{code: 'te', name: 'test', symbol: '$'}]).make('te')

describe('Tolerance', () => {
  it(
    'makes a Unit from the default set', 
    () => expect(defaultVo).to.be.instanceOf(Unit)
  )

  it(
    'makes a Unit from a custom set set', 
    () => expect(customVo).to.be.instanceOf(Unit)
  )
})