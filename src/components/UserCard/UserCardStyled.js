import styled from '@emotion/styled';
import background from '../../img/background.png';
import goItLogo from '../../img/Vector.png';

export const UserBox = styled.div`
  position: relative;

  width: 380px;
  height: 460px;
  border-radius: 20px;
  background-image: url('../../img/background.png'), url(${goItLogo});
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

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
  width: 62px;
  height: 62px;
  border-radius: 50%;
  padding: 9px;
  /* padding-top: 178px; */
`;

export const ImgBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 178px; */
`;
