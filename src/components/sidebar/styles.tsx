import styled from 'styled-components';

export const Sidebar = styled.div`
	color: #fff;
	background-color: #29304d;
	max-width: 400px;
	min-height: 100vh;
	padding: 40px;
	display: flex;
	flex-direction: column;
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
	min-height: 80vh;
	justify-content: space-between;
`;

export const StatusImage = styled.img`
	width: 80%;
	user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;

export const TempContainer = styled.div`
	font-size: 5rem;
	display: flex;
	align-items: center;

	b {
		font-size: 2.5rem;
	}
`;

export const DateContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 80%;
`;
