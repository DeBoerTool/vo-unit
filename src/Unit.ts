import UnitInterface from './Interfaces/Unit'

export default class Unit implements UnitInterface {
  constructor (private code: string, private name: string, private symbol: string) {}

  isCode (code: string): boolean {
    return this.code === code
  }

  toString (): string {
    return this.symbol
  }

  value (): string {
    return this.toString()
  }
}
