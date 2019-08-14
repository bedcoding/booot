import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './css/grayscale.min.css';
import mypic from './img/ipad.png';  // 만약 사진을 첨부할 경우: 이런 식으로 첨부한다.

class App extends Component {
  render() {
    return (

      <html lang="en">

        <head>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <meta name="description" content=""></meta>
          <meta name="author" content=""></meta>


          <title> 5조 </title>

          {/* <!-- Bootstrap core CSS --> */}
          <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

          {/* <!-- Custom fonts for this template --> */}
          <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

          {/* <!-- Custom styles for this template --> */}
          <link href="css/grayscale.min.css" rel="stylesheet" />
        </head>

        <body id="page-top">
          {/* <!-- Navigation --> */}
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
              <a class="navbar-brand js-scroll-trigger" href="#page-top"> 5조 </a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#게시판"> 게시판 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#게시글"> 게시글 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#글쓰기"> 글쓰기 </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>


          {/* <!-- Header --> */}
          <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
              <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase"> 5조 </h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5"> 최은우　장재호　김지훈　안성민 </h2>
                <a href="#게시판" class="btn btn-primary js-scroll-trigger"> Start </a>
              </div>
            </div>
          </header>



          {/* <!-- 게시판 --> */}
          <section id="게시판" class="about-section text-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-white mb-4"> 게시판 </h2>
                  <p class="text-white-50"> 이곳은 게시판을 누르면 도달하는 영역입니다. <br></br>
                    나중에 이 부분을 제거하고 게시판을 넣을 수 있습니다. </p>
                </div>
              </div>
              {/* 확인해보니 리액트에서는 사진을 import하고 나서 넣습니다. */}
              {/* <img src={mypic} class="img-fluid" alt="" /> */}
            </div>
          </section>



          {/* <!-- 게시글 (about Section) --> */}
          <section id="게시글" class="about-section text-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-white mb-4"> 게시글 </h2>
                  <p class="text-white-50"> 이곳은 게시판을 누르면 도달하는 영역입니다. <br></br>
                    나중에 이 부분을 제거하고 게시글을 넣을 수 있습니다. </p>
                </div>
              </div>
            </div>
          </section>





          {/* <!-- 글쓰기 (Signup Section) --> */}
          <section id="글쓰기" class="signup-section">
            <div class="container">
              <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto text-center">

                  <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                  <h2 class="text-white mb-5"> 글쓰기 </h2>

                  <form class="form-inline d-flex">
                    <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="게시글을 작성하세요" />
                    <button type="submit" class="btn btn-primary mx-auto"> 작성 </button>
                  </form>

                </div>
              </div>
            </div>
          </section>




          {/* <!-- Contact Section --> */}
          <section class="contact-section bg-black">
            <div class="container">
              <div class="row">
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                    <div class="card-body text-center">
                      <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                      <h4 class="text-uppercase m-0"> 장소 </h4>
                      <hr class="my-4" />
                      <div class="small text-black-50"> 부산 정보산업 진흥원 7층 </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                    <div class="card-body text-center">
                      <i class="fas fa-envelope text-primary mb-2"></i>
                      <h4 class="text-uppercase m-0"> 메일 </h4>
                      <hr class="my-4" />
                      <div class="small text-black-50">
                        <a href="#"> 굳이 적을 필요가 있나 </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                    <div class="card-body text-center">
                      <i class="fas fa-mobile-alt text-primary mb-2"></i>
                      <h4 class="text-uppercase m-0"> 휴대폰 </h4>
                      <hr class="my-4" />
                      <div class="small text-black-50"> 굳이 적을 필요가 있나 </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* 깃허브 링크 거는 곳 */}
              <div class="social d-flex justify-content-center">
                <a href="#" class="mx-2"> <i class="fab fa-github"></i> </a>     {/* 
                  <a href="#" class="mx-2"> <i class="fab fa-twitter"></i> </a>
                  <a href="#" class="mx-2"> <i class="fab fa-facebook-f"></i> </a> */}
              </div>
            </div>
          </section>


          {/* <!-- Footer --> */}
          <footer class="bg-black small text-center text-white-50">
            <div class="container">
              5조 &copy; 2019
             </div>
          </footer>


          {/* <!-- Bootstrap core JavaScript --> */}
          <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          {/* <!-- Plugin JavaScript --> */}
          <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

          {/* <!-- Custom scripts for this template --> */}
          <script src="js/grayscale.min.js"></script>

        </body>
      </html>

    );
  }
}

export default App;