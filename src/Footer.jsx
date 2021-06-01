import React from 'react'

const Footer = () =>{
    const year=new Date().getFullYear();
    return(
        <>
        <footer className="w-100 bg-light text-center ">
            <p>&copy; {year} Katoch Cafe. All Rights Reserved | Terms and onditions</p>
        </footer>
        </>
    )
}

export default Footer;