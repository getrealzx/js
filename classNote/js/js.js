var container = document.querySelector('#container')
container.className = "container-fluid";



///////////////////////////////////////////////////////
// var link1 = document.createElement('a');
// link1.textContent = "HighOnCoding";

// link1.className = "nav-item nav-link active";
// link1.setAttribute("href", "#");


// var link2 = document.createElement('a');
// link2.textContent = "Home";
// link2.className = "nav-item nav-link active small pl-5";
// link2.setAttribute("href", "#");


// var link3 = document.createElement('a');
// link3.textContent = "Categories";
// link3.className = "nav-item nav-link small pl-5";
// link3.setAttribute("href", "#");

// var headerDiv = document.createElement('div');
// headerDiv.className = "nav navbar-nav h3";
// headerDiv.append(link1);
// headerDiv.append(link2);
// headerDiv.append(link3);



// var headerNav = document.createElement('nav');
// headerNav.className = "navbar navbar-expand navbar-dark p-4";
// headerNav.style = "background-color: rgb(82, 167, 250); ";
// headerNav.append(headerDiv);
// container.append(headerNav);


// /////////////////////////////////////////////////


function createContent(tagName,parentNode, classsValue, idValue, styleValue, link, innerText){

    var tag=document.createElement(tagName);

    
    if(idValue!=""){
        tag.id=classValue;
    }
    if(classsValue!=""){
        tag.className=classsValue;
    }
    if(link!="")
    {
    tag.setAttribute=("href", "#");
    }

    if(styleValue!=""){

        tag.style=styleValue;
    }


    if (innerText.length>0){
        tag.textContent = innerText;
    }
    
    
    tag.append(tag);
    return tag;

}


var headerDiv=createContent(hearderDiv,.container,"navbar navbar-expand navbar-dark p-4","background-color: rgb(82, 167, 250); ","")
