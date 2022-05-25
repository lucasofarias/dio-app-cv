import React from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Alert, TouchableOpacity} from 'react-native';
import foto from './assets/fotoPerfil.jpeg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/card/index';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social) {
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/lucasofarias');
      break;

      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://linkedin.com/in/lucas-farias-291bb2207/');
      break;

      case 'instagram':
        Alert.alert('Meu Instagram', 'https://www.instagram.com/fariasaguiar_/');
      break;
    }
  };
  
  return (
    
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.container_cabecalho}>
            <Image source={foto} style={styles.foto}/>
            <Text style={styles.nome}>Lucas Farias</Text>
            <Text style={styles.funcao}>Desenvolvedor Full Stack</Text>
            
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name='github' size={20}></Icon>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Icon name='linkedin' size={20}></Icon>
              </TouchableOpacity>
                
              <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
                <Icon name='instagram' size={20}></Icon>
              </TouchableOpacity>
            </View>
          </View>

          <Card titulo='Competências'>
            <View style={styles.card_content_text}> 
              <Text>HTML | CSS | JavaScript | React Native | NodeJS | SQL</Text>
            </View>
          </Card>

          <Card titulo='Formação Acadêmica'>
            <View style={styles.card_content_text}> 
              <Text>Análise e Desenvolvimento de Sistemas - Fatec Rubens Lara (2021 - 2023)</Text>
            </View>
                    
            <View style={styles.card_content_text}> 
                <Text>Ensino Médio - Etec Alberto Santos Dumont (2018 - 2020)</Text>
            </View>
          </Card>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  
  container_cabecalho: {
    alignItems: 'center',
    marginTop: 50,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
  },

  funcao: {
    color: '#939393',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  
  card_content_text: {
    marginBottom: 10,
  },
});

export default App;