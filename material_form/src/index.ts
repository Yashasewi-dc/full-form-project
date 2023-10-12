import React from "react";

import { createComponent } from "@lit/react";

import { MyElement } from "./my-element.js";

export const MyElementComponent = createComponent({
    tagName: "my-form",
    elementClass: MyElement,
    react: React,
});
