export interface ProjectData {
  id: string;
  title: string;
  materialURL: string;
  authors: string;
  abstract: string;
  teaserCaption: string;
  conference_publicationID: string;
  presentationVideoId?: string;
  teaserVideoId?: string;
  isEnglish: boolean;
  hasAcknowledgments?: boolean;
  acknowledgmentsText?: string;
  figures?: {
    url: string;
    caption: string;
  }[];
  customSections?: {
    title: string;
    content: string;
  }[];
}

export const projectsData: Record<string, ProjectData> = {
  RunSight: {
    id: "RunSight24",
    title:
      '"I can run at night!": Using Augmented Reality to Support Nighttime Guided Running for Low-vision Runners',
    materialURL: "/runsight/",
    authors:
      "Yuki Abe, Keisuke Matsushima, Kotaro Hara, Daisuke Sakamoto, and Tetsuo Ono",
    teaserCaption:
      "RunSight, an AR-based assistive tool to support low-vision (LV) people to run during nighttime. (A) An LV runner using RunSight for Caller-style guided running. The tool enables LV individuals to run at night who would otherwise be unable to run. (B) RunSight provides a see-through scene with an edge-enhanced view of the environment along with a visualization of the guide's trace. This supports LV individuals to be aware of potential hazards, follow a guide, and run safely at night.",
    abstract:
      "Dark environment challenges low-vision (LV) individuals to engage in running by following sighted guide—a Caller-style guided running—due to insufficient illumination, because it prevents them from using their residual vision to follow the guide and be aware about their environment. We design, develop, and evaluate RunSight, an augmented reality (AR)-based assistive tool to support LV individuals to run at night. RunSight combines see-through HMD and image processing to enhance one's visual awareness of the surrounding environment (e.g., potential hazard) and visualize the guide's position with AR-based visualization. To demonstrate RunSight's efficacy, we conducted a user study with 8 LV runners. The results showed that all participants could run at least 1km (mean = 3.44 km) using RunSight, while none could engage in Caller-style guided running without it. Our participants could run safely because they effectively synthesized RunSight-provided cues and information gained from runner-guide communication.",
    conference_publicationID: "RunSight24",
    presentationVideoId: "rgYPiq8QGLI",
    teaserVideoId: "Vj_JIwxL4GM",
    isEnglish: true,
    hasAcknowledgments: true,
    acknowledgmentsText:
      "We thank all study participants, in particular the low-vision runners who participated in our study. We appreciate members of the HCI Lab in Hokkaido University for their feedback. This work was supported by JSPS KAKENHI Grant Numbers JP22J21419, JST MIRAI JP24351006, JP24K00192, and the JSPS Research Fellowship for Young Scientists (DC2).",
  },

  acd: {
    id: "V9cscw106",
    title:
      "Audio Comment Display: Supporting Eyes-free Social Viewing Experience for People with Visual Impairments",
    materialURL: "/acd/",
    authors: "Yuki Abe, Kotaro Hara, and Daisuke Sakamoto",
    teaserCaption:
      "Auditory Comment Display (ACD) converts real-time textual comments into speech, enabling eyes-free social viewing for visually impaired users.",
    abstract:
      "Social viewing, where people watch video content together while sharing real-time comments, has become increasingly popular. However, current social viewing platforms primarily rely on visual text displays, creating barriers for people with visual impairments. We present Audio Comment Display (ACD), a system that converts real-time textual comments into audio to support eyes-free social viewing experiences. Through interviews with 8 visually impaired participants and a comparative study, we demonstrate how ACD enables inclusive participation in social viewing activities.",
    conference_publicationID: "V9cscw106",
    isEnglish: true,
    hasAcknowledgments: true,
    acknowledgmentsText:
      "We thank all participants in our studies. This work was supported by JSPS KAKENHI and other funding sources.",
  },

  handheldHMD: {
    id: "handheldHMD24",
    title:
      "Handheld-style HMD: Exploring a VR Interface for Onsite Exhibition Environments",
    materialURL: "/handheldHMD/",
    authors: "Yuki Abe, Yutaro Suzuki, Kotaro Hara, and Daisuke Sakamoto",
    teaserCaption:
      "A handheld-style HMD interface that allows visitors to experience VR content in museum and exhibition settings while maintaining awareness of their physical environment.",
    abstract:
      "Virtual Reality (VR) technology offers immersive experiences that can enhance museum and exhibition visits. However, traditional head-mounted displays (HMDs) can isolate users from their physical environment and companions. We explore a handheld-style HMD interface that allows visitors to selectively engage with VR content while maintaining situational awareness. Our design enables seamless transitions between virtual and physical experiences, supporting both individual exploration and social interaction in exhibition contexts.",
    conference_publicationID: "handheldHMD24",
    isEnglish: true,
    hasAcknowledgments: true,
    acknowledgmentsText:
      "We thank the exhibition organizers and all participants. This work was supported by various research grants.",
  },
};
