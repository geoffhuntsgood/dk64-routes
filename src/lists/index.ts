import type { Route } from "../classes/Route";
import { n64CastleKongs101 } from "./n64/101/n64CastleKongs101";
import { n64Any5Kong } from "./n64/any/n64Any5Kong";
import { n64Any5KongWarpless } from "./n64/any/n64Any5KongWarpless";
import { n64NLE801IQ } from "./n64/nle/n64NLE801IQ";
import { n64NLEAdvanced40BP } from "./n64/nle/n64NLEAdvanced40BP";
import { n64NLEHelmEscape } from "./n64/nle/n64NLEHelmEscape";
import { n64NLEHelmEscapeAdvanced } from "./n64/nle/n64NLEHelmEscapeAdvanced";
import { n64NLEIntermediate } from "./n64/nle/n64NLEIntermediate";
import { advanced101 } from "./universal/101/advanced101";
import { beginner101 } from "./universal/101/beginner101";
import { expert101 } from "./universal/101/expert101";
import { intermediate101 } from "./universal/101/intermediate101";
import { any1Kong2014 } from "./universal/any/any1Kong2014";
import { any1Kong2015 } from "./universal/any/any1Kong2015";
import { anyBeginner } from "./universal/any/anyBeginner";
import { anyAllKeys } from "./universal/ces/anyAllKeys";
import { anyNoISG } from "./universal/ces/anyNoISG";
import { glitchless101 } from "./universal/ces/glitchless101";
import { glitchlessAny } from "./universal/ces/glitchlessAny";
import { n64100GBsMoveless } from "./n64/ces/n64100GBsMoveless";
import { ta101 } from "./universal/ces/ta101";
import { taNLE } from "./universal/ces/taNLE";
import { nleBeginner } from "./universal/nle/nleBeginner";
import { glitchlessAllCollectables } from "./universal/other/glitchlessAllCollectables";
import { phantomBanana } from "./universal/other/phantomBanana";
import { vcCastleKongs101 } from "./vc/101/vcCastleKongs101";
import { vcAny5Kong } from "./vc/any/vcAny5Kong";
import { lowPercent } from "./vc/ces/lowPercent";
import { lowPercentBeginner } from "./vc/ces/lowPercentBeginner";
import { vcNLEAdvanced40BP } from "./vc/nle/vcNLEAdvanced40BP";
import { vcNLEHelmEscape } from "./vc/nle/vcNLEHelmEscape";
import { vcNLEIntermediate } from "./vc/nle/vcNLEIntermediate";
import { trueLowPercent } from "./universal/other/trueLowPercent";
import { vc100GBsMoveless } from "./vc/ces/vc100GBsMoveless";
import { beaverPercent } from "./universal/other/beaverPercent";

export const n64AnyList: Route[] = [
  anyBeginner,
  n64Any5Kong,
  n64Any5KongWarpless,
  any1Kong2014,
  any1Kong2015
];

export const vcAnyList: Route[] = [
  anyBeginner,
  vcAny5Kong,
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

export const vcNLEList: Route[] = [
  nleBeginner,
  vcNLEIntermediate,
  vcNLEAdvanced40BP,
  vcNLEHelmEscape
];

export const n64101List: Route[] = [
  beginner101,
  intermediate101,
  advanced101,
  expert101,
  n64CastleKongs101
];

export const vc101List: Route[] = [
  beginner101,
  intermediate101,
  advanced101,
  expert101,
  vcCastleKongs101
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

export const n64OtherList: Route[] = [
  glitchlessAllCollectables,
  phantomBanana,
  trueLowPercent,
  beaverPercent
];

export const vcOtherList: Route[] = [
  glitchlessAllCollectables,
  phantomBanana,
  trueLowPercent,
  beaverPercent
];
