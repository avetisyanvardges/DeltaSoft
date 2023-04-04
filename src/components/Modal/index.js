import React from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import useContainer from './hook';

const CustomModal = () => {
  const {type, visible, componentTypes, width, height} = useContainer();
  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {
        dispatch(modalTypes.HIDE_MODAL, {});
      }}>
      <TouchableWithoutFeedback
        disabled={type === 'update'}
        onPress={() => dispatch(modalTypes.HIDE_MODAL, {})}>
        <View
          style={{
            width,
            height: '100%',
            position: 'absolute',
            top: 0,
            backgroundColor: 'rgba(77,77,77,.4)',
            zIndex: 999,
            justifyContent: 'flex-end',
            paddingBottom: normalize(32),
          }}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                minWidth: normalize(340 - 32),
                minHeight: normalize(150),
                marginHorizontal: normalize(16),
                borderRadius: normalize(24),
                backgroundColor: Colors.white,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  marginVertical: normalize(8),
                }}>
                <View
                  style={{
                    width: normalize(36),
                    height: normalize(4),
                    borderRadius: normalize(12),
                    backgroundColor: Colors.gray,
                  }}
                />
              </View>
              <View
                style={{
                  padding: normalize(16),
                  paddingTop: normalize(12),
                }}>
                {componentTypes[type]}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;
