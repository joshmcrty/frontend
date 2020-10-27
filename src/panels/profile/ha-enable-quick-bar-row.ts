import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from "lit-element";
import { fireEvent } from "../../common/dom/fire_event";
import "../../components/ha-switch";
import type { HaSwitch } from "../../components/ha-switch";
import type { HomeAssistant } from "../../types";
import "../../components/ha-settings-row";

@customElement("ha-enable-quick-bar-row")
class HaEnableQuickBarRow extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property() public narrow!: boolean;

  protected render(): TemplateResult {
    return html`
      <ha-settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${this.hass.localize("ui.panel.profile.enable_quick_bar.header")}
        </span>
        <span slot="description">
          ${this.hass.localize("ui.panel.profile.enable_quick_bar.description")}
        </span>
        <ha-switch
          .checked=${this.hass.enableQuickBar}
          @change=${this._checkedChanged}
        ></ha-switch>
      </ha-settings-row>
    `;
  }

  private async _checkedChanged(ev: Event) {
    const enabled = (ev.target as HaSwitch).checked;
    if (enabled === this.hass.enableQuickBar) {
      return;
    }

    fireEvent(this, "hass-enable-quick-bar", enabled);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-enable-quick-bar-row": HaEnableQuickBarRow;
  }
}
