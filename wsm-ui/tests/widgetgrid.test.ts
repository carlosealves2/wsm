import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import WidgetGrid from "../components/WidgetGrid/WidgetGrid.vue";
import type {Widget} from "~/components/models/widget";



describe("WidgetGrid can be instantiated", () => {
    it('should correctly mounted', () => {
        const wrapper = mount(WidgetGrid, {
            props: {
                widgets: [
                    {
                        id: 1,
                        title: "Widget 1 -Test",
                        grid: {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 1
                        }
                    }
                ] as Widget[]
            }
        });
        expect(wrapper.html()).contains("Widget 1 -Test");
    });
});