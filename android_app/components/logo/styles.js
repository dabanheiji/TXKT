import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexWrap:'nowrap',
        textAlign:'center'
    },
    logo:{
        position:'absolute',
        left: 100,
        top:-20,
        width: 44,
        height: 44,
    },
    fr:{
        position:'absolute',
        right:100,
        top:-6,
        fontSize:16,
        fontWeight:'bold'
    }
})

export default styles