export default function formatDate(dateStr){

// Parse the date string
const dateObj = new Date(dateStr);

// Get the components
const day = dateObj.getUTCDate();
const month = dateObj.toLocaleString('default', { month: 'long' });
const year = dateObj.getUTCFullYear();

// Format the date into the desired format
const formattedDate = `${day} ${month}, ${year}`;

return formattedDate.toString()
}