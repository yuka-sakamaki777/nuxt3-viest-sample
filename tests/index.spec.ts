import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloMessage from "../components/HelloMessage.vue";
import CountButton from "../components/CountButton.vue"

describe("HelloMessage", () => {
  test("メッセージが表示される", () => {
    const wrapper = mount(HelloMessage, {
      props: {
        name: "World",
      },
    });
    expect(wrapper.text()).toContain("Hello, World!");
  });
});

describe("CountButton", () => {
  test("クリックカウンタが表示される", async () => {
    const wrapper = mount(CountButton, {
      props: {
        clickCount: 1,
        clickHandler: () => {}
      }
    })
    expect(wrapper.text()).toContain("1 clicksClick me")

    const button = wrapper.find("button")
    await button.trigger("click")
    expect(wrapper.text()).toContain("1 clicksClick me")
  })
})
