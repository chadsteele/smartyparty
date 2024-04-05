export function padZero(value: number) {
	return value < 10 ? `0${value}` : value
}

export function formatDateToYYYYMMDDHHMMSS(date = new Date()) {
	const year = date.getFullYear()
	const month = padZero(date.getMonth() + 1)
	const day = padZero(date.getDate())
	const hours = padZero(date.getHours())
	const minutes = padZero(date.getMinutes())
	const seconds = padZero(date.getSeconds())

	return `${year}${month}${day}${hours}${minutes}${seconds}`
}

export function timestamp(date = new Date()) {
	return formatDateToYYYYMMDDHHMMSS(date)
}
