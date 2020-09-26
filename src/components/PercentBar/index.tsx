import React from 'react';

import { Container, LabelContainer, Bar, Progress } from './styles';

interface PercentBarProps extends React.HTMLAttributes<HTMLDivElement> {
	progress?: number;
}

const PercentBar: React.FC<PercentBarProps> = ({ progress = 0, ...rest }) => {
	return (
		<Container {...rest}>
			<LabelContainer>
				<span>0</span>
				<span>50</span>
				<span>100</span>
			</LabelContainer>
			<Bar>
				<Progress progress={progress} />
			</Bar>
			<span
				style={{
					alignSelf: 'flex-end',
					fontWeight: 'bold',
					fontSize: 12,
					marginTop: 2,
				}}
			>
				%
			</span>
		</Container>
	);
};

export default PercentBar;
