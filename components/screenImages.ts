import type { StaticImageData } from "next/image";
import phoneTopics from "@/public/images/screens/phone-topics.png";
import phoneTranslate from "@/public/images/screens/phone-translate.png";
import phoneXp from "@/public/images/screens/phone-xp.png";
import phoneCharacterEditor from "@/public/images/screens/phone-character-editor.png";
import phoneTeamStandings from "@/public/images/screens/phone-team-standings.png";

export type ScreenAsset = {
  src: StaticImageData;
  /** Extra height when PNG has more letterbox (e.g. phone-topics) */
  displayHeightSide?: number;
  displayHeightCenter?: number;
};

export const screens = {
  topics: {
    src: phoneTopics,
    displayHeightSide: 310,
    displayHeightCenter: 350,
  },
  translate: {
    src: phoneTranslate,
    displayHeightSide: 280,
    displayHeightCenter: 320,
  },
  xp: {
    src: phoneXp,
    displayHeightSide: 280,
    displayHeightCenter: 320,
  },
  characterEditor: { src: phoneCharacterEditor },
  teamStandings: { src: phoneTeamStandings },
} as const satisfies Record<string, ScreenAsset>;
