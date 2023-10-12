import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@material/web/textfield/filled-text-field.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-tonal-button.js";

import { data } from "./data";

import "./Components/my-input";

interface ParameterOptions {
    id: number;
    value: string;
}

interface FormParameters {
    name: string;
    placeholder: string;
    input_type: string;
    default_value: string;
    parameter_options?: ParameterOptions[];
}

@customElement("my-form")
export class MyElement extends LitElement {
    FormInputParameters: FormParameters[] = data.parameters;

    @property({ type: String })
    fieldNameLabel = "Username";

    @property({ type: String })
    credentialLabel = "Password";

    // private FormInputParameterRender(parameter: FormParameters) {
    //     return html` <md-filled-text-field label=${parameter.name} type="email">
    //     </md-filled-text-field>`;
    // }

    render() {
        return html`
            <div class="card">
                ${this.FormInputParameters.map(
                    (parameter) => html`
                        <my-input
                            name=${parameter.name}
                            placeholder=${parameter.placeholder}
                            type=${parameter.input_type}
                            value=${parameter.default_value}
                            .parameter_options=${parameter.parameter_options || []}
                        ></my-input>
                    `
                )}

                <div class="buttons-container">
                    <md-outlined-button>Clear</md-outlined-button>
                    <md-filled-tonal-button>
                        Send
                        <svg slot="icon" viewBox="0 0 48 48">
                            <path
                                d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"
                            />
                        </svg>
                    </md-filled-tonal-button>
                </div>
            </div>
        `;
    }
    static styles = css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: var(--md-sys-color-background);
            margin: 0;
            padding: 0;
        }
        svg {
            width: 24px;
            height: 24px;
        }
        md-outlined-button {
            width: 100px;
        }
        .card {
            width: 400px;
            height: 400px;
            padding: 16px;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            border: 1px solid var(--md-sys-color-outline);
            gap: 3rem;
        }
        .buttons-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 1rem;
            /* max-width: 200px; */
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "my-form": MyElement;
    }
}
