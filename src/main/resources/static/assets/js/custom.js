function getSubjects() {
    // -----
    var baseurl = "/api/v1/subject/getSubjects";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseurl, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var data = JSON.parse(xmlhttp.responseText);


            var url = "/api/v1/documents/getDocuments";
            var xxx = new XMLHttpRequest();
            xxx.open("GET", url, true);
            xxx.onreadystatechange = function () {

                if (xxx.readyState == 4 && xxx.status == 200) {


                    var documents = JSON.parse(xxx.responseText);
                    console.log(documents);

                    for (let i = 0; i < data.length; i++) {
                        data[i].imgURL = "";

                        for (let j = 0; j < documents.length; j++) {
                            if (data[i].id == documents[j].teacher_id) {

                                data[i].imgURL = documents[j].fileName;
                            }
                        }
                        console.log(i + " " + data[i].imgURL);
                    }

                    console.log(data);




                }
            }
            xxx.send();


        }
    };
    xmlhttp.send();
}




// Code goes here
$(document).ready(function() {
    // $.ajax( {
    //     url: '/getSubjects',
    //     dataType: 'json',
    //     success: function(data) {
    //         var response = '',
    //             indicator = '';
    //         for (var i = 0; i < data.length; i++) {
    //             console.log("processing");
    //             response += '<div class="item">' +
    //                         '<img src="uploads/Subjects/' + data[i].imgURL + '">' +
    //                         '<div class="carousel-caption"><h3>' +
    //                                 data[i].name + '</h3><p>' + data[i].category + '</p>' +
    //                                 '<p><a class="btn btn-info btn-sm">Read More</a></p>' +
    //                         '</div>' +
    //                 '</div>';
    //             indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
    //         }
    //
    //
    //         $('#homepageItems').append(response);
    //         $('#indicators').append(indicator);
    //         $('.item').first().addClass('active');
    //         $('.carousel-indicators > li').first().addClass('active');
    //         $("#myCarousel").carousel();
    //     }
    // });


    var data="";
    var baseurl = "/api/v1/subject/getSubjects";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseurl, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            data = JSON.parse(xmlhttp.responseText);


            var url = "/api/v1/documents/getDocuments";
            var xxx = new XMLHttpRequest();
            xxx.open("GET", url, true);
            xxx.onreadystatechange = function () {

                if (xxx.readyState == 4 && xxx.status == 200) {


                    var documents = JSON.parse(xxx.responseText);
                    console.log(documents);

                    for (let i = 0; i < data.length; i++) {
                        data[i].imgURL = "";

                        for (let j = 0; j < documents.length; j++) {
                            if (data[i].id == documents[j].subject_id) {

                                data[i].imgURL = documents[j].fileName;
                            }
                        }
                        console.log(i + " " + data[i].imgURL);
                    }


                    var t_body = document.getElementById("subjects");


                    while (t_body.hasChildNodes()) {
                        t_body.removeChild(t_body.firstChild);

                    }


                    /* for (let i = 0; i < data.length; i++) {*/
                    for (let i = 0; i < 8; i++) {
                        console.log(i);
                        let html = `


                                    <div class="cours-bx">
                                    <div class="action-box">
                                    <img src="assets/images/courses/pic3.jpg" alt="">
                                    <a href="#" class="btn">Read More</a>
                                    </div>
                                    <div class="info-bx text-center">
                                    <h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
                                    <span>Programming</span>
                                    </div>
                                    <div class="cours-more-info">
                                    <div class="review">
                                    <span>3 Review</span>
                                    <ul class="cours-star">
                                    <li class="active"><i class="fa fa-star"></i></li>
                                    <li class="active"><i class="fa fa-star"></i></li>
                                    <li class="active"><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    </div>
                                    <div class="price">
                                    <del>$190</del>
                                    <h5>$120</h5>
                                    </div>
                                    </div>
                                    </div>


                             `;

                        let tr = document.createElement("div");


                        tr.setAttribute("class", "item");


                        tr.innerHTML = html;


                        t_body.appendChild(tr);

                    }

                    $('.item').first().addClass('active');
                    $("#subjects").owlCarousel();







                   /* var response = '',
                        indicator = '';
                    for (var i = 0; i < data.length; i++) {
                        console.log("processing");
                        response += '<div class="item">' +
                            '<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a045df88612153.5ddbe6a0865a1.jpg" style="height:350px;width:450px">' +
                            '<div class="carousel-caption"><h3 style="color: white">' +
                            data[i].name + '</h3><p>' + data[i].category + '</p>' +
                            '<p><a class="btn btn-info btn-sm">Read More</a></p>' +
                            '</div>' +
                            '</div>';
                        indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
                    }


                    $('#homepageItems').append(response);
                    $('#indicators').append(indicator);
                    $('.item').first().addClass('active');
                    $('.carousel-indicators > li').first().addClass('active');
                    $("#myCarousel").carousel();
                    $("#myCarousel").owlCarousel();*/


                }
            }
            xxx.send();


        }
    };
    xmlhttp.send();











});



