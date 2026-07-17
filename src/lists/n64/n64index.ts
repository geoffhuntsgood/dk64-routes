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
import { n64CastleKongs101 } from "./101/n64CastleKongs101";
import { n64Any5Kong } from "./any/n64Any5Kong";
import { n64Any5KongWarpless } from "./any/n64Any5KongWarpless";
import { n64100GBsMoveless } from "./ces/n64100GBsMoveless";
import { n64NLE801IQ } from "./nle/n64NLE801IQ";
import { n64NLEAdvanced40BP } from "./nle/n64NLEAdvanced40BP";
import { n64NLEHelmEscape } from "./nle/n64NLEHelmEscape";
import { n64NLEHelmEscapeAdvanced } from "./nle/n64NLEHelmEscapeAdvanced";
import { n64NLEIntermediate } from "./nle/n64NLEIntermediate";

export const n64AnyList: Route[] = [
  anyBeginner,
  n64Any5Kong,
  n64Any5KongWarpless,
  any1Kong2014,
  any1Kong2015
];

export const n64NLEList: Route[] = [
  nleBeginner,
  n64NLEIntermediate,
  n64NLEAdvanced40BP,
  n64NLEHelmEscape,
  n64NLEHelmEscapeAdvanced,
  n64NLE801IQ
];

export const n64101List: Route[] = [
  beginner101,
  intermediate101,
  advanced101,
  expert101,
  n64CastleKongs101
];

export const n64CEList: Route[] = [
  anyNoISG,
  anyAllKeys,
  n64100GBsMoveless,
  ta101,
  taNLE,
  glitchlessAny,
  glitchless101
];

export const n64OtherList: Route[] = [
  glitchlessAllCollectables,
  phantomBanana,
  trueLowPercent,
  beaverPercent
];
