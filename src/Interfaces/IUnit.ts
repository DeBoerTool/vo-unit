import ValueObject from '@deboertool/value-object-interface'

export default interface IUnit extends ValueObject<string> 
{
  code (): string
  name (): string
  symbol (): string
  isCode (code: string): boolean
  toString (): string
}