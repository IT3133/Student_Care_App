export default function Subjects({user}){
    return(
        <View style={styles.container}>
        <View style={styles.banner}>
            <Image
                style={styles.image}
                source={require('../assets/Logo.png')}/>
        </View>
        <View style={styles.card}>
            <Card style={{backgroundColor:"#ffffff"}}>
                <Card.Content>
                    <Text variant="titleLarge" style={styles.nametext}>
                        {userCourse.name}
                    </Text>
                    <Text variant="bodyMedium" style={{textAlign:'center'}}>
                        {userMarks.length} Subjects| Average {averageMarks.toFixed(0)}
                    </Text>
                    <View style={styles.divider} />
                    <Text variant="titleLarge" style={styles.cardtitletext}>
                        Marks Information
                    </Text>
                    <Text style={{color:"#696665"}}>Subjects                                                                     marks</Text>
                    <View style={styles.divider} />
                    {
                        userMarks.map((item,index)=>(
                            <View style={styles.row} key={index}>
                                <Text style={styles.subject}>{item.subjectName}</Text>
                                <Text style={styles.mark}>{item.mark}</Text>
                            </View>
                        ))
                    }
                    <Text variant="bodyMedium">Code: {userCourse.course_code}</Text>
                    <View style={styles.divider} />
                </Card.Content>
            </Card>
        </View>
        <View style={styles.footer}>
            <Text style={{color:"#ffffff"}}>UoV © 2025</Text>
        </View>
    </View>
)
}
  