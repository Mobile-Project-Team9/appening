import {  Text, TouchableOpacity, SafeAreaView, Modal, View, FlatList} from 'react-native';
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from '../services/i18next'
import { useState } from 'react'
import languagesList from '../services/languageList.json'
import { styles } from "../styles/style"




export default function Language() {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  return (
    <SafeAreaView style={styles.container3}>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.languagesList}>
          <FlatList
            data={Object.keys(languageResources)}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => changeLng(item)}>
                <Text style={styles.lngName}>
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <Text style={styles.text3}>{t('welcome')}</Text>
      <TouchableOpacity style={styles.button3} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText3}>{t('change-language')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
