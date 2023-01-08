import dayjs from "dayjs";
const birthday = dayjs("2006-08-16");
const age = dayjs().diff(birthday, "years");
document.querySelector<HTMLSpanElement>("#age")!.innerHTML = age.toString();

export {};
