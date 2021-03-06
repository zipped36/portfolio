import React from 'react'

function LandingProject() {
    return (
        <div className="h-screen bg-green-50 md:pt-48 p-36 overflow-hidden">
            <div className="container mx-auto text-center">
                <div className="text-4xl font-semibold mt-3 font-Amatic">Can't thank you enough for visiting</div>
                <div className="text-5xl font-semibold mt-6 font-Acme mb-9">'My Projects'</div>
                <img src="projectlanding.png" className="h-60 md:h-80 lg:h-96 mx-auto"></img>
                <div className="mt-8 flex flex-row justify-center gap-x-12 relative">
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://github.com/zipped36"><i className="fab fa-github fa-2x mx-auto"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://stackoverflow.com/users/14694891/shuhat36"><i className="fab fa-stack-overflow fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://www.linkedin.com/in/khshuhatuddin/"><i className="fab fa-linkedin-in fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://dev.to/"><i className="fab fa-dev fa-2x"/></a></div>
                </div>
                    {/* <div className="flex mt-24 mb-24 justify-center gap-x-6">
                        <div className="text-xl font-bold self-center">scroll down please</div>
                        <span style={{color: "#059669"}}><i class="fas fa-arrow-circle-down fa-7x"></i></span>
                    </div> */}
                {/* <div className="flex flex-row-reverse">
                    <img src="color pencil.png" className="w-1/6"></img>
                </div>  */}
                </div>
            </div>
    )
}

export default LandingProject
