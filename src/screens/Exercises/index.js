import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';
import {BackgroundColors, Colors} from '../../assets/RootStyles';
import CheckBox from '@react-native-community/checkbox';
import {ArrowLeftIcon} from '../../components/Svgs/Left';
import {back} from '../../services/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isEmpty} from 'lodash';

function ExercisesScreen({route}) {
  const exercises = route.params.item.exercises;
  const parent = route.params.item;
  const [exc, setExc] = useState();
  const key = parent.title.toLowerCase();
  const [showMore, setShowMore] = useState(false);

  const onMountHandler = async () => {
    const data = await AsyncStorage.getItem(key);
    if (data && !isEmpty(data)) {
      const parsData = JSON.parse(data);
      setExc(parsData);
    }
  };

  useEffect(() => {
    onMountHandler();
  }, []);

  useEffect(() => {
    setExc(exercises);
  }, [exercises]);

  const onChangeData = async () => {
    if (exc) {
      await AsyncStorage.setItem(key, JSON.stringify(exc));
    }
  };

  useEffect(() => {
    onChangeData();
  }, [exc]);

  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          const red = exc.reduce((acc, it) => {
            if (item.id === it.id) {
              acc.push({...it, selected: !it.selected});
            } else {
              acc.push(it);
            }

            return acc;
          }, []);

          setExc(red);
        }}
        style={{
          flex: 1,
          marginHorizontal: normalize(16),
          flexDirection: 'row',
          backgroundColor: '#8e9ba7',
          borderRadius: normalize(12),
          overflow: 'hidden',
        }}>
        <Image
          source={item.img}
          style={{
            maxWidth: normalize(130),
            height: '100%',
            resizeMode: 'contain',
            backgroundColor: Colors.white,
          }}
        />
        <View
          style={{
            flex: 1,
            paddingTop: normalize(5),
            paddingBottom: normalize(10),
            paddingHorizontal: normalize(16),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: '90%',
                fontSize: normalize(13),
                color: BackgroundColors.blue,
              }}>
              {item.title}
            </Text>
            <CheckBox
              disabled={false}
              value={item.selected}
              onValueChange={() => {
                const red = exc.reduce((acc, it) => {
                  if (item.id === it.id) {
                    acc.push({...it, selected: !it.selected});
                  } else {
                    acc.push(it);
                  }

                  return acc;
                }, []);

                setExc(red);
              }}
              tintColor={Colors.white}
              tintColors={{
                true: BackgroundColors.blue,
                false: BackgroundColors.blue,
              }}
              onFillColor={BackgroundColors.blue}
              onTintColor={BackgroundColors.blue}
              onCheckColor={Colors.white}
              onAnimationType={'one-stroke'}
              offAnimationType={'one-stroke'}
              style={{borderRadius: normalize(5), overflow: 'hidden'}}
              boxType={'circle'}
            />
          </View>
          <Text
            style={{
              fontSize: normalize(12),
            }}>
            {item.id === showMore
              ? item.description
              : item.description.slice(0, 150)}

            <Text
              onPress={() => {
                if (item.id === showMore) {
                  setShowMore('');
                } else {
                  setShowMore(item.id);
                }
              }}
              style={{color: 'blue', fontSize: normalize(9)}}>
              {`${item.id === showMore ? '\nShow less' : '\nShow more'}`}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <View style={{flex: 1, backgroundColor: BackgroundColors.blue}}>
      <FlatList
        data={exc}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: normalize(16)}} />}
        ListHeaderComponent={() => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: normalize(16),
              marginBottom: normalize(16),
            }}>
            <TouchableOpacity onPress={() => back()}>
              <ArrowLeftIcon color={Colors.white} />
            </TouchableOpacity>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: normalize(16),
                  color: Colors.white,
                }}>
                Exercises Screen
              </Text>
            </View>
          </View>
        )}
        contentContainerStyle={{
          paddingBottom: normalize(40),
          paddingTop: normalize(16),
        }}
      />
    </View>
  );
}

export default ExercisesScreen;
