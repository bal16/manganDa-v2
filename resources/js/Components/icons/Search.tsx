import { IoCompass, IoCompassOutline } from "react-icons/io5"

const Search = ({active=false, size='2rem'}:{active?:boolean, size?:string|number}) => {
  active = active == true
  return active ? (
      <IoCompass size={size} />
  ) : (
      <IoCompassOutline size={size} />
  )
}

export default Search
