import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RootHeader from "@/components/organisms/RootHeader.vue";

describe("RootHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(RootHeader, { props: { title: "Title" } });
    expect(wrapper.text()).toContain("Title");
  });
});
