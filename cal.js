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

function addBlankMilestone(){
    let newMSnum = getMaxMilestones() + 1;
    let tableElement = document.getElementById("MSTable");
    // Create a new table row
    let newrow = tableElement.insertRow();
    // Now add the cells
    //MS Number
    let cell1 = newrow.insertCell(0);
    cell1.innerText = String(newMSnum)
    cell1.setAttribute("class","MSnumber")
    let cell2 = newrow.insertCell(1);
    cell2.innerHTML = "<input type = 'text' name ='msname' id = 'newms'>"
    let cell3 = newrow.insertCell(2);
    cell3.innerHTML = "<input type = 'Date' name = 'msdate' id = 'newdate'>"
    let cell4 = newrow.insertCell(3);
    cell4.innerHTML = "<input type = 'Submit'>";``  
}

function addCompleteMilestone(comptext,compdate){
    //Set milestone 
    let milestonecell = document.getElementById("newms").parentElement;
    milestonecell.innerHTML = comptext;
    //Set date
    let datecell = document.getElementById("newdate").parentElement;
    datecell.innerHTML = compdate;
    //Get rid of the submit button
    let thisrow = datecell.parentElement
    thisrow.getElementsByTagName("td")[3].innerHTML = "Null";
    //add the update column
    let cell4 = thisrow.insertCell();
    let inputform = document.createElement("input");
    let newdateinput = cell4.appendChild(inputform);
    newdateinput.setAttribute("type","Date");
    let inputform3 = document.createElement("input");
    let submitform = cell4.appendChild(inputform3);
    submitform.setAttribute("type","submit");

    //add the complete button
    let cell5 = thisrow.insertCell();
    let inputform2 = document.createElement("input");
    let newcompleteinput = cell5.appendChild(inputform2);
    newcompleteinput.setAttribute("type","checkbox");    
}

function updateDate(tablerow){
    let mytable = document.getElementById("MSTable");
    for (onerow of mytable.rows){
        if (Number(onerow.getElementById("MSnumber").textContent) == tablerow){
            onerow.getElementById("MSdate").textContent = onerow.getElementsbyTagName()
        }
    }
}

function deleteMilestone(msnumber){
    let mytable = document.getElementById("MSTable");
    let myrows = mytable.rows;
    for (let i=0; i < myrows.length; i++){
        if (i == 0){continue;}
        let onerow = myrows[i];
        let oldnum = onerow.getElementsByClassName("MSnumber")[0].textContent //number of row
        if (Number(oldnum) == msnumber){
            mytable.deleteRow(i);
        }
    }
}
