import { describe, expect, test } from "vitest";
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

describe("routeApi tests", () => {
  describe("N64", () => {
    test("ANY", () => {
      expect(getRouteList("N64", "any")).toEqual(n64AnyList);
    });

    test("NLE", () => {
      expect(getRouteList("N64", "nle")).toEqual(n64NLEList);
    });

    test("101", () => {
      expect(getRouteList("N64", "101")).toEqual(n64101List);
    });

    test("CES", () => {
      expect(getRouteList("N64", "ces")).toEqual(n64CEList);
    });

    test("OTHER", () => {
      expect(getRouteList("N64", "other")).toEqual(n64OtherList);
    });
  });

  describe("WII U/NSO", () => {
    test("ANY", () => {
      expect(getRouteList("WII U/NSO", "any")).toEqual(vcAnyList);
    });

    test("NLE", () => {
      expect(getRouteList("WII U/NSO", "nle")).toEqual(vcNLEList);
    });

    test("101", () => {
      expect(getRouteList("WII U/NSO", "101")).toEqual(vc101List);
    });

    test("CES", () => {
      expect(getRouteList("WII U/NSO", "ces")).toEqual(vcCEList);
    });

    test("OTHER", () => {
      expect(getRouteList("WII U/NSO", "other")).toEqual(vcOtherList);
    });
  });
});
