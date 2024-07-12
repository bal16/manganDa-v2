import { HiHome, HiOutlineHome } from "react-icons/hi"

const Home = ({active=false, size='2rem'}:{active?:boolean, size?:string|number}) => {
  active = active == true
  return active ? (
      <HiHome size={size} />
  ) : (
      <HiOutlineHome size={size} />
  )
}

export default Home
