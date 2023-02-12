import React, { useState, useEffect, useMemo } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, } from 'react-native';

import MultiSelect from 'react-native-multiple-select';

import { Calendar } from 'react-native-calendars';

import { Input } from '@rneui/base';
import { ListItem } from '@rneui/themed';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

function CustomCalendar(props) {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        if (month >= 10) {
            setCurrentDate(
                year + '-' + month + '-' + date
            );
        }
        else {
            setCurrentDate(
                year + "-0" + month + '-' + date
            );
        }
    }, []);


    const initDate = currentDate;
    const [selected, setSelected] = useState(initDate);
    const marked = useMemo(() => ({
        [selected]: {
            selected: true,
            selectedColor: '#222222',
            selectedTextColor: 'yellow',
        }
    }), [selected]);
    return (
        <Calendar
            style={{
                padding: 20,
                borderRadius: 35,
                margin: 0,
            }}
            initialDate={initDate}
            markedDates={marked}
            onDayPress={(day) => {
                setSelected(day.dateString);
                props.onDaySelect && props.onDaySelect(day);
            }}
            {...props}
        />
    );
}

const plus = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    const DATA = [
        { id: 1, name: 'Python' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'JavaScript' },
        { id: 4, name: 'C' },
        { id: 5, name: 'PHP' },
        { id: 6, name: 'Swift' },
        { id: 7, name: 'Ruby' },
        { id: 8, name: 'Dart' },
        { id: 9, name: 'SQL' },
        { id: 10, name: 'Perl' },
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {

        setSelectedItems(selectedItems);

        for (let i = 0; i < selectedItems.length; i++) {
            var tempItem = DATA.find(item => item.id === selectedItems[i]);
            console.log(tempItem);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1, margin: 15 }}>

            <View style={StyleSheet.MainContainer}>

                <Text style={StyleSheet.text}> Amount </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="0"
                    keyboardType="numeric"
                />

                {/* <Text style={StyleSheet.text}> React Native Multiple Select </Text> */}

                <MultiSelect
                    hideTags
                    items={DATA}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Select category"
                    searchInputPlaceholderText="Search category here..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#00BFA5"
                    submitButtonText="Submit"
                />


                <TextInput
                    style={styles.input}
                    placeholder="Note"
                />

                <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)} />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});


export default plus;