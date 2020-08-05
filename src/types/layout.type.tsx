export interface layoutTemplate {
  collapsed: boolean;
  broken: boolean;
}

export interface actionType {
  type: string;
  payload: Object;
}

export interface modalDialog {
  title: string,
  content: string
}