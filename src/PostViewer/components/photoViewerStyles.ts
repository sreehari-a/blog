import colors from "../../colors";


export default function styles() {
  return {
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    toggleButton: {
      background: "transparent",
      height: "100%",
      border: 0,
      fontSize: "2rem",
      position: "absolute",
    },
    leftButton: {
      left: "0",
    },
    rightButton: {
      right: "0",
    },
    imageContainer: {
      width: "34.25rem",
      height: "18.75rem",
      display: "flex",
      justifyContent: "center",
      position: "relative",
      backgroundColor: colors.backgroundLight,
      borderRadius: '0.375rem',
      boxShadow: 'rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px'
    },
    postBg: {
      padding:'0.625rem 0',
    }
  };
}
