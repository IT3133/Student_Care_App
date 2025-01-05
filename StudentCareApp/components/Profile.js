import { Image, ScrollView, View } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function Profile( { user }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Image styles = {styles.image} source={require("../assets/uovlogo.png")}/>

                </View>
                <View style={styles.card}>
                    <Card style={{backgroundColor: "#ffffff"}}>
                        <Card.Content>
                            <View style={{ alignItems: "center"}}>
                                <Avatar.Image size={150} source={user.profile_pic}/>

                            </View>
                            <Text variant ="titleLarge" style={styles.nametext}>{user.name}</Text>
                            <Text variant ="bodyMedium" style={{teaxtAlign: 'center'}}>Age: {user.age} | Gender: {user.gender}</Text>
                            <View style={styles.divider}/>
                            <Text variant="titleLarge" style={styles.cardtitletext}> Contact Information </Text>

                           <Text variant="bodyMedium">Email: {user.email}</Text>
                    <Text variant="bodyMedium">Phone: {user.phone}</Text>
                    <Text variant="bodyMedium">Address: {user.address}</Text>
                    <View style={styles.divider} />
                    <Text variant="titleLarge" style={styles.cardtitletext}> Biological Information </Text>
                      
                    <Text variant="bodyMedium">Gender: {user.gender}</Text>
                    <Text variant="bodyMedium">Age: {user.age}</Text>
                    <Text variant="bodyMedium">Blood Group: {user.blood_group}</Text>
                       

                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <Text style={{color:"#ffffff"}}>UoV © 2025</Text>
                </View>
            </View>
        </ScrollView>
    );
}