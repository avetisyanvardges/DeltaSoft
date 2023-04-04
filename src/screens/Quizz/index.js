import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';
import {questions} from '../../assets/MockData';
import {Colors, FullScreen as fullScreen} from '../../assets/RootStyles';
import {isEmpty} from 'lodash';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const percentage = (currentQuestion * 100) / questions.length;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#89acc6',
          paddingHorizontal: normalize(16),
        }}>
        <FlatList
          data={questions[currentQuestion]?.teams}
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  marginTop: normalize(30),
                  backgroundColor: '#f2f2f2',
                  borderRadius: normalize(12),
                  marginBottom: normalize(50),
                  paddingVertical: normalize(15),
                  paddingHorizontal: normalize(10),
                }}>
                <View
                  style={{
                    width: '100%',
                    height: normalize(10),
                    backgroundColor: '#B3BBC4',
                    borderRadius: normalize(12),
                  }}>
                  <View
                    style={{
                      width: `${percentage}%`,
                      height: normalize(10),
                      backgroundColor: '#0A2540',
                      borderRadius: normalize(12),
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: normalize(18),
                    lineHeight: normalize(28),
                    color: '#484848',
                  }}>
                  {currentQuestion + '/' + questions.length}
                </Text>
                <Text
                  style={{
                    fontSize: normalize(27),
                    lineHeight: normalize(28),
                    color: '#484848',
                  }}>
                  {questions[currentQuestion]?.question}
                </Text>
              </View>
            );
          }}
          renderItem={({item}) => {
            const selected = item === selectedAnswer;
            const isCorrect =
              questions[currentQuestion].answer === selectedAnswer;
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedAnswer(item);
                  if (questions[currentQuestion].answer === item) {
                    setCorrectAnswer(correctAnswer + 1);
                  }
                  if (currentQuestion < questions.length - 1) {
                    setTimeout(() => {
                      setCurrentQuestion(currentQuestion + 1);
                      setSelectedAnswer('');
                    }, 600);
                  } else {
                    setCurrentQuestion(currentQuestion + 1);
                    setModalVisible(true);
                  }
                }}
                disabled={!isEmpty(selectedAnswer)}
                activeOpacity={0.8}
                style={{
                  backgroundColor: '#484848',
                  borderRadius: normalize(12),
                  marginBottom: normalize(10),
                }}>
                <View
                  style={{
                    width: '95%',
                    marginLeft: '5%',
                    backgroundColor: selected
                      ? isCorrect
                        ? Colors.green
                        : Colors.red
                      : '#f2f2f2',
                    paddingVertical: normalize(17),
                    borderTopRightRadius: normalize(12),
                    borderBottomRightRadius: normalize(12),
                    paddingHorizontal: normalize(15),
                  }}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Modal
        statusBarTranslucent
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {}}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              backgroundColor: 'rgba(77,77,77,.4)',
              zIndex: 999,
              justifyContent: 'center',
              paddingBottom: normalize(32),
            }}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={{
                  marginHorizontal: normalize(16),
                  borderRadius: normalize(12),
                  padding: normalize(16),
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{fontSize: normalize(14), color: Colors.green}}>
                      Correct answers
                    </Text>
                    <Text
                      style={{
                        fontSize: normalize(18),
                        fontWeight: 'bold',
                        color: Colors.green,
                      }}>
                      {correctAnswer}
                    </Text>
                  </View>
                  <View
                    style={{marginLeft: normalize(10), alignItems: 'center'}}>
                    <Text style={{fontSize: normalize(14), color: Colors.red}}>
                      Incorrect answers
                    </Text>
                    <Text
                      style={{
                        fontSize: normalize(18),
                        fontWeight: 'bold',
                        color: Colors.red,
                      }}>
                      {questions.length - correctAnswer}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setCurrentQuestion(0);
                    setCorrectAnswer(0);
                    setSelectedAnswer('');
                    setModalVisible(false);
                  }}
                  style={{
                    width: fullScreen.width - normalize(64),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: normalize(8),
                    backgroundColor: '#0A2540',
                    paddingVertical: normalize(12),
                    marginTop: normalize(20),
                  }}>
                  <Text style={{color: Colors.white}}>Retry</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default QuizScreen;
