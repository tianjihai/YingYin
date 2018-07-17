import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import Screen from "./App";
type Props = {};
export default class Login extends Component<Props> {
    username = '';
    password = '';
    render() {
        return (
            <View
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <Image
                        style={styles.img}
                        source={require('./image/user.png')}/>
                    <TextInput
                        onChangeText={(newUsername) => {
                            this.username = newUsername;
                        }}
                        style={styles.input}
                        placeholderTextColor={'#fff'}
                        placeholder={'请输入用户名'}
                        underlineColorAndroid={'transparent'}/>
                </View>
                <View
                    style={styles.inputBox}>
                    <Image
                        source={require('./image/passwd.png')}
                        style={styles.img}/>
                    <TextInput
                        onChangeText={(newPassword) => {
                            this.password = newPassword;
                        }}
                        style={styles.input}
                        secureTextEntry={true}
                        placeholderTextColor={'#fff'}
                        placeholder={'请输入密码'}
                        underlineColorAndroid={'transparent'}/>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (this.username == 'admin' && this.password == '123') {
                            this.props.navigator.push({
                                component: Screen
                            });
                            ToastAndroid.show('登陆成功', ToastAndroid.SHORT);
                        } else {
                            ToastAndroid.show('登陆失败', ToastAndroid.SHORT);
                        }
                    }}
                    style={styles.button}>
                    <Text
                        style={styles.btText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={styles.btText}>注册</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img: {
        width: 25,
        height: 30,
        marginRight: 20,
    },
    input: {
        width: 200,
        height: 75,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 75,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    btText: {
        color: '#fff',
    }
});