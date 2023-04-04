import React from 'react';
import {Image, Text, View} from 'react-native';
import {SharedElement} from 'react-native-shared-element';
import {BackgroundColors, Colors, Shadow, Sizes} from '../../assets/RootStyles';

function Details({route}) {
  const {
    item: {title, content, description, publishedAt, urlToImage},
  } = route.params;
  return (
    <View
      style={{
        flex: 1,
        ...Shadow,
        shadowColor: 'rgba(255,255,255,.6)',
        backgroundColor: BackgroundColors.blue,
      }}>
      <SharedElement id={publishedAt}>
        <Image
          style={{
            width: '100%',
            height: Sizes(300),
            borderBottomLeftRadius: Sizes(20),
            borderBottomRightRadius: Sizes(20),
          }}
          source={{
            uri: urlToImage,
          }}
        />
        <View style={{marginHorizontal: Sizes(10)}}>
          <Text
            style={{
              fontSize: Sizes(18),
              fontWeight: 'bold',
              color: '#F4EFF4',
              marginTop: Sizes(5),
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginTop: Sizes(10),
              fontSize: Sizes(16),
              color: '#8E9BA7',
            }}>
            {description}
          </Text>
          <Text
            style={{
              fontSize: Sizes(16),
              color: '#8E9BA7',
            }}>
            {content}
          </Text>
        </View>
      </SharedElement>
    </View>
  );
}
Details.sharedElements = navigation => {
  const item = navigation.getParam('item');
  return [publishedAt];
};
export default Details;
