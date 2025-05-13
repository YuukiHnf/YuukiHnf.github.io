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
  "“I feel lonely when they stop chatting”: Exploring Auditory Comment Display for Eyes-Free Social-Viewing Experience in Online Music Videos";
const materialURL = "/acd/";
const authors = "Yuki Abe, Daisuke Sakamoto, and Tetsuo Ono";
const teaserCaption =
  "Overview of Auditory Comment Display (ACD). (a) ACD offers text video comments via text-to-speech synthesis, (b) enabling eyes-free listeners to enjoy a social-viewing experience while listening to music videos. We used music concert videos as example content and explored ACD within this context. This work aims to broaden the accessibility of a social-viewing experience, particularly for eyes-free listeners, by designing and understanding the user experience of listening to comment-to-speech synthesis with music video.";
const abstract =
  "Online music videos on video-sharing platforms offer video comments that viewers can read to enjoy their social-viewing experience. However, because these comments rely on visual elements through texts, they are not accessible to eyes-free listeners, such as those who listen to music videos while jogging, commuting, or showering. To address this gap, we explore Auditory Comment Display (ACD), which offers text comments via text-to-speech (TTS) synthesis, enabling eyes-free listeners to enjoy a social-viewing experience while listening to music videos. We used music concert videos as example content and prototyped varying comment- to-speech styles in this context. We conducted a formative study (N = 8), prototyping (N = 10), and a user study (N = 12). The results indicated that ACD enhanced eyes-free listeners’ social-viewing experience, although it may not be appropriate for specific situations and users. We discuss the design implications and future directions for the eyes-free social-viewing experience via comment-to-speech synthesis.";
const conference_publicationID = "acd-cscw25";
const En = true;
const teaserVideoId = "fSdDc9sJkQQ";
// const teaserVideoId = "Vj_JIwxL4GM";
const AuditoryCommentDisplay = () => {
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
                  width={"100%"} // 幅を少し調整
                >
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
                    3 min video figure
                  </Typography>
                </Box>
              </Box>
              {/*<SubTitle title="Video" />
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
              </Box> */}
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
              {/* <ButtonBase
                onClick={() => router.push(materialURL + "paper.pdf")}
              > */}
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
              {/* </ButtonBase> */}
              <Box sx={{ height: "40px" }} />
              {/* <img
                src={materialURL + "logo.png"}
                style={{
                  borderRadius: "8px",
                  maxHeight: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                alt="The image of the footer, which is conference logo"
              /> */}
            </Box>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default AuditoryCommentDisplay;
