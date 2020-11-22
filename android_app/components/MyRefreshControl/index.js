import React from 'react'

import {
    RefreshControl
} from 'react-native'

const MyRefreshControl = props => {

    const { isRefreshing, onPageRefresh } = props

    return (
        <RefreshControl
            isRefreshing={ isRefreshing }
            onRefresh={ onPageRefresh }
            titleColor="#666"
            title="正在加载"
            tintColor="#666"
        />
    )
}

export default MyRefreshControl