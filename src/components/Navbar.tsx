import IconsNavbar from '@/ui/navigation/IconsNavbar';
import ListMenuNavbar from '@/ui/navigation/ListMenuNavbar';
import SignupLoginButton from '@/ui/navigation/SignupLoginButton';



function Navbar() {
  return (
    <div className="w-full h-[10vh] fixed top-0 left-0 z-50 grid grid-cols-12 items-center justify-center">

      <div className='col-span-3 pr-[33vh]'>
        <IconsNavbar/>
      </div>

      <div className='col-span-6 pr-[7vh]'>
        <ListMenuNavbar />
      </div>

      <div className='flex items-center justify-center col-span-3 pl-[23vh]'>
        <SignupLoginButton/>
      </div>

    </div>
  )
}

export default Navbar