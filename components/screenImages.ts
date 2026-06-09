import type { StaticImageData } from "next/image";
import phoneCharacterEditor from "@/public/images/screens/phone-character-editor.png";
import phoneTeamStandings from "@/public/images/screens/phone-team-standings.png";

export type ScreenAsset = {
  /** Direct public URL — no build-time image processing */
  src: StaticImageData | string;
  width: number;
  height: number;
  displayHeightSide?: number;
  displayHeightCenter?: number;
};

export const screens = {
  topics: {
    src: "/images/screens/phone-topics.png",
    width: 671,
    height: 1024,
    displayHeightSide: 420,
    displayHeightCenter: 500,
  },
  translate: {
    src: "/images/screens/phone-translate.png",
    width: 671,
    height: 1024,
    displayHeightSide: 420,
    displayHeightCenter: 500,
  },
  xp: {
    src: "/images/screens/phone-xp.png",
    width: 671,
    height: 1024,
    displayHeightSide: 420,
    displayHeightCenter: 500,
  },
  characterEditor: {
    src: phoneCharacterEditor,
    width: phoneCharacterEditor.width,
    height: phoneCharacterEditor.height,
  },
  teamStandings: {
    src: phoneTeamStandings,
    width: phoneTeamStandings.width,
    height: phoneTeamStandings.height,
  },
  teamRed: {
    src: "/images/screens/phone-team-red.png",
    width: 635,
    height: 968,
  },
  teamBlue: {
    src: "/images/screens/phone-team-blue.png",
    width: 635,
    height: 968,
  },
} as const satisfies Record<string, ScreenAsset>;
