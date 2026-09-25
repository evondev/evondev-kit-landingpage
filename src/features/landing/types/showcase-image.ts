export interface ShowcaseImage {
  src: string;
  width: number;
  height: number;
}

/** Ảnh của một mục showcase. `dark` chỉ có khi app nguồn có dark mode. */
export interface ShowcaseImageSet {
  light: ShowcaseImage;
  dark?: ShowcaseImage;
}
