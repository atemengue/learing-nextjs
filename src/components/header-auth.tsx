'use client';

import * as actions from '@/actions';
import { Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { useSession } from 'next-auth/react';


export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
 if (session.status === "loading") {
  authContent = null ;
 } else if(session?.data?.user) {
    authContent = <Popover placement="left">
        <PopoverTrigger>
        <Avatar src={session.data?.user.image || ''}></Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
    </Popover>
    
  } else {
    authContent = <>
        <NavbarItem>
        <form action={actions.signIn}> 
        <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
        </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signOut}>

        <Button type="submit" color="primary" variant="flat">Sign Out</Button>
          </form>

        </NavbarItem>
    </>
  }

  return authContent;
}