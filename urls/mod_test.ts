import type { Url } from "./mod.ts";

const _: Url.Static.New = "http://google.com";
const __: Url.Static.New = "http://google.tech";
const ___: Url.Static.New = "ttp://foo.m.tech";
const ____: Url.Static.New = "ttp://foo.m.tech/hello";

const _____: Url.Static.New<{
  protocol: "http";
  topDomain: "com";
}> = "http://google.com";

const ______: Url.Static.New<{
  protocol: "https";
  topDomain: "com";
}> = "https://google.com";

const _______a: Url.Static.New<{
  protocol: "http";
  domain: "boi";
  topDomain: "com";
  path: "/hello?world" | "/";
}> = "http://boi.com/hello?world";

const _______b: Url.Static.New<{
  protocol: "http";
  domain: "boi";
  topDomain: "com";
  path: "/hello?world" | "/";
}> = "http://boi.com/";
