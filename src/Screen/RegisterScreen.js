import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegisterScreen = () => {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
    // Implement your registration logic here
  };

  const handleResendOTP = () => {
    // Implement your resend OTP logic here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isRegisterButtonEnabled = phoneNumber.trim() !== '';

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={[styles.topHalf, { backgroundColor: '#90cbc0' }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="chevron-left" size={18} color="#fff" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={{ uri: 'https://hirelaxspa.com/thumbs/152x152x1/upload/photo/logoft-4296.png' }} style={styles.logo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Đăng ký bằng số điện thoại</Text>
            <Text style={styles.subtitle}>
              Số điện thoại của bạn sẽ được bảo mật hoàn toàn, chúng tôi không chia sẻ thông tin của bạn với bất kỳ ai.
            </Text>
          </View>
        </View>

        <View style={[styles.bottomHalf, { backgroundColor: '#fff' }]}></View>

        <View style={styles.overlayContainer}>
          <View style={styles.registerContainer}>
            <View style={styles.inputContainer}>
              <Icon name="mobile" size={18} color="#ccc" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
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

            <View style={styles.inputOTPContainer}>
              <Icon name="key" size={18} color="#ccc" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Nhập OTP"
                keyboardType="numeric"
                value={otp}
                onChangeText={(text) => setOtp(text)}
              />
            </View>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: isRegisterButtonEnabled ? '#90cbc0' : '#ccc' }]}
              onPress={handleRegister}
              disabled={!isRegisterButtonEnabled}
            >
              <Text style={styles.buttonText}>{otp.trim() !== '' ? 'Đăng ký' : 'Gửi mã OTP'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.resendOTPText}>Gửi lại mã OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topHalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 30, // Adjusted margin for better appearance
  },
  title: {
    fontSize: 26,
    marginBottom: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 16,
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContainer: {
    width: '90%',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20, // Adjusted padding for better appearance
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 16,
    backgroundColor: '#f4f4f4',
    
  },
  inputOTPContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 16,
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
    borderRadius: 16,
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
  resendOTPText: {
    color: '#90cbc0',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: -15,
    padding: 40,
  },
  logo: {
    width: 35,
    height: 80,
    resizeMode: 'contain',
  },
});

export default RegisterScreen;
