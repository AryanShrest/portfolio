"use client"

import type React from "react"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeItem, setActiveItem] = useState("Home")

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string }) => {
    e.preventDefault()
    setActiveItem(item.name)

    const targetId = item.href.substring(1) // Remove the # from href
    console.log("[v0] Clicking navigation item:", item.name, "Target ID:", targetId)

    const targetElement = document.getElementById(targetId)
    console.log("[v0] Target element found:", !!targetElement)

    if (targetElement) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = targetElement.offsetTop
      const scrollPosition = elementPosition - headerHeight

      console.log("[v0] Element offsetTop:", elementPosition)
      console.log("[v0] Calculated scroll position:", scrollPosition)
      console.log("[v0] Current scroll position:", window.scrollY)

      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, scrollPosition), // Ensure we don't scroll to negative position
          behavior: "smooth",
        })
        console.log("[v0] Scroll initiated to:", Math.max(0, scrollPosition))
      })
    } else {
      console.log("[v0] Element not found with ID:", targetId)
    }
  }

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleNavClick(e, item)}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeItem === item.name ? "text-primary" : "text-foreground"
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
}
