
var slide_holder = document.getElementsByClassName("slider-holder")[0];
var news = document.getElementsByClassName("news")[0];
var footer = document.getElementsByTagName("footer");
var lazy = document.getElementById("lazy");
var lazynews = document.getElementsByClassName("lazynews")[0];
document.onscroll = function()
{
    if(document.documentElement.scrollTop > 250)
    {
        slide_holder.style.display = "block";
        lazy.style.display = "none";
    }
    else{
        slide_holder.style.display = "none";
        lazy.style.display = "flex";
    }
    if(document.documentElement.scrollTop > 500)
    {
        news.style.display = "block";
        lazynews.style.display = "none";
    }
    else{
        news.style.display = "none";
        lazynews.style.display = "block";
    }
}
var search = document.getElementsByClassName("search")[0];
var content = document.getElementsByClassName("content")[0];
var lazysearch = document.getElementsByClassName("lazysea")[0];
console.log(lazysearch);
var lazyload = document.getElementsByClassName("lazyload")[0];
console.log(lazyload);
function loading()
{
    lazysearch.style.display = "none";
    lazyload.style.display = "none";
    search.style.display = "flex";
    content.style.display = "block";
    console.log("ahihi");
}
setTimeout(loading,5000);
