import styled from '@emotion/styled';
import CAMPFIRElogo from '../../asset/CAMPFIRElogo.png';

const Logo = () => {
  return <Image src={CAMPFIRElogo} alt="캠프파이어 로고사진" />;
};

const Image = styled.img`
  width: 286px;
  height: 43px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 150px;
    height: 20px;
  }
`;

export default Logo;
