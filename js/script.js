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
const header= document.querySelector('.header')

const paginationDiv=document.querySelector(".pagination")

const itemsPerPage=9;

function createSearch(){
   // Create Elements
   let searchLabel=document.createElement('label');
   let searchSpan=document.createElement('span');
   let searchInput=document.createElement('input');
   let searchButton=document.createElement('button')
   let searchImage=document.createElement('img')

   //Add Atributes snd properties

   searchLabel.setAttribute('for','search');
   searchLabel.className='student-search';
   searchSpan.innerText='Search by name';
   searchInput.setAttribute('id','search');
   searchInput.setAttribute('placeholder','Search by name');
   searchButton.type="button"; 
   searchImage.src="img/icn-search.svg";
   searchImage.alt="Search icon";  

 //Append elements of search bar
   header.appendChild(searchLabel);
   searchLabel.appendChild(searchSpan);
   searchLabel.appendChild(searchInput);
   searchLabel.append(searchButton);
   searchButton.appendChild(searchImage);
}


function searchForItem(){
   //Select the search input and get its value

   let searchInput=document.querySelector("#search");
   
   searchInput.addEventListener('keyup',(e)=>{
      let currentValue=searchInput.value.toLowerCase();
      
      //Select all the h3, i.e the students name      
      let students=document.querySelectorAll("h3");

      //loop through students
      students.forEach(student=>{
         if(student.textContent.toLowerCase().includes(currentValue)){
            student.parentNode.parentNode.style.display="block";
            numberOfStudents=document.querySelectorAll(".student-item");
            let results=[];
            results.push(student);
            

            
            let linkList=document.querySelector('.link-list')
            linkList.innerHtml='';
            let numberOfButtons=Math.ceil(results.length / itemsPerPage);
           
            for(let i=1; i<=numberOfButtons;i++){
               
              html=`<button class="active">${i}</button>`;
              linkList.innerHTML=html;               
            }
            
            
        
         
         
         


         }else{
            student.parentNode.parentNode.style.display='none';
           
            





            
         
           
         }

      });




   });


 ;
}

   

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
     
      
      if (i>=startIndex && i <EndIndex){
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

   }
      return studentUL;
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   //variable to define how many buttons to shwo based on how many elements there are in data
   let numberOfButtons=Math.ceil(list.length / itemsPerPage);

   let linkList=document.querySelector('.link-list');

   for (let i=1;i<=numberOfButtons;i++){


      const html=`<li>
      <button>${i}</button>  </li>`;
      //Adding the button before the end of the link list
      linkList.insertAdjacentHTML('beforeend',html);
   }
   // Adding class to the button
   linkList.querySelector('button').classList.add('active');

   //classList.add("active"); co

   linkList.addEventListener('click', (e)=>{
       const activeButton=linkList.querySelector('.active');  
          

       const buttonClicked=e.target.closest('button');       
       if (buttonClicked){
         //Selecting the student list again
         const studentUL=document.querySelector('.student-list');

         //Clearing the previous content from the student List
         studentUL.innerHTML='';

         //removing the active class list from the 1st button
         activeButton.classList.remove('active');

         //adding the class to the button that was clicked
         buttonClicked.classList.add('active');

         //Parsing the page number to an Integer for later use in the showPage function
         pageNum=parseInt(buttonClicked.textContent,10);
         showPage(data, pageNum);
       };


   });
}




// Call functions
createSearch();
searchForItem()
showPage(data,1);
addPagination(data);
