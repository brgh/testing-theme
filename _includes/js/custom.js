/*

This script is to add event listeners to the checkboxes so that we can populate 
adjacent column with the timestamp. 

*/


const checkboxes = [];      // an empty array to hold the checkboxes in our table

// allCheckboxes gets us ALL the checkboxes including ones that come with the theme apparently 
const allCheckboxes = document.querySelectorAll('input[type=checkbox]')

// loop through the node list and push only the checkboxes in the table 
for (cb of allCheckboxes) {
    if (cb.id.startsWith("cb")) { // finding the relevant checkboxes by checking if starts with 'cb'; couldn't think of other way 
        checkboxes.push(cb); 
    }
}

// get the button element (id is reset)
const resetButton = document.getElementById("reset"); 

// add event listener to each checkbox element 
checkboxes.forEach((cb,i) => {
    cb.addEventListener("click", () => {
        getAdjTimestampCell(cb).innerText = getDateTime();
    })
});


resetButton?.addEventListener("click", () => {
    checkboxes.forEach((cb,i) => {
        cb.checked = false; 
        getAdjTimestampCell(cb).innerText = "";
    }); 
    
  })

function getDateTime() {
  return new Date().toJSON();
}

function getAdjTimestampCell(checkbox) {
    const id = `${checkbox.id}-value`;
    console.log(id);
    const timestampCell = document.getElementById(id); 
    return timestampCell;
}

// May or may not need the below code later 

// window.matchMedia('(prefers-color-scheme: dark)')
//       .addEventListener('change', event => {
//         console.log(event.matches);
//   if (event.matches) {
//       jtd.setTheme('dark');
//   } else {
//       jtd.setTheme('light');
//   }
// });
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     jtd.setTheme('dark');
// }

  // Check if dark mode is already set in localStorage when the page loads
  document.addEventListener('DOMContentLoaded', () => { // add event listener for DOMContentLoaded event
    
    // grab the colorTheme value from localStorage and store in storedTheme 
    // if null then return and do nothing (no theme selected so keep default)
    const storedTheme = localStorage.getItem('colorTheme'); 
    if (!storedTheme) {
      return;
    }
    console.log(`Stored theme: ${storedTheme}`); // for troubleshooting 

    // get the current theme and store in currentTheme 
    // if it is same as storedTheme then return and do nothing (keep default) 
    const currentTheme = jtd.getTheme(); 
    console.log(`Current theme: ${currentTheme}`); // for troubleshooting 
    console.log(storedTheme === currentTheme);     // for troubleshooting 
    if (storedTheme === currentTheme) {
      return;
    }
    
    // finally set the theme to storedTheme 
    console.log(`Setting the theme to ${storedTheme}`);
    jtd.setTheme(storedTheme);
  });

  // This is the function we will run when the user clicks the button toggle for dark mode 
  function changeTheme() {
    // get the current theme 
    const currentTheme = jtd.getTheme(); 
    console.log(`Current theme: ${currentTheme}`); 

    // set newTheme based on value of currentTheme (if currentTheme dark then set to default 
    // and if default, set to dark)
    const newTheme = currentTheme === "dark" ? "default" : "dark";
    console.log(`New theme: ${newTheme}`); 

    // save the theme to localStorage with the colorTheme key 
    localStorage.setItem('colorTheme', newTheme);
    console.log(localStorage.getItem('colorTheme')); 

    // finally, set the theme 
    jtd.setTheme(newTheme); 
}