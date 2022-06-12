import React from 'react'

const Home = () => {
    return (
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="Kathmandu.jpg"
                            alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Kathmandu, Nepal</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="UF.jpg"
                            alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Gainesville, FL</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="Creek.jpg"
                            alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Port Orange, FL</h3>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="container">
                <h3 class="white title-about"><b>About</b></h3>
                <p class="white text-about text-justify">
                    &emsp;&emsp;This is a barebones html/css/js site I put together for those looking to get to know me better. I was born in Kathmandu, Nepal and moved to the US in 1999. I attended the University of Florida where I spend much of my time during the academic year working on research projects in the fields of computational biology and neuroscience. These projects covered topics ranging from genomics to mathematical modeling to machine learning and ultimately resulted in an honors thesis "A Computational Model of the Islets of Langerhans" for which I was recognized as Summa Cum Laude. I have also been involved in the development of web and mobile applications (outside of barebones sites like this) and spent my time outside of the classroom and research lab with various service and social organizations with a similar wide range of practices and goals. Feel free to explore this site and contact me about interesting projects, opportunitities, or any other contingencies you think may be relevant.
                </p>
            </div>
        </div>
    )
}

export default Home