import BodyWrapper from "@/components/BodyWrapper";
import YouTubeEmbed from "@/components/Contents/YoutubeEmbed";
import SubTitle from "@/components/Title/SubTitle";
import theme from "@/styles/GlobalTheme";
import { Box, ButtonBase, Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import FigureAndCaption from "../CMS/FigureAndCaption";
import {
  conference_publications,
  demo_publications,
  journal_publications,
  UnderlineAuthorName,
} from "../CMS/Publications";
import Profile from "../Views/Profile";
import { ProjectData } from "../data/projectsData";

interface ProjectPageTemplateProps {
  projectData: ProjectData;
}

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({ 
  projectData 
}) => {
  const router = useRouter();
  const {
    title,
    materialURL,
    authors,
    abstract,
    teaserCaption,
    conference_publicationID,
    presentationVideoId,
    teaserVideoId,
    isEnglish,
    hasAcknowledgments,
    acknowledgmentsText,
    figures,
    customSections
  } = projectData;

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
            <Profile isEnglish={isEnglish} aboutElement={false} />
          </Grid>
          <Grid item xs={9} width={"100%"}>
            <Box>
              {/* Hero Section with Background */}
              <Box
                sx={{ position: "relative", width: "100%", overflow: "hidden" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "260px",
                    height: "auto",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${materialURL}background.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(8px)",
                      opacity: 0.7,
                    },
                  }}
                >
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
              
              {/* Teaser Figure */}
              <FigureAndCaption
                materialURL={materialURL + "teaser.png"}
                caption={teaserCaption}
              />
              
              {/* Abstract */}
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

              {/* Videos Section */}
              {(presentationVideoId || teaserVideoId) && (
                <>
                  <SubTitle title="Video" />
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                    width="100%"
                  >
                    {teaserVideoId && (
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        width={{ xs: "100%", sm: "48%" }}
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
                    )}
                    
                    {presentationVideoId && (
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        width={{ xs: "100%", sm: "48%" }}
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
                    )}
                  </Box>
                </>
              )}

              {/* Additional Figures */}
              {figures && figures.map((figure, index) => (
                <Box key={index} mt={4}>
                  <FigureAndCaption
                    materialURL={figure.url}
                    caption={figure.caption}
                  />
                </Box>
              ))}

              {/* Custom Sections */}
              {customSections && customSections.map((section, index) => (
                <Box key={index} mt={4}>
                  <SubTitle title={section.title} />
                  <Typography
                    variant="body1"
                    fontSize={{ xs: "1rem", sm: "1.2rem" }}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: "transparent",
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              ))}

              {/* Publications Section - Original academic format */}
              <SubTitle title="Publication" />
              <ol
                style={{
                  paddingLeft: "25px",
                  fontFamily: "Helvetica",
                }}
              >
                {journal_publications
                  .filter((value) => value.id === conference_publicationID)
                  .map((publication, index) => (
                    <li
                      key={
                        publication.id + publication.authors + publication.where
                      }
                    >
                      <Typography
                        key={publication.id}
                        sx={{ m: index === 0 ? "0px" : "4px 0px" }}
                        variant="body1"
                        fontSize={{ xs: "1rem", sm: "1.2rem" }}
                      >
                        <UnderlineAuthorName
                          text={
                            isEnglish
                              ? publication.authorsEn ?? publication.authors
                              : publication.authors
                          }
                        />
                        {". "}
                        <span style={{ fontWeight: "bold" }}>
                          {isEnglish
                            ? publication.titleEn ?? publication.title
                            : publication.title}
                        </span>
                        {". "}
                        <span>
                          {isEnglish
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
                        {publication.doi && (
                          <>
                            {"["}
                            <Link
                              href={publication.doi}
                              sx={{ wordWrap: "break-word" }}
                            >
                              DOI
                            </Link>
                            {"]"}
                          </>
                        )}
                      </Typography>
                    </li>
                  ))}

                {conference_publications
                  .filter((value) => value.id === conference_publicationID)
                  .map((publication, index) => (
                    <li
                      key={
                        publication.id + publication.authors + publication.where
                      }
                    >
                      <Typography
                        key={publication.id}
                        sx={{ m: index === 0 ? "0px" : "4px 0px" }}
                        variant="body1"
                        fontSize={{ xs: "1rem", sm: "1.2rem" }}
                      >
                        <UnderlineAuthorName
                          text={
                            isEnglish
                              ? publication.authorsEn ?? publication.authors
                              : publication.authors
                          }
                        />
                        {". "}
                        <span style={{ fontWeight: "bolder" }}>
                          {isEnglish
                            ? publication.titleEn ?? publication.title
                            : publication.title}
                        </span>
                        {". "}
                        <span>
                          {isEnglish
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
                        {publication.doi && (
                          <>
                            {" ["}
                            <Link
                              href={publication.doi}
                              sx={{ wordWrap: "break-word" }}
                            >
                              DOI
                            </Link>
                            {"]"}
                          </>
                        )}
                      </Typography>
                    </li>
                  ))}

                {demo_publications
                  .filter((value) => value.id === conference_publicationID)
                  .filter((publication) =>
                    isEnglish ? !publication.invisibleInEn : true
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
                            isEnglish
                              ? publication.authorsEn ?? publication.authors
                              : publication.authors
                          }
                        />
                        {". "}
                        <span style={{ fontWeight: "bolder" }}>
                          {isEnglish
                            ? publication.titleEn ?? publication.title
                            : publication.title}
                        </span>
                        {". "}
                        <span>
                          {isEnglish
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
                        {publication.doi && (
                          <>
                            {"["}
                            <Link
                              href={publication.doi}
                              sx={{ wordWrap: "break-word" }}
                            >
                              {publication.doi.includes("doi") ? "DOI" : "URL"}
                            </Link>
                            {"]"}
                          </>
                        )}
                        {publication.poster && (
                          <>
                            {" ["}
                            <Link
                              href={publication.poster}
                              sx={{ wordWrap: "break-word" }}
                            >
                              {"Poster"}
                            </Link>
                            {"]"}
                          </>
                        )}
                      </Typography>
                    </li>
                  ))}
              </ol>

              {/* Clickable Paper Image */}
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

              {/* Acknowledgments */}
              {hasAcknowledgments && acknowledgmentsText && (
                <>
                  <SubTitle title="Acknowledgments" />
                  <Typography
                    variant="body1"
                    fontSize={{ xs: "1rem", sm: "1.2rem" }}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecorationColor: "transparent",
                    }}
                  >
                    {acknowledgmentsText}
                  </Typography>
                </>
              )}

              <Box sx={{ height: "40px" }} />
              
              {/* Footer Logo */}
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

export default ProjectPageTemplate;