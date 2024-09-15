function getStudents() {
  const url = 'https://api.tech-global-training.com/students';

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); 
}

getStudents();

async function getInstructors() {
  const url = 'https://api.tech-global-training.com/instructors';

  try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  }
  catch(err) {
    console.log(err);
  }
}

getInstructors();