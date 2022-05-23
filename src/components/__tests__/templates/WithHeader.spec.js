import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import WithHeader from "@/components/templates/WithHeader.vue";

describe("WithHeader", () => {
  it("set props properly", () => {
    const wrapper = mount(WithHeader, {
      props: {
        title: "Title",
      },
    });

    expect(wrapper.props("title")).toBe("Title");
  });
  it("renders slot content", () => {
    const wrapper = mount(WithHeader, {
      props: {
        title: "Title",
      },
      slots: {
        default: "Default",
      },
    });
    const main = wrapper.get("main");

    expect(main.text()).toBe("Default");
  });
});
