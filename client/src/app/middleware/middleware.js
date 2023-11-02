import { NextResponse, NextRequest } from "next/server";
import axios from "axios";


export async function middlewere(token) { 
    try {
        // const token = request.cookies.get('token');
        if(!token) { 
            return NextResponse.redirect('http://localhost:3000/login');
        }
        const res = await axios.post(
          `http://localhost:8000/auth/validateToken?token=${token.value}`,
        );
        if(!res.data.isAutorized){
            return NextResponse.redirect('http://localhost:3000/login');
        }
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect('http://localhost:3000/login');
    }
}

// export const config = {
//     marcher: '/'
// }