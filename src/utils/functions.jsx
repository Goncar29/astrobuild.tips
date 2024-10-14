export function fecha(date) {
    const newDate = new Date(date).toLocaleDateString('es-UY', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}