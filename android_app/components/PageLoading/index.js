import React from 'react'

import {
    View,
    Image
} from 'react-native'

import styles from './styles'

const PageLoading = props => {
    return (
        <View style={ styles.PageLoading }>
            <Image
                style={ styles.loadingPic }
                source={ require('../../assets/images/loading.png') }
            />
        </View>
    )
}

export default PageLoading