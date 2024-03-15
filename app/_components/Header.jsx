import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  
  const Menu=[
    {
        id:1,
        name:'Home',
        path:'/'
    },
    {
        id:2,
        name:'Blog',
        path:'/blog'
    },
    {
        id:3,
        name:'Forum',
        path:'/'
    },
    {
        id:4,
        name:'Contact Us',
        path:'/'
    },
  ]
  return (
    <div className='flex items-center justify-between p-4 '>
        <div className="flex items-center gap-80">
            <Image src="/logo.png" alt="logo"
                width={180} height={80}
            />
            <ul className="md:flex gap-8 hidden">
                { Menu.map((item, index)=>(
                    <Link href={item.path} key={index}>
                        <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">{item.name}</li>
                    </Link>
                ))

                }
            </ul>
        </div>
        <Link href='/login' className='inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white'>Get Started</Link>
    </div>
  )
}

export default Header