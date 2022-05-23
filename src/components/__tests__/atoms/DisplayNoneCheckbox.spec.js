import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DisplayNoneCheckbox from "@/components/atoms/DisplayNoneCheckbox.vue";

describe("DisplayNoneCheckbox", () => {
  it("check input attributes", () => {
    const wrapper = mount(DisplayNoneCheckbox, {
      props: {
        checkboxId: "1",
        checkboxValue: "2",
      },
    });

    expect(wrapper.attributes("id")).toBe("1");
    expect(wrapper.attributes("value")).toBe("2");
  });
  it("check change event", async () => {
    const wrapper = mount(DisplayNoneCheckbox, {
      props: {
        checkboxId: "1",
        checkboxValue: "2",
      },
    });
    const checkboxInput = wrapper.find("input[type='checkbox']");

    await checkboxInput.setChecked();

    expect(checkboxInput.element.checked).toBeTruthy;
  });
  it("check emit event", () => {
    const wrapper = mount(DisplayNoneCheckbox, {
      props: {
        checkboxId: "1",
        checkboxValue: "2",
      },
    });
    const checkboxInput = wrapper.find("input[type='checkbox']");

    checkboxInput.trigger("change");

    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted().change).toHaveLength(1);
    expect(wrapper.emitted().change[0]).toEqual(["2"]);
  });
});
