import './MenuAnimation.css';

const menuPosition = [
    "5.5rem", "26rem", "47rem", "69rem"
]

const menuWidth = [
    "10rem", "11rem", "12rem", "13rem"
]


export const MenuAnimation = () => {
    return (
      <div className='menuAnimation' style={{
        left: `${menuPosition[0]}`, width: `${menuWidth[0]}`
    }}></div>  
    )
}