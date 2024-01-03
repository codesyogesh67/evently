import React from 'react'
import Container from '@/components/shared/Container'
import Link from "next/link"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-50 shadow-sm ">
        <div className="py-4 border-b-[1px]"
            >
                <Container>
                    <div
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    ">
                        <Link href="/" className="w-36">
                            
                            Evently
                             </Link>
                             <SignedIn>
                             <nav className="md:flex-between hidden w-full max-w-xs">
                                    <NavItems />
                                </nav>
                            </SignedIn>
                         
                        
                             <div className="flex w-32 justify-end gap-3">
                        <SignedIn>

                                <UserButton afterSignOutUrl="/" />
                                <MobileNav />
                        </SignedIn>
                        <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
                        
                                            </div>

                    </div>
                   
                    
                </Container>
                </div>
            
        </div>
    )
}

export default Navbar
