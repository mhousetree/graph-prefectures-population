import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PrefectureCheckboxes from "@/components/organisms/PrefectureCheckboxes.vue";

describe("PrefectureCheckboxes", () => {
  it("set props properly", () => {
    const wrapper = mount(PrefectureCheckboxes, {
      props: {
        prefNameByPrefCode: new Map([[1, "北海道"]]),
      },
    });

    expect(wrapper.props("prefNameByPrefCode")).toEqual(
      new Map([[1, "北海道"]])
    );
  });
});
