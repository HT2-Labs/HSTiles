import moment from "moment";

var lang = navigator.language;
moment.locale(lang);
console.log(lang);
export const tileDateFormatter = (date: string) => moment(date).format("L");

export default tileDateFormatter;
