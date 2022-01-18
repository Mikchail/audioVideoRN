// import { StyleSheet } from 'react-native';
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

// //Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

// const scale = size => width / guidelineBaseWidth * size;
// const verticalScale = size => height / guidelineBaseHeight * size;
// const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

// const flexStyles = {
//     display: 'flex',
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'stretch',
// };

// const circleStyle = (heightWidth) => ({
//     borderRadius: heightWidth / 2,
//     width: moderateScale(heightWidth),
//     height: moderateScale(heightWidth),
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// });

// const styles = StyleSheet.create({
//     playerMaxView: {
//         ...flexStyles,
//         backgroundColor: '#a3a3c2',
//         paddingHorizontal: 5,
//         height: verticalScale(300),
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//         borderTopLeftRadius: scale(20),
//         borderTopRightRadius: scale(20),
//     },
//     topSection: {
//         ...flexStyles,
//         flex: 5,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: 10,
//     },
//     progrsBarSection: {
//         ...flexStyles,
//         width: "100%",
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//     buttonsSection: {
//         ...flexStyles,
//         flex: 2,
//         flexDirection: 'row',
//     },
//     buttonsCol: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingBottom: scale(10),
//     },
//     playPauseButton: {
//         ...circleStyle(60),
//         backgroundColor: '#52527a',
//     },
//     playPauseIcon: {
//         color: '#fff',
//     },
//     trackArtBox: {
//         ...flexStyles,
//         flex: 2,
//         display: 'flex',
//     },
//     trackArt: {
//         ...circleStyle(90),
//         borderWidth: 2,
//     },
//     trackDesc: {
//         ...flexStyles,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     trackTitle: {
//         fontSize: scale(20),
//         fontWeight: 'bold',
//         color: '#3d3d5c',
//     },
//     trackSubtitle: {
//         fontSize: scale(16),
//         fontWeight: 'bold',
//         color: '#3d3d5c',
//     },
// });

// export default styles;