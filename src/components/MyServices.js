import React from 'react'

const MyServices = () => {
    return (
        <section className="my-services" id={"services"}>
                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <div className="service">
                        <h3>Front End Development</h3>
                        <p>Developing the client side using Html, CSS, Javascript, and React or AngularJS</p>
                    </div>

                    <div className="service">
                        <h3>Backend Development</h3>
                        <p>Handle the Backend using NodeJS..Laravel..Ruby on Rails..Django for business logic and SQL or Mongodb for Database .</p>
                    </div>
                </div>
                <a href="#work" className="btn">My Work</a>
            </section>
    )
}
export default MyServices