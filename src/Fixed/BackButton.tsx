import { Box, Button, Fab, IconButton, Zoom } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import theme from "@/styles/GlobalTheme";
type Props = {
  anchorRef: React.RefObject<HTMLElement>; // 過ぎたら表示する基準となるref
  contentRef: React.RefObject<HTMLElement>; // スクロール位置を取得するref
};
const BackButton = ({ anchorRef, contentRef }: Props) => {
  // ボタンの表示状態を管理するstate
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (!anchorRef) return;
    // ウィンドウのスクロール位置がcontentRefの要素を過ぎたかチェック
    if (anchorRef.current) {
      setShowButton(window.scrollY > anchorRef.current.offsetTop);
    }
  };
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  // コンポーネントがマウントされたときにイベントリスナーを追加
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // コンポーネントがアンマウントされるときにイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useCallbackを使用して、不必要な再生成を避ける
  const scrollToMyElement = useCallback(() => {
    if (!contentRef) return;
    const element = contentRef.current;
    if (element) {
      // scrollIntoViewを呼び出して要素までスクロールする
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <Zoom
      in={showButton}
      style={{
        transitionDelay: showButton ? "500ms" : "0ms",
      }}
      timeout={transitionDuration}
      unmountOnExit
    >
      <Fab
        size="small"
        sx={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          zIndex: 100,
        }}
        onClick={scrollToMyElement}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </Zoom>
  );
  //   return (
  //     <Box
  //   sx={{
  //     position: "fixed",
  //     right: "16px",
  //     bottom: "16px",
  //     zIndex: 100,
  //   }}
  //       display={showButton ? "block" : "none"}
  //     >
  //       <Button
  //         variant="contained"
  //         color="inherit"
  //         sx={{
  //           p: "8px",
  //           width: "24px",
  //           minWidth: "40px",
  //           height: "40px",
  //           borderRadius: "24px",
  //         }}
  //         onClick={scrollToMyElement}
  //       >
  //         <KeyboardArrowUpRoundedIcon />
  //       </Button>
  //     </Box>
  //   );
};

export default BackButton;
