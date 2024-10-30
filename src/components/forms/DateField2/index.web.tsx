import React from 'react'
import {Text, View} from 'react-native'

export function DateField2({value}: {value: Date}) {
  /*
  const { appLanguage, postLanguage, contentLanguages } = useLanguagePrefs()

  const dateParts = new Intl.DateTimeFormat(
    [appLanguage, postLanguage, ...contentLanguages][0], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  ).formatToParts(value)

  return (<View>
      <DateField2Inner dateParts={dateParts} />
    </View>
  )
}


function DateField2Inner({dateParts}: {dateParts: Intl.DateTimeFormatPart[]}) {



  const MyTextComponent = ({ text }: { text: string }) => <Text>{text}</Text>
  const MyTextInputComponent = ({ text }: { text: string }) => (
    <TextInput value={text} editable={true} /> // Add editable={false} if you don't want it to be modified
  );

  return (
      
        <FlatList
          data={dateParts}
          horizontal={true}
          keyExtractor={(item, index) => `${item.type}-${index}`}
          renderItem={
            ({ item }) => {
              const MyComponent = item.type == "literal" ? MyTextComponent : MyTextInputComponent;
              return <MyComponent text={item.value} />
            }
          }
        />

  )
  */

  console.log(value)

  return (
    <View>
      <Text>Hi</Text>
    </View>
  )
}
