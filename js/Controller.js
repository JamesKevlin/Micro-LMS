var Home = document.getElementById("home_tab").addEventListener("click",display);
var Admin = document.getElementById("admin_tab").addEventListener("click",display);
var Student = document.getElementById("student_tab").addEventListener("click",display);
var Teacher = document.getElementById("teacher_tab").addEventListener("click",display);



function display(event){
    
    let name = event.currentTarget.id;
    
    let tabs = document.getElementsByClassName("content");

    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }


    if(name === "home_tab"){
        let homeTabs = document.getElementById("home");
        homeTabs.style.display = "block";
    } else if(name === "admin_tab"){
        let adminTabs = document.getElementById("admin");
        adminTabs.style.display = "block";

    }else if(name === "student_tab"){
        let studentTabs = document.getElementById("student");
        studentTabs.style.display = "block";
    }else if(name === "teacher_tab"){
        let teacherTabs = document.getElementById("teacher");
        teacherTabs.style.display = "block";
    }
}