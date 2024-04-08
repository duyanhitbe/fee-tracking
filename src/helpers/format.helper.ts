export const toVnd = (num: number) => num.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});

export const toShortDate = (date: Date) => date.toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: '2-digit'
});