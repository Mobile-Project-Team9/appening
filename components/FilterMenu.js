import { View, Text, Modal, Pressable, Alert } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { styles } from '../styles/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { FilterContext, LanguageContext, QueryContext } from '../data/Contexts'
import DropDownPicker from 'react-native-dropdown-picker'
import fullData from '../data/fullData.json';
//import Language from './Filter/language'



export default function FilterMenu() {
    const {json, setJson} = useContext(QueryContext)
    const {filtersOn, setFiltersOn} = useContext(FilterContext)
    const {filteredJson, setFilteredJson} = useContext(FilterContext)
    const {language} = useContext(LanguageContext)

    const [modalVisible, setModalVisible] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoriesEN, setCategoriesEN] = useState([])
    const [nature, setNature] = useState([])
    const [culture, setCulture] = useState([])
    const [utilities, setUtilities] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([])

    //Dropdown-picker variables
    const [natureOpen, setNatureOpen] = useState(false)
    const [cultureOpen, setCultureOpen] = useState(false)
    const [utilitiesOpen, setUtilitiesOpen] = useState(false)

    

    const onNatureOpen = () => {
        setCultureOpen(false)
        setUtilitiesOpen(false)
    }

    const onCultureOpen = () => {
        setNatureOpen(false)
        setUtilitiesOpen(false)
    }

    const onUtilitiesOpen = () => {
        setCultureOpen(false)
        setNatureOpen(false)
    }

    const getUniqueCategories = () => {
        let categoryList = []
        let categoryListEN = []
        let jsonLength = Object.keys(fullData).length

        for (let i = 0; i < jsonLength; i++) {
            if (!categoryList.includes(fullData[i].Categories[0].title)){
                categoryList.push(fullData[i].Categories[0].title)
            }
        }

        setCategories(categoryList)

        for (let i = 0; i < jsonLength; i++) {
            if (!categoryListEN.includes(fullData[i].Categories[0].icon.slice(9))){
                categoryListEN.push(fullData[i].Categories[0].icon.slice(9))
            }
        }

        setCategoriesEN(categoryListEN)
    }

    const getFilterItems = () => {
        let items = []
        let itemsEN = []
        let nature = []
        let culture = []
        let utilities = []
        let natureEN = []
        let cultureEN = []
        let utilitiesEN = []
        let categoriesLength = categories.length

        for (let i = 0; i < categoriesLength; i++) {
            items.push({label: categories[i], value: categories[i].toLowerCase()})

            itemsEN.push({label: categoriesEN[i], value: categoriesEN[i]})
        }

        for (let i = 0; i < items.length; i++) {
            if (items[i].value === 'puut ja kasvit' || items[i].value === 'puisto' || items[i].value === 'retkeilyreitti' || items[i].value === 'tulentekopaikka' || items[i].value === 'näköalatorni' || items[i].value === 'kuivakäymälä' ||items[i].value === 'liiteri' || items[i].value === 'laavu' || items[i].value === 'uimaranta') {
                nature.push(items[i])
            }
            else if (items[i].value === 'taideteos' || items[i].value === 'arkkitehtuuri' || items[i].value === 'patsas' || items[i].value === 'nähtävyys' || items[i].value === 'historiallinen kohde' || items[i].value === 'tapahtuma' || items[i].value === 'kirkko' || items[i].value === 'kulttuuritalo' || items[i].value === 'kulttuuri' || items[i].value === 'galleria' || items[i].value === 'virtuaalipolku' || items[i].value === 'reitti' || items[i].value === 'kirjasto') {
                culture.push(items[i])
            }
            else {
                utilities.push(items[i])
            }

            natureEN.push(itemsEN[i])
        }

        setNature(nature)
        setCulture(culture)
        setUtilities(utilities)
    }

    useEffect(() => {
        getUniqueCategories()
    }, [])

    useEffect(() => {
        getFilterItems()

        if (filtersOn.length !== 0) {
            setSelectedFilters(filtersOn)
        }
    }, [categories])

    let tempData = []
    useEffect(() => {  
        let dataLength = Object.keys(fullData).length

        if (selectedFilters.length !== 0) {
            for (let i = 0; i < dataLength; i++){
                let categoryLowercase = fullData[i].Categories[0].title.toLowerCase()

                if (selectedFilters.some(filter => filter === categoryLowercase) && !tempData.includes(fullData[i])) {
                    tempData.push(fullData[i])
                }
            }
            setFilteredJson(tempData)
            setJson(tempData)
            setFiltersOn(selectedFilters)
        }
        else {
            setJson(fullData)
            setFilteredJson([])
            setFiltersOn([])
            tempData = []
        }
        
    }, [selectedFilters])
    




    return (
        <View>
            <Modal
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
                transparent={true}
            >
                <View style={styles.filterMenuContainer}>
                    <View style={styles.filterMenu}>
                        <View style={styles.filterMenuContent}>
                            <DropDownPicker 
                                multiple={true}
                                open={natureOpen}
                                value={selectedFilters}
                                items={nature}
                                setOpen={setNatureOpen}
                                setValue={setSelectedFilters}
                                setItems={setNature}
                                onOpen={onNatureOpen}
                                placeholder={language === 'fi' ? 'Luonto' : 'Nature'}
                                mode='BADGE'

                                zIndex={3000}
                                zIndexInverse={1000}
                            />

                            <DropDownPicker 
                                multiple={true}
                                open={cultureOpen}
                                value={selectedFilters}
                                items={culture}
                                setOpen={setCultureOpen}
                                setValue={setSelectedFilters}
                                setItems={setCulture}
                                onOpen={onCultureOpen}
                                placeholder={language === 'fi' ? 'Kulttuuri' : 'Culture'}
                                mode='BADGE'

                                zIndex={2000}
                                zIndexInverse={2000}
                            />

                            <DropDownPicker 
                                multiple={true}
                                open={utilitiesOpen}
                                value={selectedFilters}
                                items={utilities}
                                setOpen={setUtilitiesOpen}
                                setValue={setSelectedFilters}
                                setItems={setUtilities}
                                onOpen={onUtilitiesOpen}
                                placeholder={language === 'fi' ? 'Palvelut' : 'Utilities'}
                                mode='BADGE'

                                zIndex={1000}
                                zIndexInverse={3000}
                            />
                            
                            
                        </View>
                        <Pressable style={styles.hideMenuButton} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.hideMenuButtonText}>{language === 'fi' ? 'Sulje valikko' : 'Close menu'}</Text>
                        </Pressable>
                        <Pressable style={styles.clearFiltersButton} onPress={() => setSelectedFilters([])}>
                                <Text style={styles.hideMenuButtonText}>{language === 'fi' ? 'Tyhjennä valinnat' : 'Clear filters'}</Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.overlayPressable} onPress={() => setModalVisible(!modalVisible)} />
                </View>
            </Modal>
            
            <Pressable style={styles.filterButton} onPress={() => setModalVisible(true)}>
                <MaterialCommunityIcons 
                    name='filter-menu-outline'
                    size={24}
                    color='#fff'
                />
            </Pressable>
        </View>
    )
}