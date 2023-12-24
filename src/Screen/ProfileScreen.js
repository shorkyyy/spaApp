import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const userLevel = "Vàng"; // Giả sử "Vàng" là mức cấp độ

  const settingsList = [
    { title: "Chế độ Tối", onPress: () => console.log("Chuyển đổi Chế độ Tối") },
    { title: "Tùy chỉnh Thông báo", onPress: () => console.log("Tùy chỉnh Thông báo") },
    { title: "Đăng Xuất", onPress: () => console.log("Đăng Xuất") },
    // Thêm các chức năng khác tại đây
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.profileName}>Tên Người Dùng</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
        <Text style={styles.userLevel}>Cấp độ: {userLevel}</Text>
      </View>

      <View style={styles.settingsContainer}>
        {settingsList.map((setting, index) => (
          <TouchableOpacity
            key={index}
            style={styles.settingButton}
            onPress={setting.onPress}
          >
            <Text style={styles.settingText}>{setting.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#90cbc0',
  },
  profileName: {
    fontSize: 28,
    marginTop: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 18,
    color: '#666',
  },
  userLevel: {
    fontSize: 16,
    color: '#ffa500',
    marginTop: 5,
  },
  settingsContainer: {
    marginTop: 20,
  },
  settingButton: {
    backgroundColor: '#90cbc0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
