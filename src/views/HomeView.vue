<template>
  <div>
        <div class="container-fluid text-center">
          <div>
            <h1 class="text-decoration-underline">MANGAVERSE</h1>
            <p class="headpar">The Best Online Manga Store</p>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://i.postimg.cc/XvQg3d5y/wallpaperflare-com-wallpaper-6.jpg" alt="img1" loading="lazy">
                </div>
                <div class="carousel-item">
                  <img src="https://i.postimg.cc/TPdrZ826/wallpaperflare-com-wallpaper-9.jpg" alt="img2" loading="lazy">
                </div>
                <div class="carousel-item">
                  <img src="https://i.postimg.cc/Mpw8cMPG/wallpaperflare-com-wallpaper-7.jpg" alt="img3" loading="lazy">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            <div class="aboutsec">
            <h1 class="text-decoration-underline">About Us</h1>
            <p class="aboutcont">We sell high quality manga at affordable prices. We garuntee customer satisfaction and we
              are always up to <br>date with all the new manga and the classics. We provide worldwide shipping for free with
              no extra costs.
            </p>
          </div>
          <div class="featured">
            <h1 class="text-decoration-underline">Featured Products</h1>
            <div class="products" id="homeprod">
              <div class="container text-center">
                <div class="row">
                    <div class="col-sm-4 d-flex justify-content-center">
                        <div class="card" >
                            <img src="https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg" class="card-img-top" alt="product1" loading="lazy">
                            <div class="card-body">
                              <h5 class="card-title">Jujutsu Kaisen Vol.1</h5>
                              <p class="card-text">Volume 1 of Jujutsu Kaisen.</p>
                            </div>
                          </div>
                    </div>
                    <div class="col-sm-4 d-flex justify-content-center">
                        <div class="card" >
                            <img src="https://i.postimg.cc/FKPHyX3W/jujutsu-kaisen-manga2.png" class="card-img-top" alt="product2" loading="lazy">
                            <div class="card-body">
                              <h5 class="card-title">Jujutsu Kaisen Vol.4</h5>
                              <p class="card-text">Volume 4 of Jujutsu Kaisen</p>
                            </div>
                          </div>
                    </div>
                    <div class="col-sm-4 d-flex justify-content-center">
                        <div class="card" >
                            <img src="https://i.postimg.cc/j2mFGbFS/chainsaw-man-vol-1.jpg" class="card-img-top" alt="product3" loading="lazy">
                            <div class="card-body">
                              <h5 class="card-title">Chainsaw Man Vol.1</h5>
                              <p class="card-text">Volume 1 of Chainsaw Man</p>
                            </div>
                          </div>
                    </div>
                  </div>
                <div class="row">
                  <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card">
                        <img src="https://i.postimg.cc/XY661fF6/solo-leveling-vol-1-comic.jpg" class="card-img-top" alt="product4" loading="lazy">
                        <div class="card-body">
                          <h5 class="card-title">Solo Leveling Vol.1</h5>
                          <p class="card-text">Volume 1 of Solo Leveling</p>
                        </div>
                      </div>
                  </div>
                  <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card">
                        <img src="https://i.postimg.cc/jqZZc8xF/bleach-vol-1.jpg" class="card-img-top" id="homeprod" alt="product5" loading="lazy">
                        <div class="card-body">
                          <h5 class="card-title">Bleach Vol.1</h5>
                          <p class="card-text">Volume 1 of Bleach</p>
                        </div>
                      </div>
                  </div>
                  <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card">
                        <img src="https://i.postimg.cc/T1TdpBj0/attack-on-titan-vol-10.jpg" class="card-img-top" alt="product5" loading="lazy">
                        <div class="card-body">
                          <h5 class="card-title">Attack on Titan Vol.10</h5>
                          <p class="card-text">Volume 10 of Attack on Titan</p>
                        </div>
                      </div>
                  </div>
                </div>
    
            </div>
               <a href="../html/products.html"><button id="seemore">See More</button></a>
              </div>
            </div>
          </div>
        </div>
  </div>
  <form action="https://formspree.io/f/mrgvnqew" style="color: black;" method="POST">
          <div class="mb-3">
            <label for="Fullname1" class="form-label">Full Name</label>
            <div class="forminp"><input placeholder="Input Full Name" type="text" name="name" class="form-control" style="width: 80%;" id="FullName1" required></div>
          </div>
          <div class="mb-3">
            <label for="Email1" class="form-label">Email address</label>
            <div class="forminp"><input placeholder="Input Email Address" type="email" name="email" class="form-control" style="width: 80%;" id="Email1" required></div>
          </div>
          <div class="mb-3">
              <label for="Message" class="form-label">Message</label>
              <div class="forminp"><input placeholder="Input Your Message" type="text" name="message" class="form-control" style="width: 80%;"  id="Message" required></div>
          </div>
          <button type="submit" class="btn border border-light">Submit</button>
        </form>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped>
.card {
    width: 18rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

#homeprod {
    height: 100%;
}

.carousel-item img {
    width: 100%;
}

.btn:hover {
    color: red;
    background-color: black;
}

.btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    background-color: black;
    color: white;
}

.forminp {
    display: flex;
    justify-content: center;
}

label {
    font-size: x-large;
}
</style>