import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Styles} from './style';
import {CardsData} from '../../assets/FakeData';
import Card from '../../components/cards';
import {isEmpty} from 'lodash';
import {normalize} from '../../assets/RootStyles/normalize';
import CardFlip from 'react-native-card-flip';

const imageUrl = {
  uri: 'https://preview.redd.it/ihfnlpbze7o01.jpg?auto=webp&s=94fe8990d7b61c4debfb310f656aedf8327ac722',
};
function MatchesGame(props) {
  const styles = Styles();
  const card = CardsData;
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const cardRef = useRef([]);
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState(0);

  const shuffleCards = () => {
    setSelected([]);
    setStage(stage + 1);
    const shuffle = [...card, ...card]
      .sort(() => Math.random() - 0.5)
      .map(card => ({
        ...card,
        key: Math.round(Math.random() * 1111111),
        opacity: 1,
      }));
    setData(shuffle);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    const val = data.find(el => el.opacity === 1);
    if (!val) {
      shuffleCards();
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [data]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].id === selected[1].id) {
        setTimeout(() => {
          const newData = data.map(item => {
            if (item.id === selected[0].id) {
              return {...item, opacity: 0};
            } else {
              return item;
            }
          });
          setData(newData);
        }, 1000);
        setSelected([]);
      } else {
        setTimeout(() => {
          setSelected([]);
          cardRef.current[`card_${selected[0].id}_${selected[0].key}`].flip();
          cardRef.current[`card_${selected[1].id}_${selected[1].key}`].flip();
        }, 500);
      }
    }
  }, [selected]);

  const handleCardPress = (item, index, selectPerm) => {
    if (selected.length < 2 && selectPerm) {
      if (isEmpty(selected)) {
        setSelected([...selected, {key: item.key, id: item.id}]);
      } else {
        if (selected[0].key !== item.key) {
          setSelected([...selected, {key: item.key, id: item.id}]);
        }
      }
    }
    cardRef.current[`card_${item.id}_${item.key}`].flip();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.header}>
          <View style={styles.titleView}>
            <Text style={styles.title}>STAGE {stage}</Text>
          </View>
        </View>
        <FlatList
          keyExtractor={item => item.key}
          data={data}
          numColumns={3}
          renderItem={({item, idx}) => (
            <>
              {visible ? (
                <CardFlip
                  style={styles.cardContainer}
                  key={idx}
                  ref={el =>
                    (cardRef.current[`card_${item.id}_${item.key}`] = el)
                  }>
                  <TouchableOpacity
                    style={styles.card}
                    disabled={true}
                    onPress={() => handleCardPress(item, idx, false)}>
                    <Image
                      source={item.img}
                      style={{width: 100, height: 100, resizeMode: 'cover'}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.card}
                    disabled={true}
                    onPress={() => handleCardPress(item, idx, true)}>
                    <Text style={{fontSize: normalize(35)}}>?</Text>
                  </TouchableOpacity>
                </CardFlip>
              ) : (
                <CardFlip
                  style={[styles.cardContainer]}
                  key={item.key}
                  ref={el =>
                    (cardRef.current[`card_${item.id}_${item.key}`] = el)
                  }>
                  <TouchableOpacity
                    style={[styles.card, {opacity: item.opacity}]}
                    disabled={item.opacity === 0}
                    onPress={() => handleCardPress(item, idx, true)}>
                    <Text style={{fontSize: normalize(35)}}>?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.card, {opacity: item.opacity}]}
                    disabled={item.opacity === 0}
                    onPress={() => handleCardPress(item, idx, false)}>
                    <Image
                      source={item.img}
                      style={{width: 100, height: 100, resizeMode: 'cover'}}
                    />
                  </TouchableOpacity>
                </CardFlip>
              )}
            </>
          )}
          contentContainerStyle={{alignItems: 'center'}}
          ItemSeparatorComponent={() => <View style={{height: normalize(5)}} />}
        />
      </ImageBackground>
    </View>
  );
}

export default MatchesGame;
