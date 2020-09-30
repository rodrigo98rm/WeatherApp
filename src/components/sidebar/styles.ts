import styled from 'styled-components';

export const Sidebar = styled.div`
	color: #fff;
	background-color: #29304d;
	min-width: 400px;
	max-width: 459px;
	min-height: 100vh;
	padding: 40px;
	display: flex;
	flex-direction: column;

	h1 {
		color: #a09fb1;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Button = styled.button`
	color: #fff;
	background-color: #555;
	border-radius: 3px;
	padding: 8px 10px;
	border: none;
	outline: 0;
`;

// export const GpsButton = styled(Button)`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	border-radius: 50%;
// 	padding: 10px;
// `;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	justify-content: center;
`;

export const StatusImage = styled.img`
	width: 80%;
	margin: 64px 0;
	user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;

export const TempContainer = styled.div`
	font-size: 144px;
	margin: 48px 0;
	display: flex;
	align-items: flex-end;

	b {
		font-size: 64px;
		color: #e7e7eb;
	}
`;

export const DateContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 32px 0;
	width: 80%;
	color: #88869d;
`;
