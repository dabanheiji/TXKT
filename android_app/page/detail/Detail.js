import React from 'react'
import WebView from 'react-native-webview'


const Detail = props =>{

    const {route} = props,
        {courseId} = route.params;

    return (
        <WebView
            source={{ uri: 'https://ke.qq.com/course/' + courseId}}
            startInLoadingState={ true }
        />
    )
}

export default Detail