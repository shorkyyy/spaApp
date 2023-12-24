import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

const BookingSuccessModal = ({ isVisible, onClose, bookingInfo }) => {
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        if (isVisible) {
            // Simulate a processing time (you can replace it with your actual processing logic)
            setProcessing(true);
            const timeoutId = setTimeout(() => {
                setProcessing(false);
            }, 3000);

            // Clear the timeout and reset processing state when component unmounts or modal is closed
            return () => {
                clearTimeout(timeoutId);
                setProcessing(false);
            };
        }
    }, [isVisible]);

    return (
        <Modal visible={isVisible} transparent={true} animationType="fade">
            <View style={styles.modalOverlay}>

                {processing ? (
                    <>
                        <View style={styles.modalContainer}>
                            <ActivityIndicator size="large" color="#90cbc0" style={styles.icon} />
                            <Text style={styles.modalText}>Đang lên lịch hẹn...</Text>
                            <Text style={styles.infoName} numberOfLines={1}>{capitalizeFirstLetter(bookingInfo.name)}</Text>
                            <View style={styles.detailContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.infoLabel}>Vào ngày:</Text>
                                    <Text style={styles.infoText}>{bookingInfo.date}</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.infoLabel}>Vào lúc:</Text>
                                    <Text style={styles.infoText}>{bookingInfo.time}</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.infoLabel}>Giá tiền:</Text>
                                    <Text style={styles.infoText}>{bookingInfo.price}</Text>
                                </View>
                            </View>
                        </View>
                    </>
                ) : (
                    <View style={styles.modalContainer}>
                        <Icon name="check-circle" size={40} color="#90cbc0" style={styles.icon} />
                        <Text style={styles.modalText}>Đặt lịch thành công!</Text>
                        <Text style={styles.infoName} numberOfLines={1}>{capitalizeFirstLetter(bookingInfo.name)}</Text>
                        <View style={styles.detailContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.infoLabel}>Vào ngày:</Text>
                                    <Text style={styles.infoText}>{bookingInfo.date}</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.infoLabel}>Vào lúc:</Text>
                                    <Text style={styles.infoText}>{bookingInfo.time}</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.infoLabel}>Giá tiền:</Text>
                                    <Text style={styles.infoText}>{bookingInfo.price}</Text>
                                </View>
                            </View>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeModalText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        bottom: 0,
        backgroundColor: '#f2fbfd',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 16,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 22,
        color: '#90cbc0',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    infoName:{
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#666',
    },
    detailContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '75%',
        marginTop: 40,
    },
    dateContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    priceContainer:{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoLabel:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        justifyContent: 'flex-start',
    },
    infoText:{
        fontSize: 18,
    },
    closeButton: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#90cbc0',
        marginTop: 10,
        borderRadius: 8,
    },
    closeModalText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 15,
    },
    activityIndicator: {
        marginBottom: 15,
    },
});

export default BookingSuccessModal;
