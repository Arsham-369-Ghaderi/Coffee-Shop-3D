import IconsNavbar from '@/ui/navigation/IconsNavbar';
import ListMenuNavbar from '@/ui/navigation/ListMenuNavbar';
import SignupLoginButton from '@/ui/navigation/SignupLoginButton';



function Navbar() {
  return (
    <div className="w-full h-[10vh] shadow sticky top-0 grid grid-cols-9 items-center justify-center">

      <div className='col-span-2 pr-[10vh]'>
        <IconsNavbar/>
      </div>

      <div className='col-span-5'>
        <ListMenuNavbar />
      </div>

      <div className='flex items-center justify-center col-span-2 pl-[10vh]'>
        <SignupLoginButton/>
      </div>

    </div>
  )
}

export default Navbar