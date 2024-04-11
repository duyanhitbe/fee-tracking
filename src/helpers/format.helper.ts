export const toVnd = (num: number) => num.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});

export const toShortDate = (date: Date) => date.toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: '2-digit'
});

export const toLongDate = (date: Date) => date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit'
});

export const getCurrencyColor = (num: number) => {
    if (num < 0) {
        return "text-red-500";
    }
    if (num > 0) {
        return "text-green-500";
    }
    if (num === 0) {
        return "text-gray-300"
    }
    return "text-red-500";
}

export const getCurrencyText = (num: number) => {
    if (num > 0) {
        return "+" + toVnd(num);
    }
    return toVnd(num)
}