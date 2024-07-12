import { PiStorefrontDuotone } from "react-icons/pi"

const Store = ({active=false, size='2rem'}:{active?:boolean, size?:string|number}) => {
  active = active == true
  return  (
      <PiStorefrontDuotone size={size} />
  )
}

export default Store

