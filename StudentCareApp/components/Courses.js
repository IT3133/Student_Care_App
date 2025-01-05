export default function COurses({user0}){
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={styles.image} source={require('../assets/uovlogo.png')}/>

            </View>

            <View style={styles.imageCard}>
                <card style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <Text variant='titleLarge' style={styles.nametext}>
                            {userCourse.name}
                        </Text>
                        <Text variant='bodyMedium' style={{textAlign:'center'}}>
                            Code: {userCourse.course_code} | Dept: {userCourse.department}                            {userCourse.name}
                        </Text>
                        <View style={styles.divider}/>
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Course Information
                        </Text>
                        <Text variant="bodyMedium">Code:{userCourse.course_code}</Text>
                        <Text variant="bodyMedium">Department:{userCourse.department}</Text>
                        <Text variant="bodyMedium">Duration:{userCourse.duration}</Text>
                        <Text variant="bodyMedium">Description:{userCourse.description}</Text>
<View style={styles.divider}/>

                    </Card.Content>
                </card>
            </View>
            <View style={styles.footer}>
                <Text style={{color:"#ffffff"}}>Uov © 2025</Text>
            </View>
        </View>
    )
}