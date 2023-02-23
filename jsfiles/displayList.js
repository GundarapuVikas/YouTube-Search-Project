function DisplayList(data,wrapper,paginList){
    console.log("entered display list")
    wrapper.innerHTML="";
    data.items.forEach(item=>{
        let videoId=item.id.videoId;
        var viewCount;
        var API="AIzaSyDzhb_xhWXTUCYY0JKYn3wlTfgki3EF700";
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API}&id=${videoId}&part=snippet,statistics`)
        .then((stat_response)=>{
            return stat_response.json();
        })
        .then((statData)=>{
            viewCount=statData.items[0]?statData.items[0].statistics.viewCount:0;
            const description=item.snippet.description||"No description given for this video.";
            // let item_element=document.createElement('div');
            wrapper.classList.add('video');
            wrapper.innerHTML+=`<div class="video"> 
                                        <div class="video-thumbnail">
                                        <img id="image" src="${item.snippet.thumbnails.medium.url}"></img>
                                        <iframe id="iframe" src="https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&mute=1&start=0&controls=0&showinfo=0&modestbranding=0" frameborder="0"></iframe>
                                        </div> 
                                        <div class="video-content">
                                        <a href="https://www.youtube.com/watch?v=${item.id.videoId}">
                                                ${item.snippet.title.slice(0,75)}
                                            </a> 
                                            <p><b>${item.snippet.channelTitle.toUpperCase()}</b></p>
                                            <p><b>${viewCount}</b> views  <b>.  <i>${item.snippet.publishedAt.toString().slice(0,10)}</i></b></p>
                                            <p><b>Desp:</b>${description.slice(0,200)}...</p>
                                        </div> 
                                    </div>` ;
            
        })
    });
    applyPagination(data,paginList);
}