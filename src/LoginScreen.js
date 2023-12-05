import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView, // Import thêm
  Platform, // Import thêm
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoading(true);

      setTimeout(() => {
        console.log('Số điện thoại:', username);
        console.log('Mật khẩu:', password);

        // Thực hiện logic đăng nhập của bạn ở đây

        navigation.navigate('Main');

        setIsLoading(false);
      }, 3000);
    } else {
        ToastAndroid.show('Vui lòng điền đầy đủ thông tin', ToastAndroid.SHORT);
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Chỉ định cách thức tránh bàn phím
    >
      <View style={[styles.topHalf, { backgroundColor: '#90cbc0' }]}>
        <Image source={require('./img/logo.png')} style={styles.logo} />
      </View>

      <View style={[styles.bottomHalf, { backgroundColor: '#E4DFE1' }]}>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerTextButton}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.overlayContainer}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Chào mừng bạn đến với Hi! Relax</Text>
          <Text style={styles.subtitle}>Hãy đăng nhập để sử dụng các dịch vụ tốt nhất từ chúng tôi!</Text>

          <View style={styles.inputContainer}>
            <Icon name="mobile" size={18} color="#ccc" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              keyboardType="numeric"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={styles.passwordInputContainer}>
            <Icon name="lock" size={18} color="#ccc" style={styles.inputIcon} />
            <TextInput
              style={styles.passwordInput}
              placeholder="Mật khẩu"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setIsPasswordFilled(!!text);
              }}
              onFocus={() => setIsPasswordFilled(!!password)}
              onBlur={() => setIsPasswordFilled(!!password)}
            />
            {isPasswordFilled && (
              <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordButton}>
                <Icon name={showPassword ? 'eye-slash' : 'eye'} size={18} color="#ccc" />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          <View style={styles.separatorWithText}>
            <View style={styles.separator} />
            <Text style={styles.orText}>Hoặc đăng nhập bằng:</Text>
            <View style={styles.separator} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity
              style={styles.facebookButton}
              onPress={() => console.log('Facebook Login')}
            >
              <Icon name="facebook" size={18} color="#fff" />
              <Text style={styles.socialButtonsText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google Login')}>
              <Icon name="google" size={18} color="#fff" />
              <Text style={styles.socialButtonsText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal Loading */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isLoading}
        onRequestClose={() => setIsLoading(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#90cbc0" />
            <Text style={styles.modalText}>Đang đăng nhập...</Text>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E4DFE1',
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -150,
  },
  registerText: {
    fontsize: 16,
    color: '#666',
    textAlign: 'center',
  },
  registerTextButton: {
    fontsize: 16,
    color: '#90cbc0',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '90%',
    alignItems: 'center',
    borderRadius: 16,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  showPasswordButton: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  button: {
    backgroundColor: '#90cbc0',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#90cbc0',
    fontSize: 16,
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    marginTop: 16,
    marginBottom: 40,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  socialButtonsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  googleButton: {
    backgroundColor: '#DB4437', 
    flexDirection:'row',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 10,
    width: 150,
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 10,
    width: 150,
  },
  separatorWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: '#bbb',
    alignSelf: 'center',
  },
  orText: {
    color: '#666',
    fontSize: 14,
    marginHorizontal: 15,
  },
  logo: {
    width: 70,
    height: 80,
    resizeMode: 'contain',
    bottom: 120,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
