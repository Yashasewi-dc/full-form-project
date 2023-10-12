import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/radio/radio.js";
import "@material/web/checkbox/checkbox.js";

interface ParameterOptions {
    id: number;
    value: string;
}
export interface StoryKnobs {
    disabled: boolean;
}

@customElement("my-input")
export class MyInput extends LitElement {
    types = {
        TEXTBOX: "text",
        SINGLE_SELECT: "radio",
        MULTI_SELECT: "checkbox",
    };
    @property({ type: String })
    name = "Username";

    @property({ type: String })
    placeholder = "Username";

    @property({ type: String })
    type = "text";
    @property({ type: String })
    value = "";
    @property({ type: Array })
    parameter_options: ParameterOptions[] = [];

    static styles = css`
        .column {
            display: flex;
            /* flex-direction: column; */
            gap: 1rem;
        }

        .radio-label {
            display: flex;
            align-items: center;
        }

        label {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
        }
    `;

    render() {
        return html`
            ${this.types[this.type as keyof typeof this.types] === "text"
                ? html`
                      <md-filled-text-field label=${this.name} type="text">
                      </md-filled-text-field>
                  `
                : ""}
            ${this.types[this.type as keyof typeof this.types] === "radio"
                ? html`
                      <div
                          role="radiogroup"
                          aria-label="Animals"
                          class="column"
                      >
                          ${this.parameter_options.map(
                              (option) => html`
                                  <div class="radio-label">
                                      <md-radio
                                          aria-label="Birds"
                                          id="birds-radio"
                                          name="with-labels"
                                          touch-target="wrapper"
                                          checked
                                      >
                                      </md-radio>
                                      <label for="birds-radio"
                                          >${option.value}</label
                                      >
                                  </div>
                              `
                          )}
                      </div>
                  `
                : ""}
            ${this.types[this.type as keyof typeof this.types] === "checkbox"
                ? html`
                      <div class="column" role="group" aria-label="Animals">
                          ${this.parameter_options.map(
                              (option) => html`
                                  <label>
                                      <md-checkbox
                                          checked
                                          aria-label=${option.value}
                                          touch-target="wrapper"
                                      ></md-checkbox>
                                      ${option.value}
                                  </label>
                              `
                          )}
                      </div>
                  `
                : ""}
            <!-- <button>Click me</button> -->
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "my-input": MyInput;
    }
}
