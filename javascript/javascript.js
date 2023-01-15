

$(document).ready(function () {



    // START Hamburger Menu
    let hamburgerMenu = true;

    $("#hmbrgr-menu-btn").on("click", function () {
        hamburgerMenu = !hamburgerMenu;

        if(hamburgerMenu == true){
            $("#hmbrgr-menu-btn").html(
                "<i class='fa-solid fa-bars'></i>"
            );
            
            $(".new-mobile-menu").animate({
                "width": "0%",
                "height": "0%"
            });

            
        }else{
            $("#hmbrgr-menu-btn").html(
                "<i class='fa-solid fa-x'></i>"
            );
            
            $(".new-mobile-menu").animate({
                "width": '70%',
                "height": "100%" 
            });
            // This locks scroll when the menu is open, was buggy so had to comment out.
            // $('body').css({
            //     overflow: 'hidden',
            //     height: '100%'   
            // });
        }
        // reset mobile menu (hamburger menu) once clicked.
        $(".m-home, .m-puppies, .m-contact-us, .m-sample").on("click", function () {
            hamburgerMenu = true;
            $("#hmbrgr-menu-btn").html(
                "<i class='fa-solid fa-bars'></i>"
            );
            
            $(".new-mobile-menu").animate({
                "width": "0%",
                "height": "0%"
            });

        });
    });

    // END Hamburger Menu



    // API, get puppie details
    $.get("/json/database", function (data) {
        //Get and Format json file from a string to an object
        const objData = JSON.parse(data); //convert data into an obj
        const pups = objData.puppies //short cont for for data.puppies
        const dataLen = Object.keys(pups).length // get the obj length


        //Save data from the json file into variables for future consumption.
        const thisPup = pups.kai; // pups.(pup object key)
        const name = thisPup.name;
        const coat = thisPup.coat;
        const sex = thisPup.sex.toUpperCase();
        const DOB = thisPup.DOB;
        const price = thisPup.price;
        const status = thisPup.available;


        //Time Calculations
        //Get CPU Date and calculate against puppy DOB
        const today = new Date();// establish CPU Date
        const born = new Date(objData.litterInception)// Pickup litter date from JSON
        const daySince = today.getTime() - born.getTime()// Find difference between CPU Date and inception date
        const diff = daySince / (1000 * 3600 * 24);// Convert into Days.
        const finalDiff = Math.round(diff);// Round the diff


        //Convert Days into days weeks, months, or years
        function howOld(days) {
            if (days >= 365) {
                return Math.round(days / 365) + " Year Old"
            } else if (days >= 60) {
                return Math.round(days / 30) + " Months Old"
            } else if (days >= 14) {
                return Math.round(days / 7) + " Weeks Old"
            }
            else {
                return days + " Days Old"
            };
        };



        //Dinamic HTML Load, will load into the table elements
        $("#puppy-title").append("BNB Doodles | " + name);
        $("#name").html(name);
        $("#sex").html(sex);
        $("#coat").html(coat);
        $("#bornOn").html(DOB);
        $("#time").html(howOld((finalDiff)));
        $("#price").html("$" + price).css("color", "green").css("font-weight", 900);

        //Convert status to Avail. or On Hold depending on Boolean value
        //Also change css color depending on status
        if (status == true) {
            $("#status").html("Available");
            $("#status").css("color", "green");
        } else {
            $("#status").html("On Hold");
            $("#status").css("color", "red");
        }
        
        $("#about").html(
            "<p> Contact us to inquire about " + name + ".</p>" +
            "<p>A minimum down payment of $200 will be required to hold this puppy for you.</p>"
        )
        
        // This updates the reserve button on the puppy details page
        $(".dog-submit").text("    Reserve " + name).css("color", "black");


        // from Puppies.html
        // Load Puppy details on puppies.html under 'listing' div
        let dogs = []
        for (const key in pups) {
            dogs.push(key);
        };
        for (let i = 0; i < dogs.length; i++) {
            $("#listing").append(
                "<div id='posting' class= img" + [i] + "></div>"
            );
            $(".img" + [i]).append(
                // pups[dogs[i]].thumbnail
                // "<a href='bnb_doodles_puppies_details_kai.html' target='_blank'>" + pups[dogs[i]].thumbnail  + "</a>"
                "<a  href='puppy_details_" + pups[dogs[i]].name + ".html' target='_blank'>" + pups[dogs[i]].thumbnail + "</a>"

            )
            $(".img" + [i]).append(
                "<div id='info' class=info" + [i] + ">" +
                "<ul id=ul-list" + [i] + "></ul>" + "</div>"
            )
            $("#ul-list" + [i]).append(
                "<li class='ident-name'><strong>" + pups[dogs[i]].name + "</strong></li>" +
                "<li id='ident'>" + pups[dogs[i]].sex + "</li>" +
                "<li id='ident'>Bon on:  " + pups[dogs[i]].DOB + "<br>" + finalDiff + " Days Old</li>" +
                "<li id='ident' style='color: lightgreen'><strong>" + pups[dogs[i]].price + "<strong></li>"
            )
        }


    })



})