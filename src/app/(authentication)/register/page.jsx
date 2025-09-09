"use client";

import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth/registerUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import logo from "../../assets/synthera_logo.png";
import shopImg from "../../assets/shop_img3.png";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Register user in DB
    const result = await registerUser({ name, email, password, role: "user" });

    if (result?.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: "User created successfully",
        timer: 1500,
        showConfirmButton: false,
      }).then(async () => {
        form.reset();

        // **Auto login after registration**
        const loginResult = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (loginResult?.ok) {
          router.push("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Please login manually",
          });
          router.push("/login");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User already exists or registration failed",
      });
    }
  };

  const handleSocialLogin = async (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome!",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }, [session?.status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-5xl w-full overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-500 to-blue-700 text-white flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Join Synthera Today
          </h2>
          <p className="text-sm text-center mb-6">
            Create your Synthera account to start managing AI-powered fashion
            collections, track orders, and personalize your online store
            experience.
          </p>
          <Image src={shopImg} alt="Characters" className="w-96" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="text-center">
            <Image src={logo} width={80} className="mx-auto w-44" alt="logo" />
            <div className="mt-2 space-y-2">
              <h3 className="text-2xl font-bold sm:text-3xl text-black">
                Create Your Account
              </h3>
              <p className="text-gray-800 mb-3">
                Fill in your details to sign up
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-black bg-[#F5F7F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#F5F7F9]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full p-3 text-black bg-[#F5F7F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#F5F7F9]"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full p-3 text-black bg-[#F5F7F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#F5F7F9]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Register
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-gray-400 text-sm">
              Or Register With
            </span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => {
                handleSocialLogin("google");
              }}
              className="flex-1 flex text-black items-center justify-center p-3 border-2 border-[#1E40AF] rounded-lg shadow-sm hover:bg-[#E0E7FF] hover:border-[#1C3A9B] transition duration-300"
            >
              <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
              Google
            </button>
            <button
              onClick={() => {
                handleSocialLogin("github");
              }}
              className="flex-1 text-black flex items-center justify-center p-3 border-2 border-[#1E40AF] rounded-lg shadow-sm hover:bg-[#E0E7FF] hover:border-[#1C3A9B] transition duration-300"
            >
              <FaGithub className="w-5 h-5 mr-2 text-gray-900" />
              GitHub
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
