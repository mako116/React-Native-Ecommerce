import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constant/index';

const styles = StyleSheet.create({
  textStyle: {
    // fontFamily: 'bold',
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    // fontFamily: 'semibold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    zIndex: 999,
  },
  cartNumber: {
    // fontFamily: 'regular',
    fontWeight: '600',
    fontSize: 10,
    color: COLORS.lightWhite,
  },
  dropdownMenu: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 8,
    padding: 10,
    position: 'absolute',
    top: 50, // Adjust based on your layout
    left: 0,  // Adjust based on your layout
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});

export default styles;
