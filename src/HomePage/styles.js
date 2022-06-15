import colors from "../colors";

export default function styles() {
  return {
    container: {
      width: '100%',
    },
    intro: {
      fontSize: '3rem',
      fontWeight: "bold",
      textAlign:'center',
      color: colors.primaryDark
    },
    introDescription: {
      fontSize: '1.5rem',
      margin: 'auto',
      lineHeight: 'normal',
    },
    postsContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridRowGap: '1.5rem',
      height: 'fit-content',
      maxHeight: '100%',
      paddingTop: '1rem',
    },
    postContainer: {
      position: "relative",
      cursor: 'pointer',
      width: "350px",
      background: colors.backgroundLight,
      height: "100%",
      borderRadius: "8px",
      transition: ".3s ease-in-out",
      transform: "scale(1) translate3d(0,0,0) perspective(1px)",
      transformOrigin: "left top",
      "&:hover": {
        transform: "translateY(-10px) scale(1) translate3d(0,0,0) perspective(1px)",
        transformOrigin: "left top",
      },
    },
    postBg: {
      margin: '7px',
      backgroundSize: "cover",
      height: "200px",
      width: "auto",
      borderRadius: '5px 5px 0 0',
    },
    postDetails: {
      height: "calc(100% - 200px)",
      width: "100%",
      padding: "1.5rem 0.83rem",
      textAlign: "center",
    },
    postHeader: {
      fontWeight: "bold",
      fontSize: "2rem",
    },
    postDesc: {
      fontSize: "1rem",
      textAlign: "start",
    },
  };
}
