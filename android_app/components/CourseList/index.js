import React from 'react'

import {
    View,
    Text
} from 'react-native'

import styles from './styles'

import CourseItem from './CourseItem'

const CourseList = props=>{

    const { navigation, courseData } = props

    return (
        <View style={ styles.courseBoard }>
            {
                courseData.map((item,index)=>{
                    return (
                        <CourseItem
                            key={index}
                            navigation={navigation}
                            data={item}
                            index={index}
                            styles={styles}
                        />
                    )
                })
            }
        </View>
    )
}

export default CourseList