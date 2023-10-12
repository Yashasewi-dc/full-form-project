import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
// import { createComponent } from "@lit-labs/react";

@customElement("my-button")
export class MyButton extends LitElement {
    @property({ type: String })
    color: string = "red";
    @property({ type: String })
    text: string = "Click Me";

    static styles = css`
        button {
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            width: 5rem;
            height: 5rem;
        }
    `;

    render() {
        return html`
            <button style="background-color: ${this.color}">
                ${this.text}
            </button>
            <button
                style="background-color: aqua"
                @click=${this.__dispatchEvent}
            >
                dispatchCustomEvent
            </button>
        `;
    }

    private __dispatchEvent() {
        const options = {
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent("myevent", options));
        console.log("event dispatched");
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "my-button": MyButton;
    }
}
