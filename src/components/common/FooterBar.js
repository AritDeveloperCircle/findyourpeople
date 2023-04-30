import ReusableNavLink from './ReusableNavLink'

function FooterBar() {
  const navList = [
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Terms of use', href: '/terms of use' },
  ]

  return (
    <footer>
      <span>Logo</span>
      <section className='navItem'>
        {navList.map(({ text, href }) => (
          <ReusableNavLink key={href} text={text} href={href} />
        ))}
      </section>
    </footer>
  )
}

export default FooterBar
