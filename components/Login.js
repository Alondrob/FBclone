import Image from "next/image"
import { signIn } from "next-auth/react"

const Login = () => {
  
  
 return (
    <div className="grid place-items-center">
        <Image
            src="https://links.papareact.com" 
            height={400}
            width={400}
            objectFit="contain"
            alt=""
        />

        <h1 className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
        onClick={signIn}
        >Login With Facebook</h1>
    </div>
  )
}

export default Login