var btnMnu = $(".btn-mnu");
btnMnu.click(()=>{
    $(".nav-expand").addClass("nav-active");
});

var btnClose = $(".btn-close");
btnClose.click(()=>{
    $(".nav-expand").removeClass("nav-active");
});