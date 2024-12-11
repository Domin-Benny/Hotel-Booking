
interface InnerProps {
  key: number
  title: string
  description: string
  image: string
  link: string
  redirect: string

}

const InnerMap: InnerProps[] = [
  {
    key: 1,
    title: "Overview",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.",
    image: "/images/bg-01.jpg",
    link: "/",
    redirect: "Book Now"
  },
  {
    key: 2,
    title: "Rooms",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.",
    image: "/images/bg-02.jpg",
    link: "/rooms",
    redirect: "Book Now"
  },
  {
    key: 3,
    title: "Restaurant",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.",
    image: "/images/bg-03.jpg",
    link: "/restaurant",
    redirect: "Book Now"
  }
]

export default InnerMap
