import React, { useEffect, useState } from "react";
import {useMediaQuery} from "react-responsive";

const useCheckIsMobile = ()=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 992px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 992px)'
    })
    useEffect(() => {
        if (isTabletOrMobile || isTabletOrMobileDevice) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }


    }, [isDesktopOrLaptop, isBigScreen, isTabletOrMobileDevice, isTabletOrMobile])
        //create mobile view
        const [isMobile, setIsMobile] = useState(false)
    return isMobile;

}
export default useCheckIsMobile;