import type { Route } from "../../classes/Route";
import { advanced101 } from "../universal/101/advanced101";
import { beginner101 } from "../universal/101/beginner101";
import { expert101 } from "../universal/101/expert101";
import { intermediate101 } from "../universal/101/intermediate101";
import { any1Kong2014 } from "../universal/any/any1Kong2014";
import { any1Kong2015 } from "../universal/any/any1Kong2015";
import { anyBeginner } from "../universal/any/anyBeginner";
import { anyAllKeys } from "../universal/ces/anyAllKeys";
import { anyNoISG } from "../universal/ces/anyNoISG";
import { glitchless101 } from "../universal/ces/glitchless101";
import { glitchlessAny } from "../universal/ces/glitchlessAny";
import { ta101 } from "../universal/ces/ta101";
import { taNLE } from "../universal/ces/taNLE";
import { nleBeginner } from "../universal/nle/nleBeginner";
import { beaverPercent } from "../universal/other/beaverPercent";
import { glitchlessAllCollectables } from "../universal/other/glitchlessAllCollectables";
import { phantomBanana } from "../universal/other/phantomBanana";
import { trueLowPercent } from "../universal/other/trueLowPercent";
import { vcCastleKongs101 } from "./101/vcCastleKongs101";
import { vcAny5Kong } from "./any/vcAny5Kong";
import { lowPercent } from "./ces/lowPercent";
import { lowPercentBeginner } from "./ces/lowPercentBeginner";
import { vc100GBsMoveless } from "./ces/vc100GBsMoveless";
import { vcNLEAdvanced40BP } from "./nle/vcNLEAdvanced40BP";
import { vcNLEHelmEscape } from "./nle/vcNLEHelmEscape";
import { vcNLEIntermediate } from "./nle/vcNLEIntermediate";

export const vcAnyList: Route[] = [
  anyBeginner,
  vcAny5Kong,
  any1Kong2014,
  any1Kong2015
];

export const vcNLEList: Route[] = [
  nleBeginner,
  vcNLEIntermediate,
  vcNLEAdvanced40BP,
  vcNLEHelmEscape
];

export const vc101List: Route[] = [
  beginner101,
  intermediate101,
  advanced101,
  expert101,
  vcCastleKongs101
];

export const vcCEList: Route[] = [
  lowPercentBeginner,
  lowPercent,
  anyNoISG,
  anyAllKeys,
  vc100GBsMoveless,
  ta101,
  taNLE,
  glitchlessAny,
  glitchless101
];

export const vcOtherList: Route[] = [
  glitchlessAllCollectables,
  phantomBanana,
  trueLowPercent,
  beaverPercent
];
