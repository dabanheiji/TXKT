import React from 'react'

import {
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native'

import { directToPage } from '../../utils/ext'


function SwiperItem(props){

    const {data,styles,navigation} = props

    const toDetailPage = ()=>{
        directToPage(navigation,'Detail',{
            courseId: data.course_id
        })
    }

    return (
        <TouchableWithoutFeedback
            style={styles.swiperSize}
            onPress={toDetailPage}
        >
            <Image
                style={styles.swiperSize}
                source={{
                    uri:data.img
                }}
            />
        </TouchableWithoutFeedback>
    )
}

export default SwiperItem