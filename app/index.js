import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View,Button, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import CategorieBuild from '../components/Categorie.js';

const Welcome = () => {

  const navigation = useRouter();

  const [image,setImage] = useState([]);

  const [checked,setChecked] = useState(false);


  useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=44")
      .then((response)=> response.json())
      .then ((data) => {
              setImage(data)
              console.log("patate:",data.length)})
      .catch((error)=> console.warn("Erreur d'import", error))
  },[])

  const renderItemCard = ({item}) => (
          <TouchableOpacity
              style={styles.pressable}
              activeOpacity={0.6}>
              <Image source={{uri:item.url}} style={styles.image}/>
          </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
        <View style={styles.categoriesContainer}>
            <Text style={styles.Title}>Catégories</Text>
                <CategorieBuild/>
        </View>
        <View style={styles.populairesContainer}>
            <Text style={styles.Title}>Populaires</Text>
            <View style={styles.cardContainer}>
                {image.map((item)=> {
                     <TouchableOpacity
                     style={styles.pressable}
                     activeOpacity={0.6}>
                     <Image source={{uri:item.url}} style={styles.image}/>
                 </TouchableOpacity>
                })}
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex:1,
    backgroundColor: "#fff",
    paddingTop:20,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,

  },
  categoriesContainer:{
    width:"100%",
    backgroundColor:"#fff",
    paddingHorizontal:5,
    flexWrap:"nowrap",
    marginBottom:20,
  },
  scrollViewCategorie:{
    flexDirection:"row",
    flexWrap:"nowrap"
  },
  populairesContainer:{
    width:"100%",
    backgroundColor:"grey",
  },
  cardContainer:{
    width:"100%",
    paddingHorizontal:5,
    alignItems:"center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Welcome;