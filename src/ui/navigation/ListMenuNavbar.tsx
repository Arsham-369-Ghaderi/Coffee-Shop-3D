import Link from 'next/link';
import Image from 'next/image';
import { NavbarListmenu } from '../data/NavigationData';


function ListMenuNavbar() {
  return (
    <ul className='flex items-center justify-center gap-20'>
        {
            NavbarListmenu.map((nav) => (
                <li key={nav.id}>
                    <Link href={nav.link} className='hamrah text-[30px] flex gap-1 hover:opacity-50 hover:scale-95 duration-300 cursor-pointer'>
                      {nav.title}
                      {
                        nav.icon &&
                        <Image alt='...' src={nav.icon} className='w-[35px] h-[35px] mt-1'/>
                      }
                    </Link>
                </li>
            ))
        }
    </ul>
  )
}

export default ListMenuNavbar