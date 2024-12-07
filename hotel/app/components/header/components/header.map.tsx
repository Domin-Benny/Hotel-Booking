
interface HeaderProps {
  key: number,
  title: string,
  link: string
}

const HeaderMap: HeaderProps[] = [
  {
    key: 1,
    title: "Overview",
    link: "/"
  },
  {
    key: 2,
    title: "Rooms",
    link: "/rooms"
  },
  {
    key: 3,
    title: "Restaurant",
    link: "/restaurant"
  },
  {
    key: 4,
    title: "Events",
    link: "/events"
  },
  {
    key: 5,
    title: "Gallery",
    link: "/gallery"
  }
]

export default HeaderMap