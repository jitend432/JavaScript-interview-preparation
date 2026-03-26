 const datee = "2024-12-06T18:06:36";
 const formatedTime = datee.split("T")[0];
 console.log(formatedTime);

 const dat = new Date(datee);
 const formattedDate = dat.toISOString().split("T")[0];
 console.log(formattedDate);

const d = new Date("2024-12-06T18:06:36");
const day = String(d.getDate()).padStart(2,"0");
const month = String(d.getMonth()+1).padStart(2,"0");
const year = d.getFullYear();
console.log(`${day}-${month}-${year}`);

//new Intl.DateTimeFormat("en-GB").format(new Date(d));

const formatted = new Intl.DateTimeFormat("en-GB")
  .format(new Date(d))
  .replaceAll("/", "-");

console.log(formatted); // 06-12-2024


// import { format } from "date-fns";

// format(new Date(date), "dd-MM-yyyy");