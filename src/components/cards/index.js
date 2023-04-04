import React, {useEffect, useRef} from 'react';
import {Styles} from './style';
import {Image, TouchableOpacity, Text} from 'react-native';
import CardFlip from 'react-native-card-flip';
import {normalize} from '../../assets/RootStyles/normalize';

function Card(props) {
  const styles = Styles();
  const card = useRef(null);

  return (
    <CardFlip
      style={styles.cardContainer}
      key={props.key}
      ref={el => (cardRef.current[index] = el)}
      onPress={() => props.setSelected([...props.selected, props.title])}>
      <TouchableOpacity style={styles.card} onPress={() => card.current.flip()}>
        <Text style={{fontSize: normalize(35)}}>?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => card.current.flip()}>
        <Image
          source={props.image}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </TouchableOpacity>
    </CardFlip>
  );
}

export default Card;
