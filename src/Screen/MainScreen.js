import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    Animated,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AppointmentItem from '../components/MainScreen/AppointmentItem';
import PromotionItem from '../components/MainScreen/PromotionItem';
import FavoriteProducts from '../components/MainScreen/FavoriteProductItem';
import Header from '../components/MainScreen/Header';
import ServiceItem from '../components/MainScreen/ServiceItem'
import { appointments } from '../data/MainScreen/appointmentData';
import { promotions } from '../data/MainScreen/promotionData';
import { products } from '../data/PurchaseScreen/purchaseData';
import { services } from '../data/MainScreen/serviceData';


const MainScreen = () => {

    const renderPromotionItem = ({ item }) => <PromotionItem item={item} />;

    const renderAppointmentItem = ({ item }) => <AppointmentItem item={item} />;

    const renderFavoriteProductItem = ({ item }) => (
        <FavoriteProducts item={item} />
    );

    const renderServiceItem = ({ item }) => <ServiceItem item={item} />;

    // const [activeSlide, setActiveSlide] = useState(0);
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
            >
                <Header scrollY={scrollY} />

                <ScrollView
                  showsVerticalScrollIndicator = {false}
                    contentContainerStyle={styles.scrollContainer}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                >

                    <View style={styles.content}>
                        <View style={styles.scheduleContainer}>
                            <Text style={styles.scheduleTitle}>Lịch hẹn sắp tới</Text>
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={styles.viewAllButton}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={appointments}
                            keyExtractor={(item) => item.id}
                            renderItem={renderAppointmentItem}
                            style={styles.appointmentList}
                            showsVerticalScrollIndicator = {false}
                        />

                        <View style={styles.promotionContainer}>
                            <Text style={styles.promoTitle}>Khuyến mãi</Text>
                            <Carousel
                                data={promotions}
                                renderItem={renderPromotionItem}
                                sliderWidth={375}
                                itemWidth={370}
                                autoplay={true}
                                loop={true}
                                autoplayDelay={500}
                            />
                            {/* <Pagination
                                dotsLength={promotions.length}
                                activeDotIndex={activeSlide}
                                containerStyle={{ marginTop: -20 }}
                                dotStyle={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#90cbc0',
                                }}
                                inactiveDotStyle={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: '#ccc',
                                }}
                                inactiveDotOpacity={0.6}
                                inactiveDotScale={0.8}
                            /> */}
                        </View>
                        <View style={styles.servicesContainer}>
                            <Text style={styles.servicesTitle}>Dịch vụ</Text>
                            <FlatList
                                data={services}
                                keyExtractor={(item) => item.id}
                                renderItem={renderServiceItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.servicesList}
                            />
                        </View>

                        <View style={styles.favoriteProductsContainer}>
                            <Text style={styles.favoriteProductsTitle}>Sản phẩm</Text>
                            <FlatList
                                data={products}
                                keyExtractor={(item) => item.id}
                                renderItem={renderFavoriteProductItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.favoriteProductsList}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    scheduleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scheduleTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
    },
    viewAllButton: {
        color: '#999',
        fontSize: 14,
        marginTop: 32,
    },
    appointmentList: {
        width: '100%',
    },
    promotionContainer: {
        width: '100%',
    },
    promoTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
    },
    servicesContainer: {
    },
    servicesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
    },
    servicesList: {
    },
    favoriteProductsContainer: {
    },
    favoriteProductsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
    },
    favoriteProductsList: {
    },
});

export default MainScreen;
