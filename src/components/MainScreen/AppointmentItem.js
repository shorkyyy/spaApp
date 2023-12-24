// AppointmentItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppointmentItem = ({ item, onPress }) => {

    return (
        <View style={styles.appointmentContainer}>
            <View style={styles.appointmentDateTimeContainer}>
                <Text style={styles.appointmentTime}>{`${item.time}`}</Text>
                <Text style={styles.appointmentDate}>{`${item.date}`}</Text>
            </View>
            <View style={styles.appointmentItem}>
                <Text style={styles.appointmentTitle} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                <View style={styles.appointmentDetails}>
                    <View style={styles.statusContainer}>
                        {item.status === 'confirmed' ? (
                            <Icon name="check-circle" size={20} color="#4CAF50" style={styles.statusIcon} />
                        ) : (
                            <Icon name="clock" size={20} color="#FFC107" style={styles.statusIcon} />
                        )}
                        <Text style={styles.statusLabel}>
                            {item.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.appointmentArrowContainer}>
                    <Icon name="chevron-right" size={16} color="#888" style={styles.searchIcon} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    appointmentContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    appointmentDateTimeContainer: {
        height: 100,
        width: 80,
        padding: 16,
        backgroundColor: '#90cbc0',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appointmentTime: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    appointmentDate: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 2,
    },
    appointmentItem: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
        height: 100,
        justifyContent: 'center'
    },
    appointmentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#009688',
        maxWidth: '90%'
    },
    appointmentDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    statusIcon: {
        marginRight: 2
    },
    statusLabel: {
        marginLeft: 4,
        fontSize: 14,
        color: '#546e7a',
    },
    appointmentArrowContainer: {
        height: 100,
        padding: 20,
        justifyContent: 'center',
    },
});

export default AppointmentItem;
