"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UserRound, Stethoscope, Mail, Lock, User } from "lucide-react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [specialization, setSpecialization] = useState("");

  const router = useRouter();

  const handleToggleUserType = () => {
    setIsDoctor(!isDoctor);
  };

  const handleToggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Reset all form fields when switching modes
    setEmail("");
    setPassword("");
    setFullName("");
    setSpecialization("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a network delay of 1.5 seconds
    setTimeout(() => {
      setIsLoading(false);

      // Create user data object based on login or signup mode
      const userData = isLogin
        ? {
            userType: isDoctor ? "doctor" : "patient",
            email: email,
          }
        : {
            userType: isDoctor ? "doctor" : "patient",
            name: fullName,
            email: email,
            specialization: isDoctor ? specialization : null,
          };

      // Save user data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect to the dashboard page with a query parameter for userType
      router.push(`/dashboard?userType=${userData.userType}`);
      onClose();
    }, 1500);
  };

  // Enhanced toggle with smooth animation (UI remains unchanged)
  const CustomToggle = ({ checked, onChange }) => (
    <button
      type="button"
      onClick={onChange}
      className="relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5636e5] focus:ring-offset-2"
      style={{ backgroundColor: checked ? "white" : "rgba(255, 255, 255, 0.4)" }}
    >
      <span
        className="absolute inset-y-0.5 left-0.5 flex items-center justify-center"
        style={{
          transform: checked ? "translateX(28px)" : "translateX(0)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <span className="h-5 w-5 rounded-full bg-[#5636e5] shadow-md transition-all duration-300 ease-in-out" />
      </span>
    </button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl w-11/12 rounded-xl p-0 overflow-hidden shadow-2xl animate-in fade-in-50 zoom-in-95 duration-300">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#5636e5] to-[#7a60ff] p-8 text-white">
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Welcome Back" : "Create Account"}
          </DialogTitle>

          {/* User type toggle */}
          <div className="flex justify-center items-center gap-4 bg-white/10 p-4 rounded-lg transition-all duration-300 ease-in-out">
            <div className={`flex items-center gap-2 transition-opacity duration-300 ${!isDoctor ? "opacity-100" : "opacity-60"}`}>
              <UserRound size={20} />
              <span className="font-medium text-lg">Patient</span>
            </div>
            <CustomToggle checked={isDoctor} onChange={handleToggleUserType} />
            <div className={`flex items-center gap-2 transition-opacity duration-300 ${isDoctor ? "opacity-100" : "opacity-60"}`}>
              <Stethoscope size={20} />
              <span className="font-medium text-lg">Doctor</span>
            </div>
          </div>
        </div>

        {/* Form section with animation */}
        <div className="p-8">
          <div
            className="relative overflow-hidden"
            style={{ height: isLogin ? "auto" : "0", opacity: isLogin ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
          >
            {isLogin && (
              // Login Form
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 text-base">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 py-6 border-gray-200 focus:border-[#5636e5] focus:ring-[#5636e5] text-base rounded-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password" className="text-gray-700 text-base">
                      Password
                    </Label>
                    <a href="#" className="text-sm text-[#5636e5] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10 py-6 border-gray-200 focus:border-[#5636e5] focus:ring-[#5636e5] text-base rounded-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5636e5] to-[#7a60ff] hover:opacity-90 py-6 mt-4 text-lg font-medium rounded-lg relative overflow-hidden"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            )}
          </div>

          <div
            className="relative overflow-hidden"
            style={{ height: !isLogin ? "auto" : "0", opacity: !isLogin ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
          >
            {!isLogin && (
              // Signup Form
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 text-base">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 py-6 border-gray-200 focus:border-[#5636e5] focus:ring-[#5636e5] text-base rounded-lg"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupEmail" className="text-gray-700 text-base">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="signupEmail"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 py-6 border-gray-200 focus:border-[#5636e5] focus:ring-[#5636e5] text-base rounded-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupPassword" className="text-gray-700 text-base">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="signupPassword"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10 py-6 border-gray-200 focus:border-[#5636e5] focus:ring-[#5636e5] text-base rounded-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div
                  className={`space-y-2 transition-all duration-300 ease-in-out ${
                    isDoctor ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <Label htmlFor="specialization" className="text-gray-700 text-base">
                    Specialization
                  </Label>
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="specialization"
                      type="text"
                      placeholder="Enter your specialization"
                      className="pl-10 py-6 border-gray-200 focus:border-[#5636e5] focus:ring-[#5636e5] text-base rounded-lg"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      required={isDoctor}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5636e5] to-[#7a60ff] hover:opacity-90 py-6 mt-4 text-lg font-medium rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Toggle between login and signup */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-base">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={handleToggleAuthMode}
                className="text-[#5636e5] font-medium hover:underline focus:outline-none transition-colors duration-300"
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
