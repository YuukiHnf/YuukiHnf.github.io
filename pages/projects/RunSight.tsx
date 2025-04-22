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
  '“I can run at night!": Using Augmented Reality to Support Nighttime Guided Running for Low-vision Runners';
const materialURL = "/runsight/";
const authors =
  "Yuki Abe, Keisuke Matsushima, Kotaro Hara, Daisuke Sakamoto, and Tetsuo Ono";
const teaserCaption =
  "RunSight, an AR-based assistive tool to support low-vision (LV) people to run during nighttime. (A) An LV runner using RunSight for Caller-style guided running. The tool enables LV individuals to run at night who would otherwise be unable to run. (B) RunSight provides a see-through scene with an edge-enhanced view of the environment along with a visualization of the guide’s trace. This supports LV individuals to be aware of potential hazards, follow a guide, and run safely at night.";
const abstract =
  "Dark environment challenges low-vision (LV) individuals to engage in running by following sighted guide—a Caller-style guided running—due to insufficient illumination, because it prevents them from using their residual vision to follow the guide and be aware about their environment. We design, develop, and evaluate RunSight, an augmented reality (AR)-based assistive tool to support LV individuals to run at night. RunSight combines see-through HMD and image processing to enhance one’s visual awareness of the surrounding environment (e.g., potential hazard) and visualize the guide’s position with AR-based visualization. To demonstrate RunSight’s efficacy, we conducted a user study with 8 LV runners. The results showed that all participants could run at least 1km (mean = 3.44 km) using RunSight, while none could engage in Caller-style guided running without it. Our participants could run safely because they effectively synthesized RunSight-provided cues and information gained from runner-guide communication.";
const conference_publicationID = "RunSight24";
const En = true;
const presentationVideoId = "Vj_JIwxL4GM";
const teaserVideoId = "Vj_JIwxL4GM";
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
                    minHeight: "260px", // 最小の高さを設定
                    height: "auto", // 高さを自動調整
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${materialURL + "background.png"})`,
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
                      position: "relative", // absoluteからrelativeに変更
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
              {/* <img
                src={materialURL + "logo.png"}
                style={{
                  borderRadius: "8px",
                  maxHeight: "100%",
                  objectFit: "contain",
                  width: "10%",
                }}
              />
              <Typography
                component="h1"
                variant="h1"
                fontSize={{ xs: "1.5rem", sm: "1.78rem" }}
                // textの改行幅を広げる
                sx={{ whiteSpace: "pre-line", lineHeight: "1.2em" }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecorationColor: "transparent",
                  fontSize: { xs: "1rem", sm: undefined },
                }}
              >
                {authors}
              </Typography> */}

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
                    Presentation (to appear)
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
                      {/* <div
                                style={{
                                  // marginTop: "0px",
                                  maxWidth: "100%",
                                }}
                              >
                                [
                                <Link href={publication.doi} sx={{ wordWrap: "break-word" }}>
                                  DOI
                                </Link>
                                ]
                              </div> */}
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
              />
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default RunSight;
