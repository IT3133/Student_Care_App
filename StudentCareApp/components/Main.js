import { BottomNavigation } from "react-native-paper";

export default function Main({route}){
    return (
        <BottomNavigation navigationState={{index, routes }} onIndexChange={setIndex} renderScene={renderScene} keyExtractor={(item) => item.key}/>
    );
}