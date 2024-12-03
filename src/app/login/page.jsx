"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginHeader from "@/components/LoginHeader";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        // Success alert
        alert(result.message);

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(result.user));

        // Redirect based on role
        switch (result.user.role) {
          case "centraladmin":
            router.push("/admin");
            break;
          case "daye":
            router.push("/dashboard");
            break;
          case "divisionadmin":
            router.push("/admin");
            break;
          case "districtadmin":
            router.push("/admin");
            break;
          case "areaadmin":
            router.push("/admin");
            break;
          case "upozilaadmin":
            router.push("/admin");
            break;
          case "user":
            router.push("/dashboard");
            break;
          default:
            setErrorMessage("Unknown role. Please contact support.");
        }
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Invalid email, password, or role.");
      }
    } catch (error) {
      alert("Login error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="sticky top-0">
        <LoginHeader />
      </div>

      <div className="w-1/2 p-8 space-y-6 bg-gray-50 shadow-xl rounded-xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="centraladmin">কেন্দ্রীয় এডমিন</option>
              <option value="divisionadmin">বিভাগীয় এডমিন </option>
              <option value="districtadmin">জেলা এডমিন</option>
              <option value="areaadmin">এলাকার এডমিন</option>
              <option value="upozilaadmin">উপজেলা এডমিন</option>
              <option value="daye">দা'ঈ</option>
              <option value="user">ইউনিয়ন</option>
            </select>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`w-32 py-2 px-4 bg-[#155E75] text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

// "use client";

// import Header from "@/components/Header";
// import LoginHeader from "@/components/LoginHeader";
// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const router = useRouter(); // Next.js router for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     const response = await fetch("/api/login", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       const result = await response.json();

//       alert(result.message);
//       // Store user data in localStorage
//       localStorage.setItem("user", JSON.stringify(result.user));
//       console.log("Login Response:", result);

//       // Redirect based on role
//       if (result.user?.role === "admin") {
//         router.push("/admin");
//       } else if (result.user?.role === "user") {
//         router.push("/dashboard");
//       } else if (result.user?.role === "guest") {
//         router.push("/dashboard");
//       }
//     } else {
//       alert("Invalid email, password, or role.");
//     }
//   };

//   return (
//     <>
//       <div className="sticky top-0">
//         <LoginHeader />
//       </div>

//       <div className="max-w-sm p-8 space-y-6 bg-gray-50 shadow-xl rounded-xl mx-auto mt-10">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>

//           {/* Role Dropdown */}
//           <div>
//             <label
//               htmlFor="role"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Role
//             </label>
//             <select
//               id="role"
//               name="role"
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             >
//               <option value="" disabled>
//                 Select Role
//               </option>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//               <option value="guest">Guest</option>
//             </select>
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="w-32 py-2 px-4 bg-[#155E75] text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
