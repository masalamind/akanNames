/* 
    Scripts takes gender and day of birth values and returns an akan name.
    Begins by defining the functions that will be used. 

*/

// Main function to execute the logic 

function userDataProcessing(sex,birthDate){
    
    let AkanName;    
    
    // Determine the day in the week that they were born 
    dayOfWeek = calculateDayOfWeek(birthDate);
    
    // if the user is male determine their male akan name otherwise they're female thus determine their female akan name
    sex === "male" ? AkanName = maleAkanNaming(dayOfWeek) : AkanName = femaleAkanNaming(dayOfWeek);

    return AkanName;

}


// Calculate the day of week of their birth given a birth date: Sun:1, Mon:2, Tue:3, Wed:4, Thur:5, Fri:6, Sat:7 
// Format of form inputs: male/female 2000-01-01 : yyyy-mm-dd

function calculateDayOfWeek(dateOfBirth){

    // Extract the digits from the dob string  
    let centuryInCenturyNumber = parseInt(dateOfBirth.slice(0,2));
    let yearInCenturyNumber = parseInt(dateOfBirth.slice(2,4)); 
    let monthNumber = parseInt(dateOfBirth.slice(5,7));
    let dateNumber = parseInt(dateOfBirth.slice(8,10));

    let CC = centuryInCenturyNumber; 
    let YY = yearInCenturyNumber;
    let MM = monthNumber;
    let DD = dateNumber;

    dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7; 

    return Math.floor(dayOfWeek);

}




// Return an Akan name for men: case 1 is Sunday

function maleAkanNaming(dayOfWeek){

    switch(dayOfWeek){
        
        case 1:
            return "Kwasi"; 
            break;
        
        case 2:
            return "Kwadwo"; 
            break;
        
        case 3:
            return "Kwabena"; 
            break;
        
        case 4:
            return "Kwaku"; 
            break;
        
        case 5:
            return "Yaw"; 
            break;            
        
        case 6:
            return "Kofi"; 
            break;
        
        case 7:
            return "Kwame"; 
            break;

        default:
            return dayOfWeek;
            break;
    }

}


// Return an Akan name for women: case 1 is Sunday

function femaleAkanNaming(dayOfWeek){

    switch(dayOfWeek){
        
        case 1:
            return "Akosua"; 
            break;
        
        case 2:
            return "Adwoa"; 
            break;
        
        case 3:
            return "Abenaa"; 
            break;
        
        case 4:
            return "Akua"; 
            break;
        
        case 5:
            return "Yaa"; 
            break;
        
        case 6:
            return "Afua"; 
            break;
        
        case 7:
            return "Ama"; 
            break;

        default: 
            return dayOfWeek;
            break;

    }
            
}



// START OF MAIN PROCESSING

var myForm = document.forms['genderAndDob'];


// Bind an event to the submit function that will take the inputs from the user 

myForm.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    let gender;
    
    var genderOptions = document.querySelectorAll('input[name="gender"]');
    
    for (let genderOption of genderOptions){
        
        if(genderOption.checked){ gender = genderOption.value; }   
    
    }
        
    var dob = myForm.querySelector("input[type='date']").value;
      
    console.log( "Your Akan name is: " + userDataProcessing(gender,dob));
       
});


