import React from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
// @ts-ignore
import {unstable_createElement} from 'react-native-web'

import {DateField2Props} from '#/components/forms/DateField2/types'
import {toSimpleDateString} from '#/components/forms/DateField2/utils'
import * as TextField from '#/components/forms/TextField'
import {CalendarDays_Stroke2_Corner0_Rounded as CalendarDays} from '#/components/icons/CalendarDays'

export * as utils from '#/components/forms/DateField2/utils'
export const LabelText = TextField.LabelText

const InputBase = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({style, ...props}, ref) => {
    return unstable_createElement('input', {
      ...props,
      ref,
      type: 'date',
      style: [
        StyleSheet.flatten(style),
        {
          background: 'transparent',
          border: 0,
        },
      ],
    })
  },
)

InputBase.displayName = 'InputBase'

const Input = TextField.createInput(InputBase as unknown as typeof TextInput)

export function DateField2({
  value,
  onChangeDate,
  label,
  isInvalid,
  testID,
  accessibilityHint,
}: DateField2Props) {
  const handleOnChange = React.useCallback(
    (e: any) => {
      const date = e.target.valueAsDate || e.target.value

      if (date) {
        const formatted = toSimpleDateString(date)
        onChangeDate(formatted)
      }
    },
    [onChangeDate],
  )

  return (
    <TextField.Root isInvalid={isInvalid}>
      <TextField.Icon icon={CalendarDays} />
      <Input
        value={value}
        label={label}
        onChange={handleOnChange}
        onChangeText={() => {}}
        testID={testID}
        accessibilityHint={accessibilityHint}
      />
    </TextField.Root>
  )
}
