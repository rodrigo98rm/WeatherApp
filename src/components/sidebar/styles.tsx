import styled from 'styled-components';
    
export const Sidebar = styled.div`
    color: #FFF;
    background-color: #29304D;
    max-width: 400px;
    height: 100vh;
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
    color: #FFF;
    background-color: #555;
    border-radius: 3px;
    padding: 8px 10px;
    border: none;
    outline: 0;
`;

export const GpsButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    justify-content: space-between;
`;

export const StatusImage = styled.img`
    width: 80%;
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