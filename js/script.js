/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//mapping out all initial elements for later use
const header= document.querySelector('header')

const paginationDiv=document.querySelector(".pagination")
const linkList=document.querySelector('.link-list')
const itemsPerPage=9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){
   
   let startIndex=(page*itemsPerPage)-itemsPerPage;
   let EndIndex=page*itemsPerPage;
   const studentUL=document.querySelector('.student-list');
   studentUL.innerHtml='';

   for (let i=0; i<data.length; i++){
     
      
      if (i>=startIndex &&i<EndIndex){
         let studentLi=document.createElement('li');
         let studentDetails=document.createElement('div');
         studentLi.className='student-item cf';
         studentDetails.className='student-details';
         studentUL.appendChild(studentLi);
         studentLi.appendChild(studentDetails) ;
        
         
         

      }   


   
      

   }
   return studentUL;
}
  
      
      //

      //<li class="student-item cf">
      //    <div class="student-details">
      //      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
      //      <h3>Ethel Dean</h3>
      //      <span class="email">ethel.dean@example.com</span>
      //    </div>
      //    <div class="joined-details">
      //      <span class="date">Joined 12-15-2005</span>
      //    </div>
      //  </li>

 
   






/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/




// Call functions
showPage(data, 3);