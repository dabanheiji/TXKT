import React from 'react'

import {
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native'

import Swiper from 'react-native-swiper'

import styles from './styles'

import SwiperItem from './SwiperItem'

function IndexSwiper(props){

    const {swiperData,navigation} = props
    const {swiperHeight} = styles.swiperSize.height

    return (
        <View height={swiperHeight}>
            <Swiper
                key={swiperData.length}
                height={90}
                autoplay={true}
                loop={true}
                paginationStyle={styles.pagination}
            >
                {
                    swiperData.map((item,index)=>{
                        return (
                            <SwiperItem
                                data={item}
                                key={index}
                                navigation={navigation}
                                styles={styles}
                            />
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

export default IndexSwiper