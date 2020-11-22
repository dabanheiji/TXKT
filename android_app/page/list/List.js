import React,{useEffect,useState} from 'react'

import {
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native'

import ListModel from '../../models/list'
import commonStyles from '../../styles'

import ListTabs from '../../components/ListTabs'
import CourseList from '../../components/CourseList'
import MyRefreshControl from '../../components/MyRefreshControl'
import PageLoading from '../../components/PageLoading'

const listModel = new ListModel()

const List = props =>{

    const { navigation } = props
    const [showLoading,setShowLoading] = useState(false)

    useEffect(()=>{
        getCourseFields()
        getCourse(curField)
    },[])


    const [fieldData,setFieldData] = useState([])
    const getCourseFields = ()=>{
        listModel.getCourseFields().then(res=>{
            setFieldData([{field_name:"全部课程", field: 'all'}].concat(res.result))
        })
    }

    const [courseData, setCourseData] = useState([])
    const getCourse = field => {
        setIsRefreshing(true)
        setShowLoading(true)
        listModel.getCourse(field).then(res => {
            // setCourseData(courseData => {
            //     courseData[field] = res.result;
            //     return courseData
            // })
            setTimeout(()=>{
                setShowLoading(false)
                setIsRefreshing(false)
                setCourseData(res.result)
            },1000)
        })
    }

    const [curIdx,setCurIdx] = useState(0)
    const [curField,setCurField] = useState('all')
    const onTabClick = (dield, index)=>{
        setCurField(dield)
        setCurIdx(index)
        getCourse(dield)
    }


    const [isRefreshing, setIsRefreshing] = useState(false)
    const onPageRefresh = ()=>{
        if(isRefreshing){
            return
        }
        setIsRefreshing(true)
        setTimeout(()=>{
            getCourse(curField)
            setIsRefreshing(false)
        },1500)
    }
    const renderRefreshControl = (options)=>{

        const {isRefreshing, onPageRefresh, title, titleColor, tintColor} = options

        return (
            <RefreshControl
                refreshing={ isRefreshing }
                onRefresh={ onPageRefresh }
                tintColor={ tintColor }
                title={ title }
                titleColor={ titleColor }
            />
        )
    }

    return (
       <View style={ commonStyles.container }>
           <ListTabs
                fieldData={fieldData}
                onTabClick={onTabClick}
                curIdx={curIdx}
           />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    renderRefreshControl({
                        isRefreshing, 
                        onPageRefresh, 
                        title:"正在加载", 
                        titleColor:'#666',
                        tintColor:'#666'
                    })
                    // <MyRefreshControl
                    //     isRefreshing={isRefreshing}
                    //     onPageRefresh={onPageRefresh}
                    // />
                }
            >
                {
                    showLoading
                    ?
                    <PageLoading /> 
                    :
                    <CourseList
                        courseData={ courseData || [] }
                        navigation={navigation}
                    />
                }
            </ScrollView>
       </View>
    )
}

export default List