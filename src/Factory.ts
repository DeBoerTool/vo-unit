import FactoryInterface from './Interfaces/Factory'
import DefaultUnits from './DefaultUnits'
import UnitInterface from './Interfaces/Unit'
import Unit from './Unit'
import UnitDefinition from './Interfaces/UnitDefinition'

export default class Factory implements FactoryInterface {
  private definitions
  
  constructor (definitions?: UnitDefinition[]) {
    this.definitions = definitions || DefaultUnits
  }

  make (code: string): UnitInterface {
    const def: UnitDefinition = this.definitions.find(def => def.code === code)

    if (!def) {
      throw new Error(`No Unit definition for code "${code}" was found.`)
    }
  
    return new Unit(def.code, def.name, def.code)
  }
}
