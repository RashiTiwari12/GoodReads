import Navbar from "../../components/Navbar"

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="jumbotron text-center">
                <div className="display-4">About US</div>
                <div className="lead">This is simple about page</div>
            </div>
            <div className="container">
                <section>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, harum deserunt ipsam autem blanditiis voluptate non odio adipisci in quo rem nemo voluptates magnam illum labore consequuntur neque? Ducimus, quasi.
                    </p>
                </section>
            </div>
        </>

    )
}

export default AboutPage