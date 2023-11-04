import { useState } from "react";
import Layout from "../../components/Layout";

const LoginPage = () => {

	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [pass, setPass] = useState('');
	const [isRevealed, setIsRevealed] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}
	
	const handlePassChange = (e) => {
		setPass(e.target.value);
	}

	const handleClick = () => {
		setIsRevealed(!isRevealed);
	}

	const handleForgot = () => {
		console.log('Forgot Password Clicked')
	}

	const handleSignIn = () => {
		validateEmail();
		console.log('Email:', email);
		console.log('Password:', pass);
	}

	const validateEmail = () => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (email.length == 0) {
			setError('Please fill this field.');
		} else if (!emailRegex.test(email)) {
			setError('Please enter a valid email address');
		} else {
			setError('');
		}
	}

	return (
		<Layout>
			<div className="absolute w-full h-16 bg-gray-500"></div>
			<div className="w-full h-screen flex flex-col justify-center items-center pt-12 px-2 gap-8 font-sans">
				<div className="text-2xl">
					Investors Login
				</div>
				<div className="max-w-md w-full h-auto px-4 py-8 bg-gray-200 rounded-md">
					<form autoComplete="" key='Email' className="mb-3">
						<p className="mb-1 ml-2 text-bold text-base">
							Email :
						</p>
						<input
							id="email"
							className="w-full invalid:bg-red-200 invalid:text-red-800 h-11 mt-1 py-[10px] px-5 rounded-md"
							placeholder='Place your email here'
							type="email"
							value={email}
							onChange={handleEmailChange}
						/>
						{error && (
							<div className="bg-red-500 my-1 pl-5 text-white rounded-md">
								{error}
							</div>
						)}
					</form>
					<div key='Password' className="mb-3">
						<p className="mb-1 ml-2 text-bold text-base">
							Password :
						</p>
						<div className="relative flex flex-col w-full">
							<input
								id="password"
								className=" w-full h-11 mt-1 py-[10px] px-5 rounded-md"
								placeholder='Place your password here'
								type={isRevealed ? 'text' : 'password'}
								value={pass}
								onChange={handlePassChange}
							/>
							<div className="absolute right-0 top-0 bottom-0 h-full flex justify-center items-center pr-2">
								<img 
									src={isRevealed ? "/icons/pass-hide.svg" : "/icons/pass-reveal.svg"} 
									alt="" 
									className={`w-6 h-6 cursor-pointer ${isRevealed ? ``:``}`}
									onClick={handleClick}
								/>
							</div>
						</div>
					</div>
					<div
						className="text-sm underline hover:text-blue-600 cursor-pointer mb-3 ml-2"
						onClick={handleForgot}
					>
						Forgot password
					</div>
					<div
						className="w-full h-11 bg-blue-500 hover:bg-blue-400 flex justify-center items-center leading-normal rounded-md text-white"
						onClick={handleSignIn}
					>
						Login
					</div>
					<div className="text-center mt-5">
						This website is for professional clients only.
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default LoginPage;
