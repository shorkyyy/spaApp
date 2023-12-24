// Header.js
import React, {useMemo} from 'react';
import { View, StyleSheet, Platform, Text, Animated } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const Header = ({ handleDateSelected, scrollY }) => {
    const interpolateScroll = (scrollY, inputRange, outputRange, extrapolate) => {
        return scrollY.interpolate({
            inputRange,
            outputRange,
            extrapolate,
        });
    };

    const animatedValues = useMemo(() => {
        return {
            headerContainerHeight: interpolateScroll(scrollY, [0, 200], [130, 120], 'clamp'),
            titleMarginTop: interpolateScroll(scrollY, [0, 200], [30, 0], 'clamp'),
            titleOpacity: interpolateScroll(scrollY, [0, 50], [1, 0], 'clamp'),
        };
    }, [scrollY]);

    return (
        <View style={styles.headerContainer}>
            <Animated.View style={[styles.headerTitle, , { height: animatedValues.titleMarginTop, opacity: animatedValues.titleOpacity }]}>
                <Text style={styles.headerText}>Lên lịch hẹn</Text>
            </Animated.View>
             <Animated.View style={[styles.header, { height: animatedValues.headerContainerHeight }]}>
                <CalendarStrip
                    style={styles.calendar}
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{
                        type: 'background',
                        duration: 200,
                        highlightColor: '#fff',
                    }}
                    locale={{
                        name: 'vi',
                        config: {
                            months: [
                                'Tháng 1',
                                'Tháng 2',
                                'Tháng 3',
                                'Tháng 4',
                                'Tháng 5',
                                'Tháng 6',
                                'Tháng 7',
                                'Tháng 8',
                                'Tháng 9',
                                'Tháng 10',
                                'Tháng 11',
                                'Tháng 12',
                            ],
                            weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                        },
                    }}
                    calendarHeaderStyle={{ color: 'white', fontSize: 20, fontWeight: 'normal' }}
                    calendarColor={'#90cbc0'}
                    dateNumberStyle={{ color: 'white', fontSize: 18 }}
                    dateNameStyle={{ color: 'white', fontSize: 12 }}
                    iconContainer={{ flex: 0.08 }}
                    onDateSelected={handleDateSelected}
                    minDate={new Date()} 
                    startingDate={new Date()}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        backgroundColor: '#90cbc0',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingHorizontal: 20,
    },
    headerTitle: {
        marginTop: 40,
        alignItems: 'center'
    },
    headerText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 130,
    },
    calendar: {
        flex: 1,
        marginTop: 10,
    },
});

export default Header;
