import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../shared/Form/FormContainer";
import Input from "../../shared/Form/Input";
import Error from "../../shared/Error";
import Toast from "react-native-toast-message";
//Context
import EasyButton from "../../shared/StyleComponents/EasyButton";
import {loginUser} from "../../context/users/User";
import {UserContext, UsersContext} from "../../context/users/UsersContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const Login = (props) => {
    const {setUser} = useContext(UserContext)
    const [email, setEmail] = useState("ADMIN");
    const [password, setPassword] = useState("AdminUser!1");
    const [error, setError] = useState("");

    useEffect(() => {

    }, [])

    const handleSubmit= async () => {
        console.log(email, password, "test");
        //todo add email regex
        if (email === "" || password === "") {
            setError("Please fill in your credentials");
        } else {
            await loginUser(email, password).then((resp,err) => {
                    if (err) {
                        console.log('====================================');
                        console.log(err);
                        console.log('====================================');
                        setError( "Please provide correct credentials");
                        Toast.show({
                            topOffset: 60,
                            type: "error",
                            text1: "Please provide correct credentials",
                            text2: "",
                        });
                    } else {
                        if (resp.data){
                            console.log(resp.data)
                            setUser(resp.data)
                            const token = resp.data.jwtToken;
                            console.log(token)
                            AsyncStorage.setItem("jwt", token);
                            const decoded = jwtDecode(token);
                            console.log(decoded, "decoded")
                        } else {
                            //logout
                        }
                    }
                }
            ) .catch((err) => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
                console.log(err.message , " here");
                Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1: "Please provide correct credentials",
                    text2: "",
                });
                //logout
            });
            // loginUser(user, context.dispatch);
        }
    }

    return (
        <FormContainer title={"Login"}>
            <Input
                placeholder={"Enter Email"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase().trim())}
            />
            <Input
                placeholder={"Enter Password"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.buttonGroup}>
                {error ? <Error message={error} /> : null}
                <EasyButton large primary onPress={() => handleSubmit()}>
                    <Text style={{ color: "#FFF", fontWeight: "bold" }}>Login</Text>
                </EasyButton>
            </View>
            <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
                <Text style={styles.middleText}>Don't have account yet?</Text>
                <EasyButton
                    large
                    secondary
                    onPress={() => props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#FFF", fontWeight: "bold" }}>Register</Text>
                </EasyButton>
            </View>
        </FormContainer>
    );
};

const styles = StyleSheet.create({
    buttonGroup: {
        width: "80%",
        alignItems: "center",
    },
    middleText: {
        marginBottom: 20,
        alignSelf: "center",
    },
});

export default Login;
