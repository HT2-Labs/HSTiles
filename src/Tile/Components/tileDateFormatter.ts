import moment from "moment";

var lang = navigator.language;
moment.locale(lang);
export const tileDateFormatter = (date: string) => moment(date).format("L");

export default tileDateFormatter;
