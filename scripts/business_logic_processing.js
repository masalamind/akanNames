// Scripts takes gender and day of birth values and returns an akan name


function userDataProcessing(sex,birthDate){

    
    dayOfWeek = calculateDayOfWeek(birthDate);

    // if the user is male determine their male akan name else if they're female determine their female akan name

    
    let AkanName = " ";
    
    
    sex === "male" ? AkanName = maleAkanNaming(dayOfWeek) : AkanName = femaleAkanNaming(dayOfWeek);

    return AkanName;

}


// Calculate the day of week of birth: Monday - Sunday 
// format of form inputs: male/female 2000-01-01

function calculateDayOfWeek(dateOfBirth){

    // extract the digits from the dob string  
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


// Fetch user inputs from form on submit
var myForm = document.forms['genderAndDob'];


myForm.addEventListener('submit', function(e){
    
    e.preventDefault();

    var gender = myForm.querySelector("input[type='radio']").value;
    var dob = myForm.querySelector("input[type='date']").value;

    console.log("First of all the gender is: " + gender);
    console.log(gender, dob); 
      
    console.log( "Your Akan name is: " + userDataProcessing(gender,dob));
       
});


