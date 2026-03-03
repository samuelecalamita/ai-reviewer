import { Component, uiElement, uiElements } from "@kluntje/core";

export class FilterFormSingleAsArrayComponent extends Component {
  @uiElement(".filter-form__item")
  public items!: HTMLDivElement[];
}

export class FilterFormMultipleAsSingleComponent extends Component {
  @uiElements(".filter-form__item")
  public item!: HTMLDivElement;
}

export class FilterFormInputTypedAsButtonComponent extends Component {
  @uiElement(".filter-form__search")
  public inputField!: HTMLButtonElement;
}

export class FilterFormComponent extends Component {
  @uiElement(".filter-form__search")
  public inputField!: HTMLInputElement;

  @uiElements(".filter-form__item")
  public items!: HTMLDivElement[];
}
