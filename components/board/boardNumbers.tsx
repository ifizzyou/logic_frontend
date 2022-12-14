import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LeftLineFinish, TopLineFinish } from '../../utils/Jotai';
import BoardLine from './boardLine';
import { IBoardNumbers } from './interface';
import { MOCK_BOARD } from './mockBoard';

const BoardNumbers = ({
	line,
	position,
	boardArr,
	setBoardArr,
}: IBoardNumbers) => {
	const [leftLineFinishArr, setLeftLineFinishArr] = useAtom(LeftLineFinish);
	const [topLineFinishArr, setTopLineFinishArr] = useAtom(TopLineFinish);

	return (
		<>
			<View
				style={[
					position === 'top' ? { flexDirection: 'row', flex: 3 } : { flex: 1 },
				]}
			>
				{Array.from({ length: line }, (_, i) => i).map((nthLine: number) => (
					<View
						key={nthLine}
						style={[
							S.boardNumberLine,
							position === 'top'
								? {
										alignItems: 'center',
										justifyContent: 'flex-end',
										// paddingBottom: 7,
										backgroundColor: topLineFinishArr[nthLine]
											? 'gray'
											: '#dddddd',
								  }
								: {
										alignItems: 'flex-end',
										justifyContent: 'center',
										// paddingRight: 7,
										backgroundColor: leftLineFinishArr[nthLine]
											? 'gray'
											: '#dddddd',
								  },

							// topLineFinishArr[nthLine]
							// 	? { backgroundColor: 'gray' }
							// 	: { backgroundColor: '#dddddd' },
							// leftLineFinishArr[nthLine]
							// 	? { backgroundColor: 'gray' }
							// 	: { backgroundColor: '#dddddd' },
						]}
					>
						<BoardLine
							line={line}
							nthLine={nthLine}
							position={position}
							boardArr={boardArr}
							setBoardArr={setBoardArr}
						/>
					</View>
				))}
			</View>
		</>
	);
};

export default BoardNumbers;

const S = StyleSheet.create({
	boardNumberLine: {
		flex: 10,
		borderWidth: 0.4,
		backgroundColor: '#cccccc',
	},
});
