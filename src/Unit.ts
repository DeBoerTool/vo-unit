import UnitInterface from './Interfaces/Unit'

export default class Unit implements UnitInterface {
  constructor (private _code: string, private _name: string, private _symbol: string) {}

  code (): string {
    return this._code
  }

  name (): string {
    return this._name
  }

  symbol (): string {
    return this._symbol
  }

  isCode (code: string): boolean {
    return this._code === code
  }

  toString (): string {
    return this._symbol
  }

  value (): string {
    return this.toString()
  }
}
