import UnitInterface from './Unit'

export default interface Factory {
  make (code: string): UnitInterface
}