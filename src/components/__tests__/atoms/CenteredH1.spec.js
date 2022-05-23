import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CenteredH1 from "@/components/atoms/CenteredH1.vue";

describe("CenteredH1", () => {
  it("content renders properly", () => {
    const wrapper = mount(CenteredH1, {
      props: {
        content: "Title",
      },
    });

    expect(wrapper.html()).toContain("Title");
  });
});
