import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/radio/radio.js";
import "@material/web/checkbox/checkbox.js";

interface ParameterOptions {
    id: number;
    value: string;
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
        .input-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
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
                      ${this.parameter_options.map(
                          (option) => html`
                              <md-radio name=${this.name} value=${option.value}
                                  >${option.value}</md-radio
                              >
                          `
                      )}
                  `
                : ""}
            ${this.types[this.type as keyof typeof this.types] === "checkbox"
                ? html`
                      ${this.parameter_options.map(
                          (option) => html`
                              <md-checkbox
                                  id=${option.value}
                                  touch-target="wrapper"
                              ></md-checkbox>
                              <label for=${option.value}>${option.value}</label>
                          `
                      )}
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
