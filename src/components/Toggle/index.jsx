import './styles.js'
import { DarkLightBtn, ToggleStyle } from './styles.js'
import Sun from '../../assets/sun.png'
import Moon from '../../assets/moon.png'

export const Toggle = () => {
    return (
        <ToggleStyle>
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <DarkLightBtn>
                <div className="t-button"></div>
            </DarkLightBtn>
        </ToggleStyle>
    )
}