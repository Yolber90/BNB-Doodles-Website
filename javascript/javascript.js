$(document).ready(function () {
    
    let hamburgerMenu = true;


    $("#hmbrgr-menu-btn").on("click", function () {
        hamburgerMenu = !hamburgerMenu;

        if(hamburgerMenu == true){
            $(".material-symbols-outlined").html("menu");
            
            $(".new-mobile-menu").animate({
                "width": '0%',
                "height": "0%"
            });
            
        }else{
            $(".material-symbols-outlined").html("close");
            
            $(".new-mobile-menu").animate({
                "width": '70%',
                "height": "100%" 
            });            
        }


    });
})







// $(document).ready(function () {
//     //Ligth Slider plugin
//     let hamburgerMenu = true;
//     $(".mobile-menu").css("display", "none")
//     $(".mobile-menu-container").css("display", "none");
    
    

//     $("#hmbrgr-menu-btn").on("click", function () {
//         hamburgerMenu = !hamburgerMenu;

//         if(hamburgerMenu == true){
//             $(".material-symbols-outlined").html("menu");
//             $(".mobile-menu").css("display", "none")
//             $(".mobile-menu-container").css("display", "none");
            
//         }
//         else{
//             $(".material-symbols-outlined").html("close");
//             $(".mobile-menu").css("display", "")
//             $(".mobile-menu-container").css("display", "");
//             $(".mobile-menu").css("display", "1")
//             $(".mobile-menu-container").css("z-index", "1");
            
            
//         }
//     });
// })