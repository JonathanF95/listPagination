/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelector('.student-list');
const studentRecords = document.querySelectorAll('.student-item');
const body = document.querySelector('body');
let pageNumber = 1;
const totalPages = Math.ceil(studentRecords.length / 10);
const maxPerPage = 10;



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
function hideAll (page){
  for(let i = 0; i < studentRecords.length; i++){
    if(i < (page * maxPerPage) && i >= ((page - 1) * maxPerPage)){
      studentRecords[i].style.display = 'block';
    }else{
      studentRecords[i].style.display = 'none';
    }
  }
}

hideAll(2);
// Create and append the pagination links - Creating a function that can do this is a good approach
function paglinks(){
  const pag = document.createElement('div');
  body.appendChild(pag);
  const ul = document.createElement('ul');
  pag.appendChild(ul);
  for(let i = 0; i < totalPages; i++){
    if(i < totalPages){
      const li = document.createElement('li');
      ul.appendChild(li);
      const link = document.createElement('a');
      link.textContent = pageNumber;
      li.appendChild(link);
      pageNumber++;
    }
  }


}
paglinks();



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
