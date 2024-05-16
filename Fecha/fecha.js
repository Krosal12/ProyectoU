function calculateDifference() {
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);

    var difference = date2.getTime() - date1.getTime();
    var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    var yearsDifference = Math.floor(daysDifference / 365);
    var monthsDifference = Math.floor((daysDifference % 365) / 30);
    var remainingDays = daysDifference - (yearsDifference * 365) - (monthsDifference * 30);

    document.getElementById("display").innerHTML = "Difference: " + yearsDifference + " years, " + monthsDifference + " months, " + remainingDays + " days";
}



/*
case "YYYY-MM-DD":
    return $(year)-$(month)-$(day);
case "DD-MM-YYYY":
    return $(day)-$(month)-$(year);
case "MM/DD/YYYY":
    return $(month)/$(day)/$(year);
default:
    return date;*/