import IUnitFactory from './Interfaces/IUnitFactory'
import IUnit from './Interfaces/IUnit'
import IUnitDefinition from './Interfaces/IUnitDefinition'
import DefaultUnits from './DefaultUnits'
import Unit from './Unit'

export default class Factory implements IUnitFactory 
{
  private definitions: IUnitDefinition[]
  
  constructor (definitions?: IUnitDefinition[]) 
  {
    this.definitions = definitions || DefaultUnits
  }

  make (code: string): IUnit 
  {
    const def: IUnitDefinition = this.definitions.find(def => def.code === code)

    if (!def) {
      throw new Error(`No Unit definition for code "${code}" was found.`)
    }
  
    return new Unit(def.code, def.name, def.symbol)
  }
}
