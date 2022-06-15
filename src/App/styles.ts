import colors from '../colors';
import BgPhoto from '../images/siteBg2.jpg'
export default function styles() {
  return {
    appRoot: {
      height: '100vh',
      background: colors.background,
    },
    app: {
      height: 'calc(100% - 5rem)',
      color: colors.textColor,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: ".625rem 11.625rem",
      // background: '#1e272e',
      // backgroundImage: `url(${BgPhoto})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -1,
      overflow: 'auto',

      "@media (max-width: 720px)": {
        padding: "5.625rem 3.625rem",
      }
    },
  };
}
