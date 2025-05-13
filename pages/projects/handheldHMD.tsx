import BodyWrapper from "@/components/BodyWrapper";
import YouTubeEmbed from "@/components/Contents/YoutubeEmbed";
import SubTitle from "@/components/Title/SubTitle";
import { titleFontSize } from "@/components/TypingH1";
import theme from "@/styles/GlobalTheme";
import { YouTube } from "@mui/icons-material";
import { Box, Button, ButtonBase, Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import FigureAndCaption from "src/CMS/FigureAndCaption";
import {
  conference_publications,
  demo_publications,
  journal_publications,
  UnderlineAuthorName,
} from "src/CMS/Publications";
import Profile from "src/Views/Profile";

const title =
  "Understanding Usability of VR Pointing Methods with a Handheld-style HMD for Onsite Exhibitions";
const materialURL = "/handheldHMD/";
const authors =
  "Yuki Abe*, Kan Kusakabe*, Myungguen Choi*, Daisuke Sakamoto, and Tetsuo Ono";
const teaserCaption =
  "Figure 1: Overview of our study. (A) Handheld-style HMDs are headsets that can be held in one hand and are utilized in VR exhibitions to help visitors start VR content with their snackable effort. (B) Comparison of VR pointing methods with handheld-style HMDs to understand the usability of VR pointing methods for interactive VR exhibitions using handheld-style HMDs.";
const abstract =
  "Handheld-style head-mounted displays (HMDs) are becoming increasingly popular as a convenient option for onsite exhibitions. However, they lack established practices for basic interactions, particularly pointing methods. Through our formative study involving practitioners, we discovered that controllers and hand gestures are the primary pointing methods being utilized. Building upon these findings, we conducted a usability study to explore seven different pointing methods, incorporating insights from the formative study and current virtual reality (VR) practices. The results showed that while controllers remain a viable option, hand gestures are not recommended. Notably, dwell time-based methods, which are not fast and are not commonly recognized by practitioners, demonstrate high usability and user confidence, particularly for inexperienced VR users. We recommend the use of dwell-based methods for onsite exhibition contexts. This research provides insights for the adoption of handheld-style HMDs, laying the groundwork for improving user interaction in exhibition environments, thereby potentially enhancing visitor experiences.";
const suplimentaryfigure =
  "Design guideline of VR pointing methods with a handheld-style HMD for VR exhibitors based on our findings from the user study.";
const conference_publicationID = "HandheldHMD24";
const En = true;
const presentationVideoId = "aLAMypv2lwI";
const teaserVideoId = "aLAMypv2lwI";
const RunSight = () => {
  const router = useRouter();
  return (
    <>
      <BodyWrapper>
        <Grid
          container
          flexDirection={"row"}
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          width={{ xs: "100%", sm: "100%" }}
          margin={"0px auto"}
        >
          <Grid item xs={3} width={"100%"}>
            <Profile isEnglish aboutElement={false} />
          </Grid>
          <Grid item xs={9} width={"100%"}>
            <Box>
              <Box
                sx={{ position: "relative", width: "100%", overflow: "hidden" }}
              >
                {/* Blurred background wrapper - 高さを自動調整 */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    // minHeight: "260px", // 最小の高さを設定
                    height: "auto", // 高さを自動調整
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${materialURL + "background.jpg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(8px)",
                      opacity: 0.7,
                    },
                  }}
                >
                  {/* Content overlay - パディングを調整してコンテンツに合わせて拡張 */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "30px",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {/* Logo */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <img
                        src={materialURL + "logo.png"}
                        alt="Conference Logo"
                        style={{
                          borderRadius: "8px",
                          maxHeight: "40px",
                          objectFit: "contain",
                          width: "auto",
                        }}
                      />
                    </Box>
                    {/* Title */}
                    <Typography
                      component="h1"
                      variant="h4"
                      fontWeight="bold"
                      fontSize={{ xs: "1.3rem", sm: "1.78rem" }}
                      sx={{
                        whiteSpace: "pre-line",
                        lineHeight: "1.2em",
                        mb: 1,
                      }}
                    >
                      {title}
                    </Typography>
                    {/* Divider line */}
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "#ffffff",
                        my: 1,
                      }}
                    />

                    {/* Authors */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#ffffff",
                        fontSize: { xs: "1rem", sm: undefined },
                        mb: 0.5,
                      }}
                    >
                      {authors}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ height: "40px" }} />
              <FigureAndCaption
                materialURL={materialURL + "teaser.png"}
                caption={teaserCaption}
              />
              <SubTitle title="Abstract" />
              <Typography
                variant="body1"
                fontSize={{ xs: "1rem", sm: "1.2rem" }}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecorationColor: "transparent",
                }}
              >
                {abstract}
              </Typography>
              {/* <FigureAndCaption
                materialURL={materialURL + "suplimentaryfigure.png"}
                caption={suplimentaryfigure}
              /> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ width: { xs: "100%", sm: "75%" } }}>
                  <img
                    src={materialURL + "suplimentaryfigure.png"}
                    style={{
                      borderRadius: "8px",
                      maxHeight: "100%",
                      objectFit: "contain",
                      width: "100%",
                    }}
                    alt={"thumbnail of the project"}
                  />
                  {/* Captionをcenter */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      //     color: "#555",
                      textAlign: "center",
                      marginTop: "4px",
                      width: "100%", // 幅を指定して中央揃えの効果を確保
                    }}
                  >
                    {suplimentaryfigure}
                  </Typography>
                </Box>
              </Box>
              <SubTitle title="Video" />
              {/* したのvideo２つをPCの時は横並び、スマホは縦 */}
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                gap={2}
                width="100%" // 幅を100%に設定
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  width={{ xs: "100%", sm: "48%" }} // 幅を少し調整
                >
                  {/* width="100%"を明示的に設定 */}
                  <Box width="100%">
                    <YouTubeEmbed embedId={teaserVideoId} />
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize={{ xs: "1rem", sm: "1.2rem" }}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: "transparent",
                      textAlign: "center",
                    }}
                  >
                    Teaser (1 min)
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  width={{ xs: "100%", sm: "48%" }} // 幅を少し調整
                >
                  {/* width="100%"を明示的に設定 */}
                  <Box width="100%">
                    <YouTubeEmbed embedId={presentationVideoId} />
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize={{ xs: "1rem", sm: "1.2rem" }}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: "transparent",
                      textAlign: "center",
                    }}
                  >
                    Presentation (10 min)
                  </Typography>
                </Box>
              </Box>
              {/* <Box>
                <YouTubeEmbed embedId={teaserVideoId} />
              </Box>
              <Typography
                variant="body1"
                fontSize={{ xs: "1rem", sm: "1.2rem" }}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecorationColor: "transparent",
                  textAlign: "center",
                }}
              >
                Teaser Video
              </Typography>

              <Box mt={4}>
                <YouTubeEmbed embedId={presentationVideoId} />
              </Box>
              <Typography
                variant="body1"
                fontSize={{ xs: "1rem", sm: "1.2rem" }}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecorationColor: "transparent",
                  textAlign: "center",
                }}
              >
                Presentation Video
              </Typography> */}

              <SubTitle title="Publication" />
              <ol
                style={{
                  paddingLeft: "25px",
                  // fontSize: "20px",
                  fontFamily: "Helvetica",
                }}
              >
                {journal_publications
                  .filter((value) => value.id == conference_publicationID)
                  .map((publication, index) => (
                    <li
                      key={
                        publication.id + publication.authors + publication.where
                      }
                    >
                      <Typography
                        key={publication.id}
                        sx={{ m: index == 0 ? "0px" : "4px 0px" }}
                        variant="body1"
                        fontSize={{ xs: "1rem", sm: "1.2rem" }}
                      >
                        {/* {En
                                  ? publication.authorsEn ?? publication.authors
                                  : // : publication.authors + ". " + publication.year + ""}
                                    publication.authors} */}
                        <UnderlineAuthorName
                          text={
                            En
                              ? publication.authorsEn ?? publication.authors
                              : publication.authors
                          }
                        />
                        {". "}
                        <span style={{ fontWeight: "bold" }}>
                          {En
                            ? publication.titleEn ?? publication.title
                            : publication.title}
                        </span>
                        {". "}
                        <span>
                          {En
                            ? publication.whereEn ?? publication.where
                            : publication.where}
                        </span>
                        .<span> {publication.whereDetail}</span>
                        {". "}
                        {publication.award && (
                          <>
                            <span
                              style={{ fontWeight: "bolder", color: "#347DA8" }}
                            >
                              {publication.award}
                            </span>
                            {". "}
                          </>
                        )}
                        {publication.doi ? (
                          <>
                            {"["}
                            <Link
                              href={publication.doi}
                              sx={{ wordWrap: "break-word" }}
                              display={publication.doi ? undefined : "none"}
                            >
                              DOI
                            </Link>
                            {"]"}
                          </>
                        ) : null}
                      </Typography>
                    </li>
                  ))}
                {conference_publications
                  .filter((value) => value.id == conference_publicationID)
                  .map((publication, index) => (
                    <li
                      key={
                        publication.id + publication.authors + publication.where
                      }
                    >
                      <Typography
                        key={publication.id}
                        sx={{ m: index == 0 ? "0px" : "4px 0px" }}
                        variant="body1"
                        fontSize={{ xs: "1rem", sm: "1.2rem" }}
                      >
                        {/* {publication.authors} */}
                        <UnderlineAuthorName
                          text={
                            true
                              ? publication.authorsEn ?? publication.authors
                              : publication.authors
                          }
                        />
                        {". "}
                        <span style={{ fontWeight: "bolder" }}>
                          {publication.title}
                        </span>
                        {". "}
                        {/* <span>In </span> */}
                        <span>{publication.where}</span>.
                        <span> {publication.whereDetail}</span>
                        {". "}
                        {publication.award && (
                          <>
                            <span
                              style={{ fontWeight: "bolder", color: "#347DA8" }}
                            >
                              {publication.award}
                            </span>
                            {". "}
                          </>
                        )}
                        {publication.doi ? (
                          <>
                            {" ["}
                            <Link
                              href={publication.doi}
                              sx={{ wordWrap: "break-word" }}
                              display={publication.doi ? undefined : "none"}
                            >
                              DOI
                            </Link>
                            {"]"}
                          </>
                        ) : null}
                      </Typography>
                    </li>
                  ))}
                {demo_publications
                  .filter((value) => value.id == conference_publicationID)
                  .filter((publication) =>
                    En ? !publication.invisibleInEn : true
                  )
                  .map((publication) => (
                    <li
                      key={
                        publication.id + publication.authors + publication.where
                      }
                    >
                      <Typography
                        key={publication.id}
                        sx={{ m: "4px 0px" }}
                        variant="body1"
                        fontSize={{ xs: "1rem", sm: "1.2rem" }}
                      >
                        <UnderlineAuthorName
                          text={
                            En
                              ? publication.authorsEn ?? publication.authors
                              : publication.authors
                          }
                        />
                        {". "}
                        <span style={{ fontWeight: "bolder" }}>
                          {publication.title}
                        </span>
                        {". "}
                        {/* <span>In </span> */}
                        <span>{publication.where}</span>.
                        <span> {publication.whereDetail}</span>
                        {". "}
                        {publication.award && (
                          <>
                            <span
                              style={{ fontWeight: "bolder", color: "#347DA8" }}
                            >
                              {publication.award}
                            </span>
                            {". "}
                          </>
                        )}
                        {publication.doi ? (
                          <>
                            {"["}
                            <Link
                              href={publication.doi}
                              sx={{ wordWrap: "break-word" }}
                              display={publication.doi ? undefined : "none"}
                            >
                              {/* doiにdoiという文字列が入っていればDOI, それ以外はURL */}
                              {publication.doi.includes("doi") ? "DOI" : "URL"}
                              {/* DOI */}
                            </Link>
                            {"]"}
                          </>
                        ) : null}
                        {publication.poster ? (
                          <>
                            {" ["}
                            <Link
                              href={publication.poster ?? "/"}
                              sx={{ wordWrap: "break-word" }}
                              display={publication.poster ? undefined : "none"}
                            >
                              {/* doiにdoiという文字列が入っていればDOI, それ以外はURL */}
                              {"Poster"}
                              {/* DOI */}
                            </Link>
                            {"]"}
                          </>
                        ) : null}
                      </Typography>
                    </li>
                  ))}
              </ol>
              <ButtonBase
                onClick={() => router.push(materialURL + "paper.pdf")}
              >
                <img
                  src={materialURL + "paper.png"}
                  style={{
                    borderRadius: "8px",
                    maxHeight: "100%",
                    objectFit: "contain",
                    width: "100%",
                  }}
                  alt="The image of the paper PDF"
                />
              </ButtonBase>
              <Box sx={{ height: "40px" }} />
              <img
                src={materialURL + "footer.png"}
                style={{
                  borderRadius: "8px",
                  maxHeight: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                alt="The image of the footer, which is conference logo"
              />
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default RunSight;
