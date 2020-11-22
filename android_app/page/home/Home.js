import React,{useState,useEffect} from 'react'

import {
    View,
    Text,
    Button,
    ScrollView,
    RefreshControl
} from 'react-native'

import { filterFieldData } from '../../utils/ext'

import IndexModel from '../../models/index'

import IndexSwiper from '../../components/IndexSwiper/index'
import MainTitle from '../../components/MainTitle/index'
import RecomCourseList from '../../components/RecomCourseList/index'
import CourseList from '../../components/CourseList'
const indexModel = new IndexModel()

const Home = props =>{
    const { navigation } = props

    useEffect(()=>{
        getCourseDatas()
    },[])

    const [swiperData,setSwiperData] = useState([])
    const [fieldData,setFieldData] = useState([])
    const [courseData,setCourseData] = useState([])
    const [recomCourseData,setRecomCourseData] = useState([])
    const getCourseDatas = ()=>{
        setIsRefreshing(true)
        indexModel.getCourseDatas().then(res=>{
            setTimeout(()=>{
                setIsRefreshing(false)
                setSwiperData(res.result.swipers)
                setFieldData(res.result.fields)
                setCourseData(res.result.courses)
                setRecomCourseData(res.result.recomCourses)
            },1000)
        })
    }

    const renderMainTitle = (data,title,key)=>{
        if(data){
            return data && <MainTitle title={data && data.field_name} key={key} />
        }
        return <MainTitle title={title} key={key} />
    }

    const [isRefreshing, setIsRefreshing] = useState(false)
    const onPageRefresh = ()=>{
        if(isRefreshing){
            return
        }
        setIsRefreshing(true)
        
        setTimeout(()=>{
            getCourseDatas()
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
        <ScrollView
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
                renderRefreshControl({
                    isRefreshing, 
                    onPageRefresh, 
                    title: '正在加载中',
                    titleColor: '#666',
                    tintColor: '#666'
                })
            }
        >
            <IndexSwiper 
                navigation={navigation}
                swiperData={swiperData}
            />
            
            { renderMainTitle(null,"推荐课程") }

            <RecomCourseList
                recomCourseData={ recomCourseData }
                navigation={ navigation }
            />

            { renderMainTitle(fieldData[0]) }

            <CourseList
                courseData={filterFieldData(courseData, '0', true)}
                navigation={navigation}
            />

            { renderMainTitle(fieldData[1]) }

            <CourseList
                courseData={filterFieldData(courseData, '1', true)}
                navigation={navigation}
            />

            { renderMainTitle(fieldData[2]) }

            <CourseList
                courseData={filterFieldData(courseData, '2', true)}
                navigation={navigation}
            />

            { renderMainTitle(fieldData[3]) }

            <CourseList
                courseData={filterFieldData(courseData, '3', true)}
                navigation={navigation}
            />
        </ScrollView>
        
    )
}

export default Home