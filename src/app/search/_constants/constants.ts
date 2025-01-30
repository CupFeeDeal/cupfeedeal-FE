import { Coordinates } from "src/types/search";

// map
export const INITIAL_CENTER: Coordinates = [37.56717167, 126.931102];
export const INITIAL_ZOOM = 17;
export const MAP_KEY = "/serach";

// style
export const LABEL_STYLE = `Body_2_bold text-Dark_Blue min-w-[49px]`;
export const VALUE_STYLE = `Body_2_med text-Grey-800`;
export const HEART_STYLE = `w-5 h-5 flex justify-center items-center cursor-pointer rounded-[0.625rem] shadow-[0_0_5px_0_rgba(153,153,159,0.26)]`;

export const DEFAULT_BTN_STYLE = `w-11 h-11 flex justify-center items-center bg-white rounded-[1.375rem] shadow-[0_0_11px_0_rgba(153,153,159,0.26)] cursor-pointer`;
export const CLICKED_BTN_STYLE = `w-11 h-11 flex justify-center items-center bg-Main_Blue rounded-[1.375rem] shadow-[0_0_11px_0_rgba(153,153,159,0.26)] cursor-pointer`;
