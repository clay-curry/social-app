import React, {useCallback,useState} from 'react'
import {StyleProp, TextStyle, View, ViewStyle, unstable_createElement} from 'react-native-web'

import {usePalette} from '#/lib/hooks/usePalette'
import {atoms as a, useTheme} from '#/alf'
import {useSharedInputStyles} from '#/components/forms/TextField'

interface Props {
  testID?: string
  value: Date
  onChange: (date: Date) => void
  buttonType?: string
  buttonStyle?: StyleProp<ViewStyle>
  buttonLabelType?: string
  buttonLabelStyle?: StyleProp<TextStyle>
  accessibilityLabel: string
  accessibilityHint: string
  accessibilityLabelledBy?: string
}

export function DateInput(props: Props) {
  const t = useTheme()
  const inputStyles = useSharedInputStyles()
  const [isHovered, setIsHovered] = React.useState(false)
  const pal = usePalette('default')
  const [value, setValue] = useState(toDateInputValue(props.value))

  const onChangeInternal = useCallback(
    (v: Date) => {
      if (!v) {
        return
      }
      setValue(toDateInputValue(v))
      props.onChange(v)
    },
    [setValue, props],
  )

  return (
    <View
      // ISSUE: component style
      style={[
        a.flex_row,
        t.atoms.bg_contrast_25,
        {
          paddingRight: a.p_sm.padding - 2,
          paddingLeft: a.p_sm.padding - 2,
          borderWidth: 1,
          borderRadius: 23,
          borderColor: 'transparent',
        },
        isHovered && inputStyles.chromeHover,
        //isFocused && inputStyles.chromeFocus
      ]}
      // @ts-expect-error web only
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {unstable_createElement('input', {
        type: 'date',
        value,
        style: [
          a.flex_1,
          a.px_sm,
          a.border_0,
          t.atoms.text,
          {
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: 'transparent',
            resize: 'none',
          },
        ],
        testID: props.testID,
        onChange: (e: any) => onChangeInternal(e.currentTarget.valueAsDate),
        placeholderTextColor: pal.colors.textLight,
        accessibilityLabel: props.accessibilityLabel,
        accessibilityHint: props.accessibilityHint,
        accessibilityLabelledBy: props.accessibilityLabelledBy,
      })}
    </View>
  )
}

// we need the date in the form yyyy-MM-dd to pass to the input
function toDateInputValue(d: Date): string {
  return d.toISOString().split('T')[0]
}
