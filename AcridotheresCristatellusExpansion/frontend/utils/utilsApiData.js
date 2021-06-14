export function maxMinYears(ACYears) {
    return [ACYears[0], ACYears[ACYears.length -1]]
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function startCounter(current_year, minYear) {
    let counter;
    if (!current_year) {
        counter = minYear;
    } else {
        counter = current_year;
    }
    return counter
} 
