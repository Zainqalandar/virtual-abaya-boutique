// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const token = req.cookies.get('token'); // Cookie se token ko retrieve karte hain

//   console.log('Token:', token); // Token ko console par print karte hain

//   const url = req.nextUrl;

//   // Agar token nahi hai ya token ki value empty hai
//   if (!token || token === '') {
//     // Agar user /login par hai aur token nahi hai to usko wahi rehne de
//     if (url.pathname === '/login') {
//       return NextResponse.next();
//     }
//     // Baaki cases me /login par redirect kare
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   // Agar token hai aur user /login par hai to usko home ya dashboard par redirect kare
//   if (url.pathname === '/login') {
//     return NextResponse.redirect(new URL('/', req.url)); // Home ya kisi aur page par redirect kare
//   }

//   // Agar token hai to request ko allow kare
//   return NextResponse.next();
// }

// // Middleware ko kin routes par apply karna hai
// export const config = {
//   matcher: ['/', '/dashboard/:path*', '/home/:path*', '/login'], // Routes jahan middleware apply hoga
// };