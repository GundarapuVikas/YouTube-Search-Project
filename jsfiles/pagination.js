var currentPage=1;
function applyPagination(data,wrapper){
    wrapper.innerHTML="";
    let prevBtn=document.createElement('button');
    prevBtn.innerText="Prev";
    prevBtn.id="prev";
    wrapper.appendChild(prevBtn);
    if(data.prevPageToken===undefined){
        prevBtn.disabled="true";
        prevBtn.style.background="rgb(82, 43, 43)";
    }
    prevBtn.addEventListener('click',function(){
        currentPage--;
        console.log("current page->",currentPage);
        console.log("<------->",data.nextPageToken);
        generateRecords(data.prevPageToken);
    });
    for(let i=1;i<=10;i++){
        let btn=paginationButton(i,data);
        wrapper.append(btn);
    }
    let nextBtn=document.createElement('button');
    nextBtn.innerText="Next";
    nextBtn.id="next";
    wrapper.appendChild(nextBtn);
    if(data.nextPageToken===undefined){
        nextBtn.disabled="true";
        nextBtn.style.background="rgb(82, 43, 43)";
    }
    nextBtn.addEventListener('click',function(){
        currentPage++;
        console.log("current page->",currentPage);
        console.log("<------->",data.nextPageToken);
        generateRecords(data.nextPageToken);
    });
}

function paginationButton(page,data){
    let button=document.createElement('button');
    button.innerText=page;
    if(currentPage==page){
        button.classList.add('active');
    }
    button.addEventListener('click',function(){
        currentPage=page;
        console.log("<------->",data.nextPageToken);
        generateRecords(data.nextPageToken);
        let current_btn=document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');
        button.classList.add('active');
    });
    return button;
}