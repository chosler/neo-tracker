import React from 'react'

const OrbitalDiagram = props => {
    console.log(props);
    
    
    const renderDiagram= name => {
        switch(name) {
            case '21277 (1996 TO5)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1996 TO5.jpg'} alt='asteroid'/>;
            case '162038 (1996 DH)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1996 DH.jpg'} alt='asteroid'/>;
            case '189058 (2000 UT16)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2000 UT16.jpg'} alt='asteroid'/>;
            case '276274 (2002 SS41)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2002 SS41.jpg'} alt='asteroid'/>;
            case '322913 (2002 CM1)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2002 CM1.jpg'} alt='asteroid'/>;
            case '435730 (2008 UK90)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2008 UK90.jpg'} alt='asteroid'/>;
            case '451297 (2010 TK54)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2010 TK54.jpg'} alt='asteroid'/>;
            case '452307 Manawydan (1997 XV11)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1997 XV11.jpg'} alt='asteroid'/>;
            case '452421 (2002 VX99)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2002 VX99.jpg'} alt='asteroid'/>;
            case '453100 (2007 WU4)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2007 WU4.jpg'} alt='asteroid'/>;
            case '454266 (2014 FM7)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/2014 FM7.jpg'} alt='asteroid'/>;
            case '(1979 XB)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1979 XB.jpg'} alt='asteroid'/>;
            case '(1990 UN)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1990 UN.jpg'} alt='asteroid'/>;
            case '(1991 XA)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1991 XA.jpg'} alt='asteroid'/>;
            case '(1992 YD3)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1992 YD3.jpg'} alt='asteroid'/>;
            case '(1993 BD3)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1993 BD3.jpg'} alt='asteroid'/>;
            case '(1993 BU3)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1993 BU3.jpg'} alt='asteroid'/>;
            case '(1994 FA)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1994 FA.jpg'} alt='asteroid'/>;
            case '(1994 GK)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1994 GK.jpg'} alt='asteroid'/>;
            case '(1994 RB)':
                return <img className="obj-image" src={process.env.PUBLIC_URL + 'orbitalDiagrams/1994 RB.jpg'} alt='asteroid'/>;
            default:
                return <img src='https://i.gadgets360cdn.com/large/asteroid_nasa_1595068349067.jpg' alt='asteroid'/>
            }
    }
    
    
    return(
        <>
        {renderDiagram(props.name)}
        </>
    )
}

export default OrbitalDiagram;