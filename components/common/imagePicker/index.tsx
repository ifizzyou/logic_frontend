import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import ImagePickerCropper, {
	ImageOrVideo,
} from 'react-native-image-crop-picker';

// import RBSheetProps from '../../../node_modules/react-native-raw-bottom-sheet/index';

const MyImagePicker = React.forwardRef(({ onFileSelected }: any, ref: any) => {
	const options = [
		{
			name: 'Take from camera',
			icon: <Icon color={colors.grey} size={21} name="camera" />,
			onPress: () => {
				ImagePickerCropper.openCamera({
					width: 300,
					height: 300,
					cropping: true,
					freeStyleCropEnabled: true,
				})
					.then((images) => {
						onFileSelected(images);
					})
					.catch((error) => {});
			},
		},
		{
			name: 'Choose from Gallery',
			icon: <Icon name="image" color={colors.grey} size={21} />,
			onPress: () => {
				ImagePickerCropper.openPicker({
					width: 300,
					height: 300,
					cropping: true,
					freeStyleCropEnabled: true,
				})
					.then((images) => {
						onFileSelected(images);
					})
					.catch((error) => {});
			},
		},
	];
	return (
		<RBSheet
			ref={ref}
			height={190}
			openDuration={250}
			dragFromTopOnly
			closeOnDragDown
			customStyles={{
				container: {
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
				},
			}}
		>
			<View style={styles.optionsWrapper}>
				{options.map(({ name, onPress, icon }) => (
					<TouchableOpacity
						onPress={onPress}
						style={styles.pickerOption}
						key={name}
					>
						{icon}
						<Text style={styles.text}>{name}</Text>
					</TouchableOpacity>
				))}
			</View>
		</RBSheet>
	);
});

export default MyImagePicker;
