// Scripts takes gender and day of birth values and returns an akan name


// Calculate the day of birth: Monday - Sunday 

function calculateDayOfWeek(dateOfBirth){

    // take elements of the DOB and assign to appropriate variables 

    let CC = centuryInCenturyNumber; 
    let YY = yearInCenturyNumber;
    let MM = monthNumber;
    let DD = dateNumber;

    dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7; 

    return dayOfWeek;


}




// Return an Akan name for men: case 1 is Sunday

function maleAkanNaming(dayOfWeek){

    switch(dayOfWeek):
        
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
        
}





Female
Sunday: Akosua

Monday: Adwoa

Tuesday: Abenaa

Wednesday: Akua

Thursday:  Yaa

Friday: Afua

Saturday: Ama