import ValueObject from '@deboertool/value-object-interface'

export default interface Unit extends ValueObject<string> {
  isCode (code: string): boolean
  toString ()
}