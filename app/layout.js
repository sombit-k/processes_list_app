import { inter } from "@/app/ui/font"
import { NavbarDemo } from "@/app/ui/navbar";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export const metadata = {
  title: {
    template: '%s | Process List',
    default: 'Process Manager',
  },
  description: 'This app helps you organize the process of software Engineering Models.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      

      <body className={`${inter.className} antialiased bg-black`}>
        {/* Header */}
        
        <NavbarDemo />

        {/* Main Content */}

          {/* implement toaster */}
        <main className="min-h-screen bg-black"> 
          {children}
        </main>

        {/* Footer */}

          <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold mb-2">Process Manager</p>
                <p className="text-sm text-gray-300">
                  &copy; {new Date().getFullYear()} Process Listing app. All rights reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-300 mb-1">
                  Made with <span className="text-red-500 text-lg">❤️</span> by
                </p>
                <p className="text-sm font-medium text-blue-400">
                  Software Development Team (Sombit Karmakar)
                </p>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
