function getMaxMilestones(){
    //get tableelement
    let numbers = document.getElementsByClassName("MSnumber");
    let maxnum = 0;
    for (let el of numbers){
        let newnum = Number(el.textContent);
        if (newnum > maxnum){
            maxnum = newnum;
        }
    }
    return maxnum;
}

function scottsTest(){
    alert("This Worked")
}

function addBlankMilestone(){
    let newMSnum = getMaxMilestones() + 1;
    let tableElement = document.getElementById("MSTable");
    // Create a new table row
    let newrow = tableElement.insertRow();
    // Now add the cells
    //MS Number
    let cell1 = newrow.insertCell(0);
    cell1.innerText = String(newMSnum)
    let cell2 = newrow.insertCell(1);
    cell2.innerHTML = "<input type = 'text' name ='msname' id = 'newms'>"
    let cell3 = newrow.insertCell(2);
    cell3.innerHTML = "<input type = 'Date' name = 'msdate' id = 'newdate'>"
    let cell4 = newrow.insertCell(3);
    cell4.innerHTML = "<input type = 'Submit'>";
    cell4.setAttribute("onclick","addCompleteMilestone(c3ll2.textContent,cell3,textContent)");    
}

function addCompleteMilestone(comptext,compdate){
    //Set milestone 
    let milestonecell = getElementById("newms").parentElement;
    milestonecell.innerHTML = comptext;
    //Set date
    let datecell = getElementbyID("newdate").parentElement;
    datecell.innerHTML = compdate;
}
