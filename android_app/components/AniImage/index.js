import React from 'react';

import {
    Image,
    Animated
} from 'react-native'

const AniImage = props => {
    const { styles, url } = props

    const animateValue = new Animated.Value(0);

    const imgAnimation = animateValue.interpolate({
        inputRange: [0,100],
        outputRange: [0,1]
    })

    return (
        <Animated.Image 
            onLoadEnd={()=>{
                Animated.timing(animateValue,{
                    toValue: 100,
                    duration: 500
                }).start();
            }}
            source={ { uri:url } }
            style={ [ styles, { opacity: imgAnimation } ]}
        />
    )
}

export default AniImage