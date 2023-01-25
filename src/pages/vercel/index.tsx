import styles from '@/pages/vercel/Vercel.module.scss'
import VercelLogo from "@/components/image/VercelLogo";

export default function Vercel() {
  return (
    <>
      <div>
        {/* Header */}
        <div className={styles['navbar-wrapper']}>
          <header className={styles['navbar']}>
            {/* Logo */}
            <div className={styles['navbar-logo']}>
              <VercelLogo/>
            </div>

            {/* menu */}
            <div className={styles['navbar-main']}>
              <ul>
                <li>
                  <a href='#'>Features</a>
                </li>
                <li>
                  <a href='#'>Docs</a>
                </li>
                <li>
                  <a href='#'>Templates</a>
                </li>
                <li>
                  <a href='#'>Integrations</a>
                </li>
                <li>
                  <a href='#'>Customers</a>
                </li>
                <li>
                  <a href='#'>Enterprise</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
              </ul>
            </div>

            <div className={styles['navbar-right']}>
              <ul>
                <li>
                  <a href='#'>Contact</a>
                </li>
                <li>
                  <a href='#'>Login</a>
                </li>
                <li>
                  <a className={styles['sign-up']} href='#'>Sign Up</a>
                </li>
              </ul>
            </div>
          </header>
        </div>

        {/* Body */}


        {/* Footer */}

      </div>
    </>
  )
}