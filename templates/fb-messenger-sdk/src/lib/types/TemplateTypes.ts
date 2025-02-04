export interface GenericTemplatePayload {
  template_type: "generic";
  elements: GenericTemplateElement[];
}

interface GenericTemplateElement {
  title: string;
  image_url: string;
  subtitle?: string;
  default_action?: {
    type: string;
    url: string;
    messenger_extensions?: boolean;
    webview_height_ratio?: string;
    fallback_url?: string;
  };
  buttons?: {
    type: string;
    title: string;
    payload?: string;
    url?: string;
  }[];
}
