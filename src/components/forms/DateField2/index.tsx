import React from 'react'
import {Keyboard, View} from 'react-native'
import DatePicker from 'react-native-date-picker'
import {msg, Trans} from '@lingui/macro'
import {useLingui} from '@lingui/react'

import {atoms as a, useTheme} from '#/alf'
import {Button, ButtonText} from '#/components/Button'
import * as Dialog from '#/components/Dialog'
import {DateField2Props} from '#/components/forms/DateField2/types'
import {toSimpleDateString} from '#/components/forms/DateField2/utils'
import * as TextField from '#/components/forms/TextField'
import {DateField2Button} from './index.shared'

export * as utils from '#/components/forms/DateField2/utils'
export const LabelText = TextField.LabelText

/**
 * Date-only input. Accepts a date in the format YYYY-MM-DD, and reports date
 * changes in the same format.
 *
 * For dates of unknown format, convert with the
 * `utils.toSimpleDateString(Date)` export of this file.
 */
export function DateField2({
  value,
  onChangeDate,
  testID,
  label,
  isInvalid,
  accessibilityHint,
}: DateField2Props) {
  const {_} = useLingui()
  const t = useTheme()
  const control = Dialog.useDialogControl()

  const onChangeInternal = React.useCallback(
    (date: Date | undefined) => {
      if (date) {
        const formatted = toSimpleDateString(date)
        onChangeDate(formatted)
      }
    },
    [onChangeDate],
  )

  return (
    <>
      <DateField2Button
        label={label}
        value={value}
        onPress={() => {
          Keyboard.dismiss()
          control.open()
        }}
        isInvalid={isInvalid}
        accessibilityHint={accessibilityHint}
      />
      <Dialog.Outer control={control} testID={testID}>
        <Dialog.Handle />
        <Dialog.Inner label={label}>
          <View style={a.gap_lg}>
            <View style={[a.relative, a.w_full, a.align_center]}>
              <DatePicker
                timeZoneOffsetInMinutes={0}
                theme={t.name === 'light' ? 'light' : 'dark'}
                date={new Date(value)}
                onDateChange={onChangeInternal}
                mode="date"
                testID={`${testID}-datepicker`}
                aria-label={label}
                accessibilityLabel={label}
                accessibilityHint={accessibilityHint}
              />
            </View>
            <Button
              label={_(msg`Done`)}
              onPress={() => control.close()}
              size="large"
              color="primary"
              variant="solid">
              <ButtonText>
                <Trans>Done</Trans>
              </ButtonText>
            </Button>
          </View>
        </Dialog.Inner>
      </Dialog.Outer>
    </>
  )
}
