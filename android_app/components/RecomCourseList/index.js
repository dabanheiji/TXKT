import React from 'react'

import {
    View,
    Text
} from 'react-native'

import CourseItem from './CourseItem'

import styles from './styles'

const RecomCourseList = props=>{

    const { recomCourseData, navigation } = props

    return (
        <View style={ styles.recomCourseBoard }>
            {
                recomCourseData.map((item,index)=>{
                    return (
                        <CourseItem
                            data={ item }
                            styles={ styles }
                            key={ index }
                            index={ index }
                            navigation={ navigation }
                        />
                    )
                })
            }
        </View>
    )
}

export default RecomCourseList