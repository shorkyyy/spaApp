import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    Modal
} from 'react-native';
import Header from '../components/AppointmentScreen/Header';
import MainServiceItem from '../components/AppointmentScreen/MainServiceItem';
import SubServiceItem from '../components/AppointmentScreen/SubServiceItem';
import TimeSlotItem from '../components/AppointmentScreen/TimeSlotItem';
import { services } from '../data/AppointmentScreen/servicesData';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import BookingSuccessModal from '../components/AppointmentScreen/BookingSuccessModal';

const AppointmentsScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedMainService, setSelectedMainService] = useState(null);
    const [selectedServicePrice, setSelectedServicePrice] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        date: '',
        time: '',
        price: '',
    });
    const [selectededServiceName, setSelectedServiceName] = useState(null);

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
    }

    const scrollY = useRef(new Animated.Value(0)).current;

    const handleDateSelected = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelected = (time) => {
        setSelectedTime(time);
    };

    const handleMainServiceSelected = (mainService) => {
        setSelectedMainService(mainService);
        setSelectedService(null);
    };

    const handleServiceSelected = (subServiceId) => {
        setSelectedService(subServiceId);

        const mainService = services.find((mainService) => {
            const subService = mainService.details.find((subService) => subService.subServiceId === subServiceId);
            return subService !== undefined;
        });

        if (mainService) {
            const selectedSubService = mainService.details.find((subService) => subService.subServiceId === subServiceId);

            if (selectedSubService) {
                const price = parseFloat(selectedSubService.price);
                const formattedPrice = new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                }).format(price);

                setSelectedServicePrice(formattedPrice);
                setSelectedServiceName(selectedSubService.subServiceName)
            }
            
        }
    };

    const handleBooking = () => {
        if (selectedDate && selectedTime && selectedServicePrice) {
            const formattedDate = moment(selectedDate)
                .locale('vi')
                .format('ddd, DD/MM');
            const bookingInformation = {
                name: selectededServiceName,
                date: formattedDate,
                time: selectedTime,
                price: selectedServicePrice,
            };
            
    
            setBookingInfo(bookingInformation);
            handleModalVisible();
        } else {
          
        }
    };    

    const generateTimeSlots = () => {
        const startTime = 9 * 60; // 9:00 converted to minutes
        const endTime = 21 * 60; // 17:00 converted to minutes
        const interval = 30; // Interval in minutes

        const morningEndTime = 12 * 60; // 12:00 converted to minutes
        const afternoonEndTime = 17 * 60; // 17:00 converted to minutes

        const timeSlots = [];

        for (let time = startTime; time < endTime; time += interval) {
            const hours = Math.floor(time / 60);
            const minutes = time % 60;
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

            let period = 'Sáng';
            if (time >= morningEndTime && time < afternoonEndTime) {
                period = 'Trưa';
            } else if (time >= afternoonEndTime) {
                period = 'Chiều';
            }

            timeSlots.push({
                id: formattedTime,
                time: formattedTime,
                period: period,
            });
        }

        return timeSlots;
    };

    const timeSlots = generateTimeSlots();

    const renderMainService = ({ item }) => (
        <MainServiceItem
            item={item}
            selectedMainService={selectedMainService}
            handleMainServiceSelected={handleMainServiceSelected}
            isDateSelected={selectedDate}
            isTimeSelected={selectedTime}
        />
    );

    const renderSubService = ({ item }) => (
        <SubServiceItem
            item={item}
            selectedService={selectedService}
            handleServiceSelected={handleServiceSelected}
        />
    );
    const renderTimeSlot = ({ item }) => (
        <TimeSlotItem
            item={item}
            selectedTime={selectedTime}
            handleTimeSelected={handleTimeSelected}
            selectedDate={selectedDate}
        />
    );

    const renderTimeSlotGroup = ({ item }) => (
        <View style={[styles.timeSlotContainer, !selectedDate && { opacity: 0.5 }]}>
            <View style={styles.periodContainer}>
                <Icon2 name="circle" size={8} color="#90cbc0" style={{ marginRight: 8 }} />
                <Text style={styles.periodText}>{item.period}</Text>
            </View>
            <FlatList
                data={item.data}
                keyExtractor={(timeSlot) => timeSlot.id}
                showsHorizontalScrollIndicator={false}
                renderItem={renderTimeSlot}
                numColumns={4}
            />
        </View>
    );

    const groupedTimeSlots = timeSlots.reduce((acc, timeSlot, index) => {
        if (index === 0 || timeSlot.period !== timeSlots[index - 1].period) {
            acc.push({
                period: timeSlot.period,
                data: [timeSlot],
            });
        } else {
            acc[acc.length - 1].data.push(timeSlot);
        }
        return acc;
    }, []);


    const allData = [
        { type: 'timeSlots', data: timeSlots },
        { type: 'mainServices', data: services },
        { type: 'subServices', data: services.find((s) => s.id === selectedMainService)?.details || [] },
    ];

    const renderItem = ({ item }) => {
        switch (item.type) {
            case 'timeSlots':
                return (
                    <View style={styles.timeSlotContainer}>
                        <Text style={styles.sectionTitle1}>Thời Gian</Text>
                        <FlatList
                            data={groupedTimeSlots}
                            keyExtractor={(group) => group.period}
                            renderItem={renderTimeSlotGroup}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                );

            case 'mainServices':
                return (
                    <View style={styles.serviceContainer}>
                        <Text style={styles.sectionTitle2}>Loại dịch Vụ</Text>
                        <FlatList
                            data={item.data}
                            keyExtractor={(service) => service.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderMainService}
                        />
                    </View>
                );

            case 'subServices':
                return (
                    <View style={styles.subServiceContainer}>
                        {selectedTime && selectedMainService && (
                            <Text style={styles.sectionTitle3}>Dịch Vụ</Text>
                        )}
                        <FlatList
                            data={item.data}
                            keyExtractor={(subService) => subService.subServiceId}
                            renderItem={renderSubService}
                        />
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <Header handleDateSelected={handleDateSelected} scrollY={scrollY} />
            <FlatList
                data={allData}
                keyExtractor={(item) => item.type}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                style={styles.contentContainer}
            />

            {(selectedTime && selectedService) && (
                <View style={styles.footer}>
                    <View style={styles.bookingInfo}>
                        <Text style={styles.dateText}>
                            {selectedDate
                                ? moment(selectedDate)
                                    .locale('vi') // Sử dụng locale tiếng Việt
                                    .format('ddd, DD/MM')
                                : ''}{' '}
                            - {selectedTime}
                        </Text>
                        <Text style={styles.priceText}>{selectedServicePrice}</Text>
                    </View>
                    <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
                        <Text style={styles.bookButtonText}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>
            )}
           <BookingSuccessModal isVisible={modalVisible} onClose={handleModalVisible} bookingInfo={bookingInfo} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    timeSlotContainer: {
    },
    periodContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 3,
        alignItems: 'center'
    },
    periodText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#90cbc0'
    },
    serviceContainer: {
    },
    sectionTitle1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48,
    },
    sectionTitle2: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 16,
    },
    sectionTitle3: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
    },
    subServiceContainer: {
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 0,
        paddingHorizontal: 30,
        paddingVertical: 12,
        backgroundColor: '#f2fbfd'
    },
    dateText: {
        fontSize: 14,
        fontWeight: 'bold',
        width: 280
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#90cbc0'

    },
    bookingInfo: {
        flexDirection: 'column',

    },
    bookButton: {
        backgroundColor: '#90cbc0',
        padding: 10,
        borderRadius: 8,
    },
    bookButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeModalText: {
        color: 'blue',
        fontSize: 16,
    },

});

export default AppointmentsScreen;
