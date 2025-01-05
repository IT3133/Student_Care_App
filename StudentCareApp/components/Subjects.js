export default function Subjects({ user }) {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    style={styles.image}
                    source={require('../assets/Logo.png')} />
            </View>
            <View style={styles.card}>
                <Card style={{ backgroundColor: "#ffffff" }}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.nametext}>
                            {userCourse.name}
                        </Text>
                        <Text variant="bodyMedium" style={{ textAlign: 'center' }}>
                            {userMarks.length} Subjects| Average {averageMarks.toFixed(0)}
                        </Text>
                        <View style={styles.divider} />
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Marks Information
                        </Text>
                        <Text style={{ color: "#696665" }}>Subjects                                                                     marks</Text>
                        <View style={styles.divider} />
                        {
                            userMarks.map((item, index) => (
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
                <Text style={{ color: "#ffffff" }}>UoV © 2025</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingBottom: 30,
    },
    banner: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    image: {
        width: 250,
        height: 65,
    },
    card: {
        marginVertical: 10,
        width: "90%",
        alignSelf: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    subject: {
        fontSize: 16,
        color: "#333",
    },
    mark: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    divider: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 15,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#520f4e",
        width: "100%",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    cardtitletext: {
        fontSize: 28,
        marginTop: 10,
        textAlign: "left",
    },
    nametext: {
        fontSize: 28,
        marginTop: 10,
        textAlign: "center",
    },
});