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
  document.addEventListener('DOMContentLoaded', function() {
    const storedTheme = localStorage.getItem('colorTheme');
    const currentTheme = jtd.getTheme();
    console.log(`Current theme: ${currentTheme}`);
    console.log(`Stored theme: ${storedTheme}`);
    if (storedTheme === currentTheme) {
        return;
    }
    console.log(storedTheme === currentTheme)
    // if (storedTheme === 'dark') {
      jtd.setTheme(storedTheme);
    // } else {
    //     jtd.setTheme('light');
    // }
  });

  // Toggle dark mode on button click and save preference
  function changeTheme() {
    const currentTheme = jtd.getTheme(); 
    console.log(`Current theme: ${currentTheme}`); 
    newTheme = currentTheme === "dark" ? "light" : "dark";
    console.log(`New theme: ${newTheme}`); 
    localStorage.setItem('colorTheme', newTheme);
    console.log(localStorage.getItem('colorTheme')); 
    jtd.setTheme(newTheme); 
}