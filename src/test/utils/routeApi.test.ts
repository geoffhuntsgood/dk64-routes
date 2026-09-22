import {
  n64101List,
  n64AnyList,
  n64CEList,
  n64NLEList,
  n64OtherList
} from "../../lists/n64/n64index";
import {
  vc101List,
  vcAnyList,
  vcCEList,
  vcNLEList,
  vcOtherList
} from "../../lists/vc/vcIndex";
import { getRouteList } from "../../utils/routeApi";
import type { Category } from "../../utils/types";

describe("routeApi tests", () => {
  describe("N64", () => {
    test("ANY", () => {
      expect(getRouteList("N64", "ANY")).toEqual(n64AnyList);
    });

    test("NLE", () => {
      expect(getRouteList("N64", "NLE")).toEqual(n64NLEList);
    });

    test("101", () => {
      expect(getRouteList("N64", "101")).toEqual(n64101List);
    });

    test("CES", () => {
      expect(getRouteList("N64", "CES")).toEqual(n64CEList);
    });

    test("OTHER", () => {
      expect(getRouteList("N64", "EXTRA")).toEqual(n64OtherList);
    });

    test("Incorrect", () => {
      expect(getRouteList("N64", "wrong" as Category)).toEqual(n64AnyList);
    });
  });

  describe("WII U/NSO", () => {
    test("ANY", () => {
      expect(getRouteList("WII U/NSO", "ANY")).toEqual(vcAnyList);
    });

    test("NLE", () => {
      expect(getRouteList("WII U/NSO", "NLE")).toEqual(vcNLEList);
    });

    test("101", () => {
      expect(getRouteList("WII U/NSO", "101")).toEqual(vc101List);
    });

    test("CES", () => {
      expect(getRouteList("WII U/NSO", "CES")).toEqual(vcCEList);
    });

    test("OTHER", () => {
      expect(getRouteList("WII U/NSO", "EXTRA")).toEqual(vcOtherList);
    });

    test("Incorrect", () => {
      expect(getRouteList("WII U/NSO", "wrong" as Category)).toEqual(vcAnyList);
    });
  });
});
