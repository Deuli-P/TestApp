import { useEffect, useState } from "react";
import { Link} from 'expo-router';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// API voulu
// "../../../assets/JSON/image.json"

// API temporaire
//"https://jsonplaceholder.typicode.com/photos?_limit=44"


const CategorieBuild=()=>{

    const [categorie,setCategorie] = useState([]);

    const [checked,setChecked] = useState(false);


    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
        .then((response)=> response.json())
        .then ((data) => { setCategorie(data)})
        .catch((error)=> console.warn("Erreur d'import", error))
    },[])

    const renderItem = ({item}) => (
            <TouchableOpacity 
                    style={styles.pressable}
                    activeOpacity={0.6}
                    onPress={(item)=>console.log('Click',item.title)}
                     >
                <Link
                href={{
                    pathname:"/components/Details.js",
                    params:{name: item.title}
                    }}
                    style={styles.link}
                    >
                        <View style={styles.viewImage}>
                        <Image source={{uri:item.url}} style={styles.image}/>
                        </View>
                    <Text style={styles.title}>{item.title}</Text>
                </Link>
            </TouchableOpacity>
    )

    return(
       <View style={styles.container}>
            <FlatList
            horizontal
            data={categorie}
            keyExtractor={({id}) => id.toString()}
            renderItem= {renderItem} 
            showsHorizontalScrollIndicator={false}
            />
       </View>
    )
};

export default CategorieBuild;

const styles= StyleSheet.create({
    container:{
        width:"100%",
        marginTop:10,
        marginLeft:10,
    },
    link:{
        width:"auto",
        height:"auto",
    },
    pressable:{
        width:130,
        height:"auto",
        marginRight:5,
    },
    viewImage:{
        width:130,
        height:130,
        backgroundColor:"yellow",
        borderRadius:15,
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:"100%",
        resizeMode:"contain",
    },
    title:{
        fontWeight:"bold",
        maxWidth:130,
    },
})