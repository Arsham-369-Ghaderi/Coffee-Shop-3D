import Link from "next/link";

const NavbarListmenu = [
  {
    id: 1,
    title: 'خانه',
    link: '/',
    icon: '',
  },
  {
    id: 2,
    title: 'قهوه',
    link: '/coffee',
    icon: '',
  },
  {
    id: 3,
    title: 'سفارش',
    link: '/order',
    icon: '',
  },
  {
    id: 4,
    title: 'لوازم قهوه',
    link: '/',
    icon: '',
  },
  {
    id: 5,
    title: 'درباره ما',
    link: '/',
    icon: '',
  },
  {
    id: 6,
    title: 'آدرس ما',
    link: '/',
    icon: '',
  },
];

function Navbar() {
  return (
    <div className="w-full h-[10vh] shadow sticky top-0 flex items-center justify-center">
      <div>
        <ul className="flex gap-6 flex-row-reverse">
          {
            NavbarListmenu.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.link} className="sans-semibold text-[20px]">{nav.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar