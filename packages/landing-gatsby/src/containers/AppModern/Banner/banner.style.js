import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import img from '../../../images/etusivu_webp/etusivu_valokuva_large.webp'


const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  position: relative; 
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    max-height: 80vh;    
  }
  @media only screen and (min-width: 1099px) and (max-width: 1200px) {
    max-height: 80vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
    max-height: 90vh;
  }

  > div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      max-height: calc(100vh - 100px);
      margin-top: 35px;     
    }
    @media only screen and (max-width: 1099px) {
      max-height: 80vh;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      max-height: 80vh;
    }
  }
  .bannerBottomShape {
    position: absolute;
    right: 0;
    bottom: -2px;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }
`;

export const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
    flex-shrink: 0;
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    font-family: 'Playfair Display';
    font-size: 1.8rem;  
    font-weight: 400;
    color: rgba(20, 28, 45, .95);
    padding: 0.5rem;
    margin-bottom: 10rem;
    border: 2px 0 2px 0;
    border-color: rgba(20, 28, 45, .95);
    border-top: 2px solid rgba(20, 28, 45, .95);
    border-bottom: 2px solid rgba(20, 28, 45, .95);

    @media only screen and (min-width: 440px) and (max-width: 998px) {
      font-size: 2.2rem;     
      margin-bottom: 6rem;
    }

    @media only screen and (min-width: 999px) and (max-width: 1366px) {
      font-size: 3.6rem;     
      margin-bottom: 6rem;
    }
  
    @media only screen and (min-width: 1366px) {
      font-size: 4.8rem;     
      margin-bottom: 6rem;
    }  
  }
`;


// export const BannerImage = styled.div`
//   flex-shrink: 0;
//   img {
//     margin-left: -40px;
//     margin-top: 50px;
//     @media only screen and (max-width: 1440px) {
//       margin-top: 0px;
//     }
//   }
//   @media only screen and (max-width: 1199px) {
//     display: none;
//   }
// `;

// export const ButtonGroup = styled.div`
//   margin-top: 35px;

//   .reusecore__button {
//     text-transform: inherit;
//     border-radius: 5px;
//     padding-left: 16px;
//     padding-right: 16px;

//     &.primary {
//       background-color: ${themeGet('colors.white', '#fff')};
//       color: rgb(15, 33, 55);
//       font-size: 16px;
//       letter-spacing: -0.1px;
//       &:hover {
//         box-shadow: #1e2a4a 0px 12px 24px -10px;
//       }
//     }

//     &.text {
//       font-size: 16px;
//       color: ${themeGet('colors.white', '#fff')};
//       letter-spacing: -0.1px;
//       font-weight: 500;
//       .btn-icon {
//         i {
//           color: #fff;
//         }
//         svg {
//           width: auto;
//           height: 25px;
//         }
//       }
//     }
//   }
// `;
// export const VideoGroup = styled.div`
//   display: flex;
//   margin-top: 60px;
//   @media only screen and (max-width: 768px) {
//     margin-top: 45px;
//   }
//   @media only screen and (max-width: 600px) {
//     flex-direction: column;
//   }
//   img {
//     margin-right: 10px;
//     max-width: 100%;
//     object-fit: cover;
//     cursor: pointer;
//     height: 100%;
//     @media only screen and (max-width: 600px) {
//       margin-right: 0;
//       margin-bottom: 15px;
//     }
//   }
// `;
// export const VideoWrapper = styled.div`
//   max-width: 100%;
//   width: 900px;
//   position: relative;
//   &:before {
//     content: '';
//     display: block;
//     padding-top: 56.25%;
//   }
//   iframe {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
// `;
// export const CustomerWrapper = styled.div`
//   max-width: 850px;
//   padding: 0px 0 70px;
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   @media only screen and (max-width: 1440px) {
//     padding: 0px 0 55px;
//   }
//   @media only screen and (max-width: 1099px) {
//     padding: 55px 0 55px;
//     max-width: 920px;
//   }
//   @media only screen and (max-width: 991px) {
//     padding: 40px 0;
//   }
//   @media only screen and (max-width: 600px) {
//     padding: 25px 0 40px;
//   }

//   p {
//     margin: 0 12px 0 0;
//     color: ${themeGet('colors.menu', '#0D233E')};
//     @media only screen and (max-width: 991px) {
//       display: none;
//     }
//   }
// `;

// export const ImageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   @media only screen and (max-width: 991px) {
//     flex-wrap: wrap;
//     justify-content: center;
//     margin: 0 auto;
//   }
//   img {
//     margin: 0 12px;
//     @media only screen and (max-width: 667px) {
//       margin: 5px 10px;
//     }
//   }
// `;
export default BannerWrapper;
