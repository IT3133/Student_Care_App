import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Login(){
    const navigation = useNavigation();
    const [username, setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    
    return(
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View styles={styles.container}>
                <View style = {styles.banner}>
                    <Image style={styles.image} source={require('../assets/uovlogo.png')}/>

                </View>
                <View style ={ styles.title}>
                    <text variant='displayMedium' style={styles.text}>Student Login</text>
                </View>
                <View style={styles.inputfields}>
                    <TextInput label="Username" mode="outlined" activeOutlineColor="#63625b" value={username} onChangeText={setUserName}/>
                    <TextInput label="Password" mode="outlined" activeOutlineColor="#63625b"  secureTextEntry value={password} onChangeText={setPassword}/>
                    <Button style={styles.button} mode="contained" onPress={handleLogin} labelStyle={styles.buttonText}>Login</Button>
                    {errorMessage ?(
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    ) : null }

                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>UoV © 2025</Text>
                </View>
            </View>
        </ScrollView>
    );
}