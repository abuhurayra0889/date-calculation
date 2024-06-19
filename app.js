const createdAt = new Date("2024-03-01T20:11:20.021+00:00");
const now = new Date();

const difference = now.getTime() - createdAt.getTime();
const seconds = Math.floor(difference / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);
const months = Math.floor(days / 30);

let result; 

console.log(`Days: ${days}`);
console.log(`Hours: ${hours % 24}`);
console.log(`Minutes: ${minutes % 60}`);
console.log(`Seconds: ${seconds % 60}`);
console.log(`Months: ${months}`);

if(months){
    result = `${months} ${months > 1 ? "Months" : "Month"} ago`
}else if (days){
    result = `${days} days ago`
}else if (hours){
    result = `${hours} hours ago`
}else if(minutes) {
    result = `${minutes} minutes ago`
}else if(seconds) {
    result = `${seconds} seconds ago`
}else {
    result = 'nothing'
}

console.log("RESULT:", result);

