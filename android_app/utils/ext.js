/**
 * 过滤方法
 * @param {*} courseData 
 * @param {*} field 
 */
function filterFieldData (courseData, field, doSlice){
    const _data = courseData.filter((item,index)=>{
        if(field === 'all'){
            return true
        }

        return item.field === field;
    })

    return doSlice ? _data.slice(0,4) : _data;
}

/**
 * 跳转页面
 * @param {*} navigation 
 * @param {*} pageName 
 * @param {*} params 
 */
function directToPage(navigation, pageName, params){
    navigation.navigate(pageName,params);
}

export {
    filterFieldData,
    directToPage
}