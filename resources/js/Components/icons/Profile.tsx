import { FaRegUser, FaUser } from "react-icons/fa"

const Profile = ({active=false, size='2rem'}:{active?:boolean, size?:string|number}) => {
  active = active == true
  return active ? (
      <FaUser size={size} className="p-1" />
  ) : (
      <FaRegUser size={size} className="p-1" />
  )
}

export default Profile
