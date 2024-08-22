export function pretty_date(date_str) {
  return new Date(date_str).toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}

export function pretty_date_with_time(date_str) {
  let date = new Date(date_str);
  let pretty_date = date.toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  let pretty_time = date.toLocaleTimeString("tr-TR", {
    hours: "2-digit",
    minutes: "2-digit"
  });

  return `${pretty_date} ${pretty_time}`
}
