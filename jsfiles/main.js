form=document.getElementById("myform");
console.log("entered")
form.addEventListener('submit',function(event){
    event.preventDefault();
    main();
})
/*
function main(){
    let search=document.getElementById("search").value;
    console.log("search data : ",search);
    let maxRows;
    if(window.innerWidth>600){
        maxRows=15;
    }
    else{
        maxRows=8;
    }
    const list_element = document.getElementById('list');
    const pagination_element = document.getElementById('pagination');
    var API="AIzaSyDzhb_xhWXTUCYY0JKYn3wlTfgki3EF700";
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxRows}&order=viewCount&q=${search}&key=${API}`)
    .then((result)=>{
        return result.json()
    }).then((data)=>{
        console.log(data);
        DisplayList(data,list_element,pagination_element);
    })     
}

function DisplayList(data,wrapper,paginList){
    console.log("entered display list")
    wrapper.innerHTML="";
    data.items.forEach(item=>{
        let videoId=item.id.videoId;
        var viewCount;
        var API="AIzaSyDzhb_xhWXTUCYY0JKYn3wlTfgki3EF700";
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API}&id=${videoId}&part=statistics`)
        .then((stat_response)=>{
            return stat_response.json();
        })
        .then((statData)=>{
            viewCount=statData.items[0]?statData.items[0].statistics.viewCount:0;
            const description=item.snippet.description||"No description given for this video.";
            let item_element=document.createElement('div');
            item_element.classList.add('item');
            item_element.innerHTML=`<div class="item"> 
                                        <div class="thumbnail">
                                        <img id="image" src="${item.snippet.thumbnails.medium.url}"></img>
                                        <iframe id="iframe" src="https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&mute=1&start=0&controls=0&showinfo=0&modestbranding=0" frameborder="0"></iframe>
                                        </div> 
                                        <div class="item-content"> 
                                            <a href="https://www.youtube.com/watch?v=${item.id.videoId}">
                                                <h3>${item.snippet.title}</h3>
                                            </a>
                                            <p><strong>Date of publish: </strong> <i>${item.snippet.publishedAt.toString().slice(0,10)}</i></p>
                                            <strong>Author: </strong><i>${item.snippet.channelTitle}</i><strong>No of Views: </strong>${viewCount}
                                            <p>${description}</p>
                                        </div> 
                                    </div>` ;
            wrapper.appendChild(item_element);
        })
    });
    applyPagination(data,paginList);
}

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
    // for(let i=1;i<=10;i++){
    //     let btn=paginationButton(i,data);
    //     wrapper.append(btn);
    // }
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

// function paginationButton(page,data){
//     let button=document.createElement('button');
//     button.innerText=page;
//     if(currentPage==page){
//         button.classList.add('active');
//     }
//     button.addEventListener('click',function(){
//         currentPage=page;
//         console.log("<------->",data.nextPageToken);
//         generateRecords(data.nextPageToken);
//         let current_btn=document.querySelector('.pagenumbers button.active');
//         current_btn.classList.remove('active');
//         button.classList.add('active');
//     });
//     return button;
// }

function generateRecords(pageToken){
    var search=document.getElementById("search").value;
    let maxRows;
    if(window.innerWidth>600){
        maxRows=15;
    }
    else{
        maxRows=8;
    }
    const list_element = document.getElementById('list');
    const pagination_element = document.getElementById('pagination');
    var API="AIzaSyDzhb_xhWXTUCYY0JKYn3wlTfgki3EF700";
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxRows}&order=viewCount&pageToken=${pageToken}&q=${search}&key=${API}`)
    .then((result)=>{
        return result.json()
    }).then((data)=>{
        console.log(data)
        DisplayList(data,list_element,pagination_element);
    });
}
*/

