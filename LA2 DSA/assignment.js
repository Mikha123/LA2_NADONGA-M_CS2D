// Declare variables and constants for each persona
const student = {
  firstName: "Juan",
  middleName: "Gamos",
  lastName: "Dela Cruz",
  birthdate: "January 1, 2001",
  birthplace: "San Jose, Candon City, Philippines, 2710",
  address: "Barangay San Jose, Candon City, Philippines, 2710",
  course: "BSCS",
  year: "3rd Year",
  dreamJob: "Software Engineer"
};

const classmate1 = {
  firstName: "Leonore",
  middleName: "Borbon",
  lastName: "Ortiz",
  birthdate: "October 25,2001",
  birthplace: "Langlanca, Candon City, Philippines, 2710",
  address: "Barangay Langlangca, Candon City, Philippines,2710",
  course: "BSCS",
  year: "2nd Year",
  dreamJob: "Web Developer"
};

const classmate2 = {
  firstName: "Sofia",
  middleName: "Gracias",
  lastName: "Ortiz",
  birthdate: "March 3, 2001",
  birthplace: "Tablac,Candon City, Philippines, 2710",
  address: "Barangay Tablac, Candon City, Philippines,2710",
  course: "BSIT",
  year: "1st Year",
  dreamJob: "Game Developer"
};

// Function to print persona information using string concatenation and formatting
function printPersonaInfo(persona) {
  const sentence = `My name is ${persona.firstName} ${persona.middleName} ${persona.lastName}, born on ${persona.birthdate} in ${persona.birthplace}. I live at ${persona.address} and I'm a ${persona.year} student taking up ${persona.course}. My dream job after graduation is to become a ${persona.dreamJob}.`;
  console.log(sentence);
}

// Print persona information for each student
printPersonaInfo(student);
printPersonaInfo(classmate1);
printPersonaInfo(classmate2);