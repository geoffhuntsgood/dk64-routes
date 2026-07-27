import type { Route } from "../classes";
import {
  n64101List,
  n64AnyList,
  n64CEList,
  n64NLEList,
  n64OtherList
} from "../lists/n64/n64index";
import {
  vc101List,
  vcAnyList,
  vcCEList,
  vcNLEList,
  vcOtherList
} from "../lists/vc/vcIndex";
import type { Category, Version } from "./types";

export const getRouteList = (version: Version, category: Category): Route[] => {
  switch (category) {
    case "ANY":
      return version === "N64" ? n64AnyList : vcAnyList;
    case "NLE":
      return version === "N64" ? n64NLEList : vcNLEList;
    case "101":
      return version === "N64" ? n64101List : vc101List;
    case "CES":
      return version === "N64" ? n64CEList : vcCEList;
    case "EXTRA":
      return version === "N64" ? n64OtherList : vcOtherList;
    default:
      return version === "N64" ? n64AnyList : vcAnyList;
  }
};
