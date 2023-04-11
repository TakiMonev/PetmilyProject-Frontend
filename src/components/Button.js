import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const ColorTypeProps = {
  YELLOW: {
    color: 'white',
    backgroundColor: '#fcd34d',
  },
  WHITE: {
    color: 'black',
    backgroundColor: 'white',
  },
};
export const ColorTypes = {
  YELLOW: 'YELLOW',
  WHITE: 'WHITE',
};

const SquareButton = ({ colorType, text }) => {
  const { color, backgroundColor } = ColorTypeProps[colorType];
  return (
    <TouchableOpacity
      style={[btnStyle.yellow, { backgroundColor: `${backgroundColor}` }]}
    >
      <Text style={[btnStyle.yellow_text, { color: `${color}` }]}>{text}</Text>
    </TouchableOpacity>
  );
};

SquareButton.prototype = {
  colorType: PropTypes.string,
};

const btnStyle = StyleSheet.create({
  yellow: {
    width: 300,
    alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 10,
    margin: 15,
  },
  yellow_text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default SquareButton;
