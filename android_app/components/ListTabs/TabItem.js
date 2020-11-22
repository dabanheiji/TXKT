import React from 'react'

import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native'

const TabItem = props => {
    const { 
        styles, 
        data, 
        curIdx, 
        index, 
        onTabClick } = props

    return (
        <View
            style={ [ styles.TabItem, index === curIdx && styles.tabItemCurrent ] }
        >
            <TouchableWithoutFeedback
                onPress={ ()=>onTabClick(data.field, index ) }
            >
                <Text
                    style={[ styles.tabItemText, index === curIdx && styles.tabItemTextCurrent ]}
                >{ data.field_name }</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default TabItem