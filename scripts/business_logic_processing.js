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






