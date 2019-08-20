var slides = document.getElementsByClassName("slides");
var dotted = document.getElementsByClassName("dot");
console.log(slides);
var slideindex;
function slideshowanddotted()
{
    for(i=0;i<slides.length;i++) // no se chay het vong lap va cho tat ca cac slide khong hien thi, cho den khi no gap slide thu slideindex-1 thi display: block
    {
        slides[i].style.display="none";
    }
    for(i=0;i<dotted.length;i++)
    {
        dotted[i].className = dotted[i].className.replace(" active", "");
    }
    slides[slideindex].style.display ="block";
    dotted[slideindex].className += " active";
    //a=a+5 ==> a+=5;
    // chuyển đến slide kế tiếp
    slideindex++;
    if(slideindex > slides.length-1)
    {
        slideindex = 0;
    }
    setTimeout(slideshowanddotted,3000);
}
// mặc định hiển thị slide đầu tiên
slideshowanddotted(slideindex = 0);
function currentslide(n)
{
    slideshowanddotted(slideindex = n);
    // n ở đây tượng trưng cho hình ảnh thứ i mà slideshowanddotted đang hiển thị
    //Nếu có thao tác vào các chấm, hàm currentSlide(n)  sẽ được gọi với tham số n truyền vào là trang slide muốn đến
    // ==>  Đầu tiên, ta gán lại biến slideIndex = n, sau đó gọi hàm showSlides()
}