import React from 'react'

import {
    View,
    Text,
    Image
} from 'react-native'

import styles from './styles'

const Logo = props=>{
    return (
        <View style={styles.container}>
            <Image
                style={ styles.logo }
                source={ require('../../assets/images/logo.png') }
            />
            <Text style={styles.fr}>山寨版课堂</Text>
        </View>
    )
}

export default Logo