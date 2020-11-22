import React from 'react'

import {
    View,
    Text,
    ScrollView
} from 'react-native'

import styles from './styles'

import TabItem from './TabItem'

const ListTabs = props => {

    const { fieldData, onTabClick, curIdx } = props

    return (
        <View style={ styles.tabContainer }>
            <ScrollView
                showsHorizontalScrollIndicator={ false}
                horizontal={true}
            >
                {
                    fieldData.map((item,index)=>{
                        return (
                            <TabItem
                                styles={ styles }
                                data={ item }
                                index={ index }
                                key={ index }
                                curIdx={ curIdx }
                                onTabClick={ onTabClick }
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ListTabs