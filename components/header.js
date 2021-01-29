import React from "react"
import Link from "next/link"

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign In", href: `/signin` },
    !currentUser && { label: "Sign Up", href: `/signup` },
    currentUser && { label: "Sign Out", href: `/signout` }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      )
    })

  const handleHome = e => {
    e.preventDefault()
    document.location.href = "/"
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand" onClick={handleHome}>
          Tick8
        </a>
      </Link>

      <div className="d-flex juxtify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  )
}

export default Header
