function main(){
    let search=document.getElementById("search").value;
    console.log("search data : ",search);
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
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxRows}&order=viewCount&q=${search}&key=${API}`)
    .then((result)=>{
        return result.json()
    }).then((data)=>{
        console.log(data);
        DisplayList(data,list_element,pagination_element);
    })     
}