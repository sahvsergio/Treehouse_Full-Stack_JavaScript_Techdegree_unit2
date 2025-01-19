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
      student=data[i];
     
      
      if (i>=startIndex &&i<EndIndex){
         //create elements 
     
         let studentLi=document.createElement('li');
         let studentDetails=document.createElement('div');
         let joinedDetails=document.createElement('div');
         let img=document.createElement('img');
         let studentName=document.createElement('h3');
         let emailSpan=document.createElement('span');
         let dateJoinedSpan=document.createElement('span');
       
         

         //Add Classes 
         img.className="avatar";        
         studentLi.className='student-item cf';
         studentDetails.className='student-details';
         emailSpan.className='email';
         joinedDetails.className='joined-details';
         dateJoinedSpan.className='date';


         //Add info to fields to the image 
         img.src=data[i]['src']=student['picture']['large'];
         img.alt='Profile Picture'
         studentName.innerText=`${student['name']['title']} ${student['name']['first']} ${student['name']['last']}`;
         emailSpan.innerText=`${student['email']}`;
         dateJoinedSpan.innerText=`Date Joined: ${student['registered']['date']}`;



         //Append  elements to DOM 
         studentUL.appendChild(studentLi);
        
         studentLi.appendChild(studentDetails) ;
         studentLi.appendChild(joinedDetails);
         studentDetails.appendChild(img); 
         
         studentDetails.appendChild(studentName);
         studentDetails.appendChild(emailSpan);
         joinedDetails.appendChild(dateJoinedSpan);
      }
   studentUL.innerHtml='';
   }
      return studentUL;
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   //variable to 
   let numberOfButtons=Math.ceil(list.length / itemsPerPage);
   let linkList=document.querySelector('.link-list');
   for (let i=1;i<=numberOfButtons;i++){

      const html=`<li>
      <button>${i}</button>  </li>`;
      linkList.insertAdjacentHTML('beforeend',html);
   }
   linkButton=linkList.querySelector('button').classList.add('active');

   //classList.add("active"); co

   linkList.addEventListener('click', (e)=>{
       const activeButton=linkList.querySelector('.active');  
          

       const buttonClicked=e.target.closest('button');
       if (buttonClicked){
         activeButton.classList.remove('active');
         buttonClicked.classList.add('active');
         pageNum=parseInt(buttonClicked.textContent,10);
         console.log(typeof pageNum);
         showPage(data, pageNum);
       

       };


   });
}




// Call functions

showPage(data,3);
addPagination(data);
