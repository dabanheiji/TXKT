import { StyleSheet } from 'react-native'

import { screenSize } from '../../utils/tool'

const styles = StyleSheet.create({
    PageLoading:{
        width: screenSize.width,
        height: screenSize.height - 207,
        justifyContent:'center',
        alignItems:'center'
    },
    loadingPic:{
        width: 60,
        height: 60
    }
})

export default styles