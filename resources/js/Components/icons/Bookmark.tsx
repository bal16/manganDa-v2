import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri"

const Bookmark = ({active=false, size='2rem'}:{active?:boolean, size?:string|number}) => {
  active = active == true
  return active ? (
      <RiBookmarkFill size={size} className="p-1" />
  ) : (
      <RiBookmarkLine size={size} className="p-1" />
  )
}

export default Bookmark
