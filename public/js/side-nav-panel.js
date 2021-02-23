

// Hide and show button
const show_button=document.querySelector('#show-hide-button');
let hide_status=false;
show_button.addEventListener('click',(e)=>{

    console.log('hello');
    let left_aside=document.querySelector('#left-aside');
    let nav_panel=document.querySelector('#side-navigation-panel');
    if(!hide_status){
        left_aside.style.width="80px";
        nav_panel.style.display="none";
        hide_status=true;
    }
    else{
        left_aside.style.width="25%";
        nav_panel.style.display="flex";
        hide_status=false;
    }
});
//