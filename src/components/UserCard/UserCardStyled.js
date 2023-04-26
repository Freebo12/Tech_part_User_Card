import styled from '@emotion/styled';
import background from '../../img/background.png';
import goItLogo from '../../img/Vector.png';

export const UserBox = styled.div`
  position: relative;
  text-align: center;

  width: 380px;
  height: 460px;
  border-radius: 20px;
  background-repeat: no-repeat;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const UserName = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const UserTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const BtnFollow = styled.button`
  border: none;
  position: absolute;
  left: 92px;
  bottom: 36px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  transition: 300ms;

  :hover {
    background: #5cd3a8;
  }
  :active {
    background: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
  }
`;

export const BtnContent = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const ImgUser = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 178px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  padding: 9px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const ImgBox = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 28px 36px;
`;

export const SubBox = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const Line = styled.div`
  position: relative;
  display: inline-block;

  :before {
    content: ' ';
    background: #33ccff;
    width: 150px;
    height: 8px;
    top: -40px;
    right: 230px;
    position: absolute;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  :after {
    content: ' ';
    background: #333333;
    width: 150px;
    height: 8px;
    top: -40px;
    right: 0;
    position: absolute;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const LogoGoIt = styled.div`
  background-image: url(${goItLogo});
  background-repeat: no-repeat;
  background-position: 28px 36px;
  position: absolute;
  top: -20px;
  left: -10px;
  width: 120px;
  height: 75px;
`;
