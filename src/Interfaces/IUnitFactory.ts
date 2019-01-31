import IUnit from './IUnit'

export default interface IUnitFactory 
{
  make (code: string): IUnit
}