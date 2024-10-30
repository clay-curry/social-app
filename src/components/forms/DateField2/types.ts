export type DateField2Props = {
  value: string | Date
  onChangeDate: (date: string | Date) => void
  label: string
  isInvalid?: boolean
  testID?: string
  accessibilityHint?: string
}
