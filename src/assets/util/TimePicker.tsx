
import {  View,TouchableOpacity,Text, StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from "@react-navigation/native";
import { Button } from '@react-native-material/core';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



const TimePicker = ()=> {


    const [isVisible,setVisible] = useState(false)
    const showDataPick =()=>{
        setVisible(true)
    }
    const hideDataPick =()=>{
        setVisible(false)
    }


    const handleDatePicker=(datetime)=>{
        var currentTime = Date.now();
        if(datetime.getTime()<currentTime){
            Alert.alert("Selecione um tempo do futuro ");
            hideDataPick();
            return;

        }
        hideDataPick();
    }

  return (
        <View >
            <Button title='validade'
            onPress={showDataPick}>
                
            </Button>

            <DateTimePickerAndroid
            mode = "datetime"
            isVisible={isVisible}
            onConfirm={handleDatePicker}
            onCancel={hideDataPick}

            />
        </View>
    

  )
}
export default TimePicker();





