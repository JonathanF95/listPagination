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
const maxPerPage = 10
let pagBtn = document.querySelectorAll('.pagination ul li a');

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

hideAll(1);
// Create and append the pagination links - Creating a function that can do this is a good approach
function paglinks(){
  const pag = document.createElement('div');
  body.appendChild(pag);
  pag.classList.add('pagination');
  const ul = document.createElement('ul');
  pag.appendChild(ul);
// A loop that creates 'totalPages' amount of pagination buttons/links
  for(let i = 0; i < totalPages; i++){
    if(i < totalPages){
      const li = document.createElement('li');
      ul.appendChild(li);
// Adding the 'active' class to the firstElementChild of the first li created
      const first = ul.firstElementChild;
      const link = document.createElement('a');
      link.textContent = pageNumber;
      li.appendChild(link);
      const firstLink = first.firstElementChild;
      firstLink.classList.add('active');
      pageNumber++;
    }
    pagBtn = document.querySelectorAll('.pagination ul li a');

  }
}
paglinks();

// A function that allows manipulation of all the links created
function allLinks(){
  for(let i = 0; i < totalPages; i++){
    pagBtn[i].classList.remove('active');
  }
}

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
function changePage(){
  for(let i = 0; i < totalPages; i++){
    pagBtn[i].addEventListener('click', function(e){
      hideAll(e.target.textContent);
      allLinks();
      e.target.classList.add('active');
    })
  }
}
changePage();
