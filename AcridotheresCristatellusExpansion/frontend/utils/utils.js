export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export function maxMinYears(ACYears) {
    return [ACYears[0], ACYears[ACYears.length -1]]
}