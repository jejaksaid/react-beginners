import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <section>
        <h2 class="home__title">Saidramadhan</h2>
        <span class="home__proffesion">Frontend Developer</span>

        <div>
          <a href="#" class="home__social-link"><i class="bx bxl-github" ></i>  </a>
          <a href="#" class="home__social-link"><i class="bx bxl-linkedin"></i></a>
          <a href="#" class="home__social-link"><i class="bx bxl-dribbble"></i></a>
        </div>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </section>
      </div>
    );
  }
}
 
export default Home;