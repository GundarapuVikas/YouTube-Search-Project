function generateRecords(pageToken){
    var search=document.getElementById("search").value;
    let maxRows;
    if(window.innerWidth<=600){
        maxRows=6;
    }
    else{
        maxRows=15;
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