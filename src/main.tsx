import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import { NavbarVariantProvider } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { MainLayout } from "@/components/layout/MainLayout"
import { Cart } from "@/pages/Cart"
import { Checkout } from "@/pages/Checkout"
import { Contact } from "@/pages/Contact"
import { Home } from "@/pages/Home"
import { Legal } from "@/pages/Legal"
import { Login } from "@/pages/Login"
import { ProductDetail } from "@/pages/ProductDetail"
import { Register } from "@/pages/Register"
import { Shop } from "@/pages/Shop"
import { TeamRiders } from "@/pages/TeamRiders"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/team",
        element: <TeamRiders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NavbarVariantProvider defaultVibe="action" defaultAesthetic="dark-bold">
        <RouterProvider router={router} />
      </NavbarVariantProvider>
    </ThemeProvider>
  </StrictMode>
)
