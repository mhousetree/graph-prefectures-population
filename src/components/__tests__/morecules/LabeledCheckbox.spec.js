import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LabeledCheckbox from "@/components/morecules/LabeledCheckbox.vue";

describe("LabeledCheckbox", () => {
  it("label renders properly", () => {
    const wrapper = mount(LabeledCheckbox, {
      props: {
        checkboxId: "1",
        checkboxValue: "2",
        labelValue: "北海道",
        color: "#ff0000",
      },
    });
    const labelSpan = wrapper.get("label").get("span");

    expect(labelSpan.text()).toBe("北海道");
  });

  it("set for attribute properly", () => {
    const wrapper = mount(LabeledCheckbox, {
      props: {
        checkboxId: "1",
        checkboxValue: "2",
        labelValue: "北海道",
        color: "#ff0000",
      },
    });
    const label = wrapper.get("label");

    expect(label.attributes("for")).toBe("1");
  });

  it("check emit event", () => {
    const wrapper = mount(LabeledCheckbox, {
      props: {
        checkboxId: "1",
        checkboxValue: "2",
        labelValue: "北海道",
        color: "#ff0000",
      },
    });
    const input = wrapper.get("input");

    input.trigger("change");

    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted().change).toHaveLength(1);
    expect(wrapper.emitted().change[0]).toEqual(["2"]);
  });
});
