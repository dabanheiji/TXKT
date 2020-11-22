import {
    StyleSheet,
} from 'react-native'

import {screenSize} from '../../utils/tool'

const styles = StyleSheet.create({
    swiperSize:{
        width: screenSize.width,
        height:90,

    },
    pagination:{
        bottom:10
        // backgroundColor:'red'
    }
})

export default styles