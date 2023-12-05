import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppointmentItem from './components/AppointmentItem';
import PromotionItem from './components/PromotionItem';
import FavoriteProducts from './components/FavoriteProductItem';
import Header from './components/Header';
import ServiceItem from './components/ServiceItem'
import { appointments } from './data/appointmentData';
import { promotions } from './data/promotionData';
import { favoriteProducts } from './data/favoriteProductsData';
import { services } from './data/serviceData';

const MainScreen = () => {

    const renderPromotionItem = ({ item }) => <PromotionItem item={item} />;

    const renderAppointmentItem = ({ item }) => <AppointmentItem item={item} />;

    const renderFavoriteProductItem = ({ item }) => (
        <FavoriteProducts item={item} />
    );

    const renderServiceItem = ({ item }) => <ServiceItem item={item} />;

    const [activeSlide, setActiveSlide] = useState(0);
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
                    contentContainerStyle={styles.scrollContainer}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
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
                        />

                        <View style={styles.promotionContainer}>
                            <Text style={styles.scheduleTitle}>Khuyến mãi</Text>
                            <Carousel
                                data={promotions}
                                renderItem={renderPromotionItem}
                                sliderWidth={375}
                                itemWidth={370}
                                onSnapToItem={(index) => setActiveSlide(index)}
                            />
                            <Pagination
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
                            />
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
                            <Text style={styles.favoriteProductsTitle}>Sản phẩm nổi bật</Text>
                            <FlatList
                                data={favoriteProducts}
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
        paddingTop: 16,
        paddingHorizontal: 20,
    },
    scheduleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    scheduleTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    viewAllButton: {
        color: '#999',
        fontSize: 14,
    },
    appointmentList: {
        width: '100%',
        marginBottom: 32,
    },
    promotionContainer: {
        width: '100%',
    },
    favoriteProductsContainer: {
        marginTop: 6,
    },
    favoriteProductsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    favoriteProductsList: {
    },
});

export default MainScreen;
