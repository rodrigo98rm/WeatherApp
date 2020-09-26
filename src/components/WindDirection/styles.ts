import styled from 'styled-components';

interface DegreeProps {
	deg: number;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 32px;
`;

export const Degree = styled.div<DegreeProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.3);
	transform: rotate(calc(-45deg + ${(props) => props.deg}deg));
`;

export const Compass = styled.span`
	font-size: 14px;
	color: #e7e7eb;
	margin-left: 6px;
`;
