const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export function fecha(date) {
    const event = new Date(date);
    const newDate = event.toLocaleDateString('es-UY', options);
    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}