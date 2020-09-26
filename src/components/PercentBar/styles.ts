import styled, { css } from 'styled-components';

interface ProgressProps {
	progress: number;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2px;
`;

export const Bar = styled.div`
	width: 100%;
	height: 8px;
	background: #e7e7eb;
	border-radius: 4px;
`;

export const Progress = styled.div<ProgressProps>`
	width: ${({ progress }) => css`calc(100% * ${progress / 100})`};
	background: #ffec65;
	height: 8px;
	border-radius: 4px;
`;
